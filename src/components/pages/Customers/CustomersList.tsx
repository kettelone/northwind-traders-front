import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import CustomerService from '../../../API/CustomerService';
import { getPageCount } from '../../../utils/pages'
import Pagination from '../../UI/Pagination/Paginantion';
import TableThead from '../../MainContainer/TableThead';
import Loader from '../../UI/Loader/Loader';
import Header from '../../MainContainer/Header';
import ItemsList from '../../MainContainer/ItemsList';

const CustomersList = () => {
  const limit = 20
  const [customers, setCustomers] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isCustomersLoading, setIsCustomersLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchCustomers() {
      setIsCustomersLoading(true)
      const response = await CustomerService.getAll(limit, currentPage)
      const { rows, count } = response.data.customers
      const { data, metrics } = response.data.searchData
      setCustomers(rows)
      setTotalPages(getPageCount(count, limit))
      dispatch({ type: "ADD_SQL", payload: data , metrics })
      setIsCustomersLoading(false)
    }
    fetchCustomers();
  }, [currentPage, limit])
  return (
    <ItemsList
      isLoading={isCustomersLoading}
      loader={<Loader value={'customer'} />}
      header={<Header title={'Customers'} />}
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
      items={customers}
      base={'/customer'}
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