import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import SupplierService from '../../../API/SupplierService';
import  {getPageCount}  from '../../../utils/pages'
import Pagination from '../../UI/Pagination/Paginantion';
import TableThead from '../../MainContainer/TableThead';
import Loader from '../../UI/Loader/Loader';
import Header from '../../MainContainer/Header';
import ItemsList from '../../MainContainer/ItemsList';


const SuppliersList = () => {
  const limit = 20
  const [suppliers, setSuppliers] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isSuppliersLoading, setIsSuppliersLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchSuppliers() {
      setIsSuppliersLoading(true)
      const response = await SupplierService.getAll(limit, currentPage)
      const { rows, count } = response.data.suppliers
      const { data, metrics } = response.data.searchData
      setSuppliers(rows)
      setTotalPages(getPageCount(count, limit))
      dispatch({ type: "ADD_SQL", payload: data, metrics })

      setIsSuppliersLoading(false)
    }
    fetchSuppliers();
  }, [currentPage, limit])
  
  return (
    <ItemsList
      isLoading={isSuppliersLoading}
      loader={<Loader value={'supplier'} />}
      header={<Header title={'Suppliers'} />}
      table={
        <TableThead
          theads={[
            'Company',
            'Contact',
            'Title',
            'City',
            'Country'
          ]}
        />
      }
      items={suppliers}
      base={'/supplier'}
      tableValues={
        [
          "companyName",
          "contactName",
          "contactTitle",
          "city",
          "country"
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

export default SuppliersList;