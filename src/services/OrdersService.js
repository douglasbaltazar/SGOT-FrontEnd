import axios from 'axios';

const ORDERS_REST_API_ALL = 'http://localhost:8080/api/v1/orders/';
const ORDERS_REST_API_GET500 = 'http://localhost:8080/api/v1/ordersabove500/';
const ORDERS_REST_API_CREATE = 'http://localhost:8080/api/v1/orders';


class OrdersService {
    getOrders() {
        return axios.get(ORDERS_REST_API_ALL);
    }
    getOrdersAbove500() {
        return axios.get(ORDERS_REST_API_GET500);
    }   
    createOrder(state) {
        return axios.post(ORDERS_REST_API_CREATE, state);
    }
}

export default new OrdersService();