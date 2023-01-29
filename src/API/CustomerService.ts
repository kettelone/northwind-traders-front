import axios from 'axios'

export default class CustomerService {
	static async getAll(limit: number, page: number) {
		console.log(process.env.REACT_APP_SERVER_URL)
		const customers = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/api/customer/all`,
			{
				params: {
					limit,
					page
				}
			}
		)
		return customers
	}

	static async getOneById(id: string) {
		const customer = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/api/customer/one`,
			{
				params: {
					id
				}
			}
		)
		return customer
	}
}
