import axios from 'axios'

export default class EmployeeService {
	static async getAll(limit: number, page: number) {
		const employees = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/api/employee/all`,
			{
				params: {
					limit,
					page
				}
			}
		)
		return employees
	}

	static async getOneById(id: string) {
		const employee = await axios.get(
			`${process.env.REACT_APP_SERVER_URL}/api/employee/one`,
			{
				params: {
					id
				}
			}
		)
		return employee
	}
}
