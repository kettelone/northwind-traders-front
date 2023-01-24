import axios from 'axios'

export default class CustomerService {
  static async getAll(limit, page) {
    const customers = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/customer/all`, {
      params: {
        limit,
        page
      }
    })
    return customers
  }

  static async getOneById(id) {
    const customer = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/customer/one`, {
      params: {
        id
      }
    })
    return customer
  }
}