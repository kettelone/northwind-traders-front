import axios from 'axios'

export default class SupplierService {
	static async getAll(limit: number, page: number) {
		const suppliers = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/api/supplier/all`,
			{
				params: {
					limit,
					page
				}
			}
		)
		return suppliers
	}

	static async getOneById(id: string) {
		const suppliers = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/api/supplier/one`,
			{
				params: {
					id
				}
			}
		)
		return suppliers
	}
}
