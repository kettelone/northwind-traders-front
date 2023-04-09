import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { update } from '../../../app/updateSQLSlice';
import CustomerService from '../../../services/customerService';
import { getPageCount } from '../../../utils/pages'
import Pagination from '../../common/pagination/Paginantion'
import TableThead from '../../common/tableThead/TableThead';
import Loader from '../../common/loader/Loader';
import Header from '../../common/header/Header';
import ItemsList from '../../common/itemsList/ItemsList';

const CustomersList = () => {
  const limit = 20
  const [customers, setCustomers] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isCustomersLoading, setIsCustomersLoading] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchCustomers() {
      setIsCustomersLoading(true)
      const response = await CustomerService.getAll(limit, currentPage)
      const { rows, count } = response.data.customers
      const { data, metrics } = response.data.searchData
      setCustomers(rows)
      setTotalPages(getPageCount(count, limit))
      dispatch(update({ data, metrics }))
      setIsCustomersLoading(false)
    }
    fetchCustomers();
  }, [currentPage, limit])

  const theads = ['Company', 'Contact', 'Title', 'City', 'Country'];

  return (
    <ItemsList
      isLoading={isCustomersLoading}
      loader={<Loader value={'customer'} />}
      header={<Header title={'Customers'} />}
      table={
        <TableThead
          theads={[
            ...theads,
            ''
          ]}
        />
      }
      items={customers}
      base={'/customer'}
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
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      }
    />
  );

};

export default CustomersList;