import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { update } from '../../../app/updateSQLSlice';
import SupplierService from '../../../services/supplierService';
import  {getPageCount}  from '../../../utils/pages'
import Pagination from '../../common/pagination/Paginantion';
import TableThead from '../../common/tableThead/TableThead';
import Loader from '../../common/loader/Loader';
import Header from '../../common/header/Header';
import ItemsList from '../../common/itemsList/ItemsList';


const SuppliersList = () => {
  const limit = 20
  const [suppliers, setSuppliers] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isSuppliersLoading, setIsSuppliersLoading] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchSuppliers() {
      setIsSuppliersLoading(true)
      const response = await SupplierService.getAll(limit, currentPage)
      const { rows, count } = response.data.suppliers
      const { data, metrics } = response.data.searchData
      setSuppliers(rows)
      setTotalPages(getPageCount(count, limit))
      dispatch(update({ data, metrics }))

      setIsSuppliersLoading(false)
    }
    fetchSuppliers();
  }, [currentPage, limit])

  const theads = [
    'Company',
    'Contact',
    'Title',
    'City',
    'Country',]
  
  return (
    <ItemsList
      isLoading={isSuppliersLoading}
      loader={<Loader value={'supplier'} />}
      header={<Header title={'Suppliers'} />}
      table={
        <TableThead
          theads={[
            ...theads,
            ''
          ]}
        />
      }
      items={suppliers}
      base={'/supplier'}
      theads={theads}
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