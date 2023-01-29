import React, { useState, useEffect} from 'react';
import OrdersService from '../../../API/OrdersService';
import { getPageCount } from '../../../utils/pages'
import TableThead from '../../MainContainer/TableThead';
import Loader from '../../UI/Loader/Loader';
import Header from '../../MainContainer/Header';
import ItemsList from '../../MainContainer/ItemsList';
import Pagination from '../../UI/Pagination/Paginantion';


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

  return (
    <ItemsList
      isLoading={isSuppliersLoading}
      loader={<Loader value={'order'} />}
      header={<Header title={'Orders'} />}
      table={
        <TableThead
          theads={[
            'Id',
            'Total Price',
            'Products',
            'Quantity',
            'Shipped',
            'Ship Name',
            'City',
            'Country'
          ]}
        />
      }
      items={orders}
      base={'/order'}
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