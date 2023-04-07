import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks';
import { update } from '../../../app/updateSQLSlice';
import styled from 'styled-components';
import OneItem from '../../common/oneItem/OneItem';
import SupplierService from '../../../services/supplierService';
import NavButtonElement from '../../common/button/NavButtonElement';

const Container = styled.div`
  padding-bottom: 1.5em;
`

const Supplier = () => {
  const {id} = useParams()
  const [supplier, setSupplier] = useState([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function fetchSupplier() {
      if (!id)
        return 
      
      const response = await SupplierService.getOneById(id)
      const { supplier } = response.data
      const { data, metrics } = response.data.searchData
      dispatch(update({ data, metrics }))

      setSupplier(supplier)
    }
    fetchSupplier()
  }, [id])
  const firstColunmItems = Math.ceil(Object.keys(supplier).length / 2)
  return (
    <Container>
      {supplier
        ?
        <div>
          <OneItem
            header={'Supplier Information'}
            data={supplier}
            firstColunmItems={firstColunmItems}
          />
          <NavButtonElement backTo={'/suppliers'} />
        </div>
        :'No such supplier'
      }
    </Container>
  );
};

export default Supplier;