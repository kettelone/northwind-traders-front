import axios from 'axios'

export default class OrdersService {
	static async getAll(limit: number, page: number) {
		const orders = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/api/order/all`,
			{
				params: {
					limit,
					page
				}
			}
		)
		return orders
	}

	static async getOneById(id: string) {
		const order = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/api/order/one`,
			{
				params: {
					id
				}
			}
		)
		return order
	}
}
