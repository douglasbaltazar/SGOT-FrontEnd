import axios from 'axios';

const TORDERS_REST_API_ALL = 'http://localhost:8080/api/v1/transportorders/';
const TORDERS_REST_API_ALL_BYID = 'http://localhost:8080/api/v1/transportorders/';
const TORDERS_REST_API_CREATE = 'http://localhost:8080/api/v1/transportorders/';
const TORDERS_REST_API_UPDATE = 'http://localhost:8080/api/v1/transportorders/:id'


class TransportOrderService {
    getTransportOrders() {
        return axios.get(TORDERS_REST_API_ALL);
    }
    getTransportOrdersById() {
        return axios.get(TORDERS_REST_API_ALL_BYID);
    }   

    handleSent() {
        return axios.put(TORDERS_REST_API_ALL_BYID);
    }

    createTransportOrder(state) {
        return axios.post(TORDERS_REST_API_CREATE, state);
    }

}   
export default new TransportOrderService();