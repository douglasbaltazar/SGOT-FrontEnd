import axios from 'axios';

const TORDERS_REST_API_ALL = 'http://localhost:8080/api/v1/transportorders/';
const TORDERS_REST_API_GET_BY_ID = 'http://localhost:8080/api/v1/transportorders/';
const TORDERS_REST_API_ALL_BYID = 'http://localhost:8080/api/v1/transportorders/';
const TORDERS_REST_API_CREATE = 'http://localhost:8080/api/v1/transportorders/';
const TORDERS_REST_API_UPDATE = 'http://localhost:8080/api/v1/transportorders/:id'


class TransportOrderService {
    getTransportOrders() {
        return axios.get(TORDERS_REST_API_ALL);
    }
    getTransportOrdersById(id) {
        return axios.get(TORDERS_REST_API_GET_BY_ID + id.product_id);
    }   

    handleSent(state) {
        console.log(state);
        return axios.put(TORDERS_REST_API_ALL_BYID + state.product_id, state);
    }

    createTransportOrder(state) {
        return axios.post(TORDERS_REST_API_CREATE, state);  
    }

}   
export default new TransportOrderService();