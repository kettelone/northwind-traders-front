import React, { useState, useEffect } from 'react';
import EmployeeService from '../../../services/employeeService';
import { getPageCount } from '../../../utils/pages'
import Pagination from '../../common/pagination/Paginantion'
import TableThead from '../../common/tableThead/TableThead';
import Loader from '../../common/loader/Loader';
import Header from '../../common/header/Header';
import ItemsList from '../../common/itemsList/ItemsList';
import { useAppDispatch } from '../../../app/hooks';
import { update } from '../../../app/updateSQLSlice';


const EmployeesList = () => {
  const limit = 20
  const [employees, setEmployees] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isSuppliersLoading, setIsSuppliersLoading] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchEmployees() {
      setIsSuppliersLoading(true)
      const response = await EmployeeService.getAll(limit, currentPage)
      const { rows, count } = response.data.employees
      const { data, metrics } = response.data.searchData
      setEmployees(rows)
      setTotalPages(getPageCount(count, limit))
      dispatch( update({data, metrics }))
      setIsSuppliersLoading(false)
    }
    fetchEmployees();
  }, [currentPage, limit])

  const theads = ['Name','Title','City','Phone','Country'];

  return (
    <ItemsList
      isLoading={isSuppliersLoading}
      loader={<Loader value={'employee'} />}
      header={<Header title={'Employees'} />}
      table={
        <TableThead
          theads={[
            "",
            ...theads,
            ''
          ]}
        />
      }
      items={employees}
      base={'/employee'}
      theads={theads}
      tableValues={
        [
          "fullName",
          "title",
          "city",
          "homePhone",
          "country",
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