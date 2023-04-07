import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	margin-top: 0.5rem;
`

const Description = styled.p`
  font-size: .875rem;
  color: rgb(156 163 175);
`

interface Props {
	result: {
		id: string,
		productName: string,
		quantityPerUnit: string,
		unitPrice: string,
		unitsInStock: string
	}
	index: number
}

const ProductResult = (props:Props) => {
	const {id, productName, quantityPerUnit, unitPrice, unitsInStock} = props.result
	return (
		<Container>
			<p>
				<Link to={`/product/${id}`}>
					{productName}
				</Link>
			</p>
			<Description>
				#{props.index + 1} Quantity Per Unit: {quantityPerUnit}, Price: {unitPrice}, Stock: {unitsInStock}
			</Description>
		</Container>
	);
}

export default ProductResult
