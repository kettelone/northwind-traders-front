import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks';
import { update } from '../../../app/updateSQLSlice';
import styled from 'styled-components';
import OneItem from '../../common/oneItem/OneItem';
import CustomerService from '../../../services/customerService';
import NavButtonElement from '../../common/button/NavButtonElement';

const Container = styled.div`
  padding-bottom: 1.5em;
`

const Customer = () => {
  const {id} = useParams()
  const [customer, setCustomer] = useState()
  const [isCustomerLoading, setIsCustomerLoading] = useState(false)

  const dispatch = useAppDispatch()


  useEffect(() => {
    async function fetchSupplier() {
      if (!id) {
        return 
      }
      setIsCustomerLoading(true)
      const response = await CustomerService.getOneById(id)
      const { customer } = response.data
      const { data, metrics } = response.data.searchData
      dispatch(update({ data, metrics }))
      setCustomer(customer)
      setIsCustomerLoading(false)
    }
    fetchSupplier()
  }, [id])

  if (!customer) {
    return null
  }
  const firstColunmItems = Math.ceil(Object.keys(customer).length / 2)
  return (
    <Container>
        <OneItem
          header={'Customer information'}
          data={customer}
          firstColunmItems={firstColunmItems}
          backTo={'/customers'}
        />
        <NavButtonElement backTo={'/customers'} />

    </Container>
  );
};

export default Customer;