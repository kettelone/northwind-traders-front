import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import OneItem from '../../MainContainer/OneItem';
import EmployeeService from '../../../API/EmployeeService';
import NavButtonElement from '../../UI/Button/NavButtonElement';

const Employee = () => {
  const {id} = useParams()
  const [employee, setEmployee] = useState([])
  const [reportsToPersonId, setReportsToPersonId] = useState()
  const dispatch = useDispatch()


  useEffect(() => {
    async function fetchSupplier() {
      if (!id) {
        return
      }
      const response = await EmployeeService.getOneById(id)
      const { data, metrics } = response.data.searchData
      setReportsToPersonId(response.data.employee.reportsToPersonId)
      delete response.data.employee.reportsToPersonId
      setEmployee(response.data.employee)
      dispatch({ type: "ADD_SQL", payload: data, metrics })
    }
    fetchSupplier()
  }, [id])

  const firstColunmItems = Math.ceil(Object.keys(employee).length / 2)

  return (
    <div className='main-container-wrapper'>
      <OneItem
        header={'Employee information'}
        data={employee}
        firstColunmItems={firstColunmItems}
        backTo={'/employees'}
        externalLink={`/employee/${reportsToPersonId}`}
        externalProperty={'Reports To'}
      />
      <NavButtonElement backTo={'/employees'} />
    </div>
  );
};

export default Employee;