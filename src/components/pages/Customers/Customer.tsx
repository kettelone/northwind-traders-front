import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import OneItem from '../../MainContainer/OneItem';
import CustomerService from '../../../API/CustomerService';
import NavButtonElement from '../../UI/Button/NavButtonElement';

const Customer = () => {
  const params = useParams()
  const [customer, setCustomer] = useState()

  useEffect(() => {
    async function fetchSupplier() {
      if (!params.id) {
        return 
      }
      const response = await CustomerService.getOneById(params.id)
      setCustomer(response.data)
    }
    fetchSupplier()
  }, [params])

  if (!customer) {
    return null
  }
  const firstColunmItems = Math.ceil(Object.keys(customer).length / 2)

  return (
    <div className='main-container-wrapper'>
      <OneItem
        header={'Customer information'}
        data={customer}
        firstColunmItems={firstColunmItems}
        backTo={'/customers'}
      />
      <NavButtonElement backTo={'/customers'} />
    </div>
  );
};

export default Customer;