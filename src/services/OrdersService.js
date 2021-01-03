import axios from 'axios';
import TransportOrderService from './TransportOrderService';

const ORDERS_REST_API_ALL = 'http://localhost:8080/api/v1/orders2/';
const ORDERS_REST_API_GET500 = 'http://localhost:8080/api/v1/ordersabove500/';
const ORDERS_REST_API_CREATE = 'http://localhost:8080/api/v1/orders';
const ORDER_GET_LAST_ID = 'http://localhost:8080/api/v1/ordersLastId/';


class OrdersService {
    getOrders() {
        return axios.get(ORDERS_REST_API_ALL);
    }
    getOrdersAbove500() {
        return axios.get(ORDERS_REST_API_GET500);
    }   
    createOrder(state) {
        console.log(state);
        this.getLastId().then((response) => {
            var obj = new Object();
            obj.idProduct = parseInt(response.data) + 1;
            obj.sent = state.sent;
            TransportOrderService.createTransportOrder(obj);
        });
            
        return axios.post(ORDERS_REST_API_CREATE, state);
    }
    getLastId() {
        return axios.get(ORDER_GET_LAST_ID);
    }
}

export default new OrdersService();