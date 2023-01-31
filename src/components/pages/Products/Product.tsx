import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import OneItem from '../../MainContainer/OneItem';
import ProductService from '../../../API/ProductsService';
import NavButtonElement from '../../UI/Button/NavButtonElement';

const Product = () => {
  const {id} = useParams()
  const [product, setProduct] = useState([])
  const [supplierId, setSupplierId] = useState()
  const dispatch = useDispatch()


  useEffect(() => {
    async function fetchSupplier() {
      if (!id) return
      const response = await ProductService.getOneById(id)
      setSupplierId(response.data.finalProduct.supplierId)
      delete response.data.finalProduct.supplierId
      const { data, metrics } = response.data.searchData
      dispatch({ type: "ADD_SQL", payload: data, metrics })
      setProduct(response.data.finalProduct)
    }
    fetchSupplier()
  }, [])
  const firstColunmItems = Math.ceil(Object.keys(product).length / 2)

  return (
    <div className='main-container-wrapper'>
      <OneItem
        header={'Product Information'}
        data={product}
        firstColunmItems={firstColunmItems}
        externalLink={`/supplier/${supplierId}`}
        externalProperty={'Supplier'}
      />
      <NavButtonElement backTo={'/products' } />
    </div>
  );
};

export default Product;