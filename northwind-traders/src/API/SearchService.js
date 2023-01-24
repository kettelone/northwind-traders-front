import axios from 'axios'

export default class SearchService {

  static async getProducts(products) {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/info/search`, {
      params: {
        products
      }
    })
    return result
  }

  static async getCustomers(customers) {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/info/search`, {
      params: {
        customers
      }
    })
    return result
  }
}