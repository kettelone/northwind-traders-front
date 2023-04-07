import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { update } from '../../../app/updateSQLSlice';
import ProductService from '../../../services/productsService';
import { getPageCount } from '../../../utils/pages'
import Pagination from '../../common/pagination/Paginantion';
import TableThead from '../../common/tableThead/TableThead';
import Loader from '../../common/loader/Loader';
import Header from '../../common/header/Header';
import ItemsList from '../../common/itemsList/ItemsList';

const ProductsList = () => {
  const limit = 20
  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isSuppliersLoading, setIsSuppliersLoading] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchProducts() {
      setIsSuppliersLoading(true)
      const response = await ProductService.getAll(limit, currentPage)
      const { rows, count } = response.data.products
      const { data, metrics } = response.data.searchData
      setProducts(rows)
      setTotalPages(getPageCount(count, limit))
      dispatch(update({ data, metrics }))
      setIsSuppliersLoading(false)
    }
    fetchProducts();
  }, [currentPage, limit])

  return (
    <ItemsList
      isLoading={isSuppliersLoading}
      loader={<Loader value={'product'} />}
      header={<Header title={'Products'} />}
      table={
        <TableThead
          theads={[
            'Name',
            'Qt per unit',
            'Price',
            'Stock',
            'Orders'
          ]}
        />
      }
      items={products}
      base={'/product'}
      tableValues={
        [
          "productName",
          "quantityPerUnit",
          "unitPrice",
          "unitsInStock",
          "unitsOnOrder"
        ]
      }
      pagination={
        <Pagination
          currentPage={currentPage}
          totalCount={totalPages * limit}
          pageSize={limit}
          onPageChange={page => setCurrentPage(page)}
        />
      }
    />
  );
};

export default ProductsList;