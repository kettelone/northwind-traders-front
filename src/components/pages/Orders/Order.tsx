import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import OneItem from '../../MainContainer/OneItem';
import OrdersService from '../../../API/OrdersService'
import TableThead from '../../MainContainer/TableThead';
import NavButtonElement from '../../UI/Button/NavButtonElement';
import ProductInOrderList from './ProductInOrderList';

const Order = () => {
  const params = useParams()
  const [order, setOrder] = useState({
    'Customer Id':''
  })
  const [productsInOrder, setProductsInOrder] = useState([  ])

  useEffect(() => {
    async function fetchOrder() {
      if (!params.id) {
        return
      }

      const response = await OrdersService.getOneById(params.id)
      setProductsInOrder(response.data.productsInOrder)
      const temp = { ...response.data }
      delete temp.productsInOrder
      setOrder(temp)
    }
    fetchOrder()
  }, [])
  const firstColunmItems = Math.ceil(Object.keys(order).length / 2)
  return (
    <div className='main-container-wrapper'>
    <OneItem
      header={'Order Information'}
      data={order}
        firstColunmItems={firstColunmItems}
 
      externalLink={`/customer/${order['Customer Id']}`}
      externalProperty={'Customer Id'}
      />
      <ProductInOrderList
        table={
          <TableThead
            theads={[
              'Product',
              'Quantity',
              'Order Price',
              'Total Price',
              'Discount',
            ]}
          />
        }
        items={productsInOrder}
        base={'/product'}
        header={'Products in Order'}
        tableValues={
          [
            "productName",
            "quantity",
            "unitPrice",
            "totalPrice",
            "discount"
          ]
        }
      />
      <NavButtonElement backTo={'/orders'} />
    </div>
  );
};

export default Order;