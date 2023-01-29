import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import OneItem from '../../MainContainer/OneItem';
import SupplierService from '../../../API/SupplierService';
import NavButtonElement from '../../UI/Button/NavButtonElement';

const Supplier = () => {
  const params = useParams()
  const [supplier, setSupplier] = useState([])

  useEffect(() => {
    async function fetchSupplier() {
      if (!params.id)
        return 
      
      const response = await SupplierService.getOneById(params.id)
      setSupplier(response.data)
    }
    fetchSupplier()
  }, [])
  const firstColunmItems = Math.ceil(Object.keys(supplier).length / 2)
  return (
    <div className='main-container-wrapper'>
      <OneItem
        header={'Supplier Information'}
        data={supplier}
        firstColunmItems={firstColunmItems}
      />
      <NavButtonElement backTo={'/suppliers' } />
    </div>
  );
};

export default Supplier;