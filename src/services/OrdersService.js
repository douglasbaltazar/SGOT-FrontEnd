import axios from 'axios';

const ORDERS_REST_API = 'http://localhost:8080/api/v1/orders/';


class OrdersService {
    getOrders() {
        return axios.get(ORDERS_REST_API);
    }
}

export default new OrdersService();