import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks';
import { update } from '../../../app/updateSQLSlice';
import styled from 'styled-components';
import OneItem from '../../common/oneItem/OneItem';
import EmployeeService from '../../../services/employeeService';
import NavButtonElement from '../../common/button/NavButtonElement';

const Container = styled.div`
  padding-bottom: 1.5em;
`

const Employee = () => {
  const {id} = useParams()
  const [employee, setEmployee] = useState([])
  const [reportsToPersonId, setReportsToPersonId] = useState()
  const dispatch = useAppDispatch()


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
      dispatch(update({ data, metrics }))
    }
    fetchSupplier()
  }, [id])

  const firstColunmItems = Math.ceil(Object.keys(employee).length / 2)

  return (
    <Container>
          <OneItem
            header={'Employee information'}
            data={employee}
            firstColunmItems={firstColunmItems}
            backTo={'/employees'}
            externalLink={`/employee/${reportsToPersonId}`}
            externalProperty={'Reports To'}
          />
          <NavButtonElement backTo={'/employees'} />

    </Container>
  );
};

export default Employee;