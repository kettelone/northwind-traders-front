import React from 'react'
import { Link } from 'react-router-dom'

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
		<div className='search-container'>
			<p className='search-result-name'>
				<Link to={`/product/${id}`}>
					{productName}
				</Link>
			</p>
			<p className='search-result-description'>
				#{props.index + 1} Quantity Per Unit: {quantityPerUnit}, Price: {unitPrice}, Stock: {unitsInStock}
			</p>
		</div>
	);
}

export default ProductResult
