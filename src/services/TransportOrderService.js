import axios from 'axios';

const ORDERS_REST_API_ALL = 'http://localhost:8080/api/v1/transportorders/';
const ORDERS_REST_API_ALL_BYID = 'http://localhost:8080/api/v1/transportorders/';
const ORDERS_REST_API_CREATE = 'http://localhost:8080/api/v1/transportorders/';


class TranportOrderService {
    getTransportOrders() {
        return axios.get(ORDERS_REST_API_ALL);
    }
    getTransportOrdersById() {
        return axios.get(ORDERS_REST_API_ALL_BYID);
    }   

    handleSent() {
        return axios.put(ORDERS_REST_API_ALL_BYID);
    }

    createTransportOrder(state) {
        return axios.post(ORDERS_REST_API_CREATE, state);
    }

}

export default new TransportOrderService();