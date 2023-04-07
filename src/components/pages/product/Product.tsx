import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks';
import { update } from '../../../app/updateSQLSlice';
import styled from 'styled-components';
import OneItem from '../../common/oneItem/OneItem';
import ProductService from '../../../services/productsService';
import NavButtonElement from '../../common/button/NavButtonElement';

const Container = styled.div`
    padding-bottom: 1.5em;
`

const Product = () => {
  const {id} = useParams()
  const [product, setProduct] = useState([])
  const [supplierId, setSupplierId] = useState()
  const dispatch = useAppDispatch()


  useEffect(() => {
    async function fetchSupplier() {
      if (!id) return
      const response = await ProductService.getOneById(id)
      setSupplierId(response.data.finalProduct.supplierId)
      delete response.data.finalProduct.supplierId
      const { data, metrics } = response.data.searchData
      dispatch(update({ data, metrics }))
      setProduct(response.data.finalProduct)
    }
    fetchSupplier()
  }, [])
  const firstColunmItems = Math.ceil(Object.keys(product).length / 2)

  return (
    <Container>
      {product
        ?
        <div>
          <OneItem
            header={'Product Information'}
            data={product}
            firstColunmItems={firstColunmItems}
            externalLink={`/supplier/${supplierId}`}
            externalProperty={'Supplier'}
          />
          <NavButtonElement backTo={'/products'} />
        </div>
        : 'No such product'
      }
    </Container>
  );
};

export default Product;