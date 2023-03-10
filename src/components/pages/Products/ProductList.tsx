import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import ProductService from '../../../API/ProductsService';
import { getPageCount } from '../../../utils/pages'
import Pagination from '../../UI/Pagination/Paginantion';
import TableThead from '../../MainContainer/TableThead';
import Loader from '../../UI/Loader/Loader';
import Header from '../../MainContainer/Header';
import ItemsList from '../../MainContainer/ItemsList';

const ProductsList = () => {
  const limit = 20
  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isSuppliersLoading, setIsSuppliersLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchProducts() {
      setIsSuppliersLoading(true)
      const response = await ProductService.getAll(limit, currentPage)
      const { rows, count } = response.data.products
      const { data, metrics } = response.data.searchData
      setProducts(rows)
      setTotalPages(getPageCount(count, limit))
      dispatch({ type: "ADD_SQL", payload: data, metrics })
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