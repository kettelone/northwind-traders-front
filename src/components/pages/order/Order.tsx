import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import OneItem from '../../common/oneItem/OneItem';
import OrdersService from '../../../services/ordersService'
import TableThead from '../../common/tableThead/TableThead';
import NavButtonElement from '../../common/button/NavButtonElement';
import ProductInOrderList from '../orders/ProductInOrderList';

const Container = styled.div`
   padding-bottom: 1.5em;
`

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
    <Container>
      {order
        ?
        <div>
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
        : 'No such order'
      }
    </Container>
  );
};

export default Order;