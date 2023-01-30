import React, { useState, useEffect } from 'react';
import EmployeeService from '../../../API/EmployeeService';
import { getPageCount } from '../../../utils/pages'
import Pagination from '../../UI/Pagination/Paginantion'
import TableThead from '../../MainContainer/TableThead';
import Loader from '../../UI/Loader/Loader';
import Header from '../../MainContainer/Header';
import ItemsList from '../../MainContainer/ItemsList';
import { useDispatch } from 'react-redux'


const EmployeesList = () => {
  const limit = 20
  const [employees, setEmployees] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isSuppliersLoading, setIsSuppliersLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchEmployees() {
      setIsSuppliersLoading(true)
      const response = await EmployeeService.getAll(limit, currentPage)
      const { rows, count } = response.data.employees
      const { data, metrics } = response.data.searchData
      setEmployees(rows)
      setTotalPages(getPageCount(count, limit))
      dispatch({ type: "ADD_SQL", payload: data, metrics })
      setIsSuppliersLoading(false)
    }
    fetchEmployees();
  }, [currentPage, limit])

  return (
    <ItemsList
      isLoading={isSuppliersLoading}
      loader={<Loader value={'employee'} />}
      header={<Header title={'Employees'} />}
      table={
        <TableThead
          theads={[
            'Name',
            'Title',
            'City',
            'Phone',
            'Country'
          ]}
        />
      }
      items={employees}
      base={'/employee'}
      tableValues={
        [
          "fullName",
          "title",
          "city",
          "homePhone",
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

export default EmployeesList;