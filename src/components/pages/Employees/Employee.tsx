import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import OneItem from '../../MainContainer/OneItem';
import EmployeeService from '../../../API/EmployeeService';
import NavButtonElement from '../../UI/Button/NavButtonElement';

const Employee = () => {
  const params = useParams()
  const [employee, setEmployee] = useState([])
  const [reportsToPersonId, setReportsToPersonId] = useState()

  useEffect(() => {
    async function fetchSupplier() {
      if (!params.id) {
        return
      }
      const response = await EmployeeService.getOneById(params.id)
      setReportsToPersonId(response.data.reportsToPersonId)
      delete response.data.reportsToPersonId
      setEmployee(response.data)
    }
    fetchSupplier()
  }, [params])

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