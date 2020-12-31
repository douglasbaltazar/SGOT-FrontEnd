import React from 'react';
import OrdersService from '../services/OrdersService';

class OrderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            orders:[]
        }
    }

    componentDidMount() {
        
        OrdersService.getOrders().then((response) => {
            this.setState({orders: response.data})
            console.log(response.data);
        });
    }

    render () {
        return (
            <div>
                <h1 className="text-center"> Lista das Ordens de Transporte </h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id da Ordem</td>
                            <td>Produto 1</td>
                            <td>Produto 2</td>
                            <td>Produto 3</td>
                            <td>Valor Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.orders.map(
                                order =>
                                <tr key = {order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.product1}</td>
                                    <td>{order.product2}</td>
                                    <td>{order.product3}</td>
                                    <td>{order.totalValue}</td>
                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}

export default OrderComponent