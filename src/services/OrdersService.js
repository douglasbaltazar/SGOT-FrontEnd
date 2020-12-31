import axios from 'axios';

const ORDERS_REST_API_ALL = 'http://localhost:8080/api/v1/orders/';
const ORDERS_REST_API_GET500 = 'http://localhost:8080/api/v1/ordersabove500/';


class OrdersService {
    getOrders() {
        return axios.get(ORDERS_REST_API_ALL);
    }
    getOrdersAbove500() {
        return axios.get(ORDERS_REST_API_GET500)
    }
}

export default new OrdersService();