import axios from 'axios'

export default class ProductService {
	static async getAll(limit: number, page: number) {
		const products = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/api/product/all`,
			{
				params: {
					limit,
					page
				}
			}
		)
		return products
	}

	static async getOneById(id: string) {
		const product = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/api/product/one`,
			{
				params: {
					id
				}
			}
		)
		return product
	}
}
