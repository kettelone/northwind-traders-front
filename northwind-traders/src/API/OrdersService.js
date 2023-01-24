import axios from 'axios'

export default class OrdersService {
  static async getAll(limit, page) {
    const orders = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/order/all`, {
      params: {
        limit,
        page
      }
    })
    return orders
  }

  static async getOneById(id) {
    const order = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/order/one`, {
      params: {
        id
      }
    })
    return order
  }
}