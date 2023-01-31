import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import OneItem from '../../MainContainer/OneItem';
import SupplierService from '../../../API/SupplierService';
import NavButtonElement from '../../UI/Button/NavButtonElement';

const Supplier = () => {
  const {id} = useParams()
  const [supplier, setSupplier] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchSupplier() {
      if (!id)
        return 
      
      const response = await SupplierService.getOneById(id)
      const { supplier } = response.data
      const { data, metrics } = response.data.searchData
      dispatch({ type: "ADD_SQL", payload: data, metrics })

      setSupplier(supplier)
    }
    fetchSupplier()
  }, [id])
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