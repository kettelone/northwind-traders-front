import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import OneItem from '../../MainContainer/OneItem';
import ProductService from '../../../API/ProductsService';
import NavButtonElement from '../../UI/Button/NavButtonElement';

const Product = () => {
  const params = useParams()
  const [product, setProduct] = useState([])
  const [supplierId, setSupplierId] = useState()

  useEffect(() => {
    async function fetchSupplier() {

      if (!params.id)
        return
      
      const response = await ProductService.getOneById(params.id)
      setSupplierId(response.data.supplierId)
      delete response.data.supplierId
      setProduct(response.data)
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