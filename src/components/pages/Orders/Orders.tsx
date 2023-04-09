import React, { useState, useEffect} from 'react';
import OrdersService from '../../../services/ordersService';
import { getPageCount } from '../../../utils/pages'
import TableThead from '../../common/tableThead/TableThead';
import Loader from '../../common/loader/Loader';
import Header from '../../common/header/Header';
import ItemsList from '../../common/itemsList/ItemsList';
import Pagination from '../../common/pagination/Paginantion';


const OrdersList = () => {
  const limit = 20
  const [orders, setOrders] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isSuppliersLoading, setIsSuppliersLoading] = useState(false)

  useEffect(() => {
    async function fetchEmployees() {
      setIsSuppliersLoading(true)
      const response = await OrdersService.getAll(limit, currentPage)
      setOrders(response.data.orders)
      setTotalPages(getPageCount(response.data.count, limit))
      setIsSuppliersLoading(false)
    }
    fetchEmployees();
  }, [currentPage, limit])

  const theads = ['Id',
    'Total Price',
    'Products',
    'Quantity',
    'Shipped',
    'Ship Name',
    'City',
    'Country'];


  return (
    <ItemsList
      isLoading={isSuppliersLoading}
      loader={<Loader value={'order'} />}
      header={<Header title={'Orders'} />}
      table={
        <TableThead
          theads={theads}
        />
      }
      items={orders}
      base={'/order'}
      theads={theads}
      tableValues={
        [
          "id",
          "totalPrice",
          "totalProducts",
          "totalQuantity",
          "shippedDate",
          "shipName",
          "shipCity",
          "shipCountry"
        ]
      }
      pagination={<Pagination
        currentPage={currentPage}
        totalCount={totalPages * limit}
        pageSize={limit}
        onPageChange={page => setCurrentPage(page)}
      />
      }
    />
  );
};

export default OrdersList;