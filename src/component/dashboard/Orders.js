import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OrdersService from '../../services/OrdersService';
import Title from './Title';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        orders:[]
    }
  }
  useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  }));
  componentDidMount() {  
    OrdersService.getOrders().then((response) => {
        this.setState({orders: response.data})
    });
  }
  render () {
    return (
      <div>
      <Title>Ordens de Transporte</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Produto 1</TableCell>
            <TableCell>Produto 2</TableCell>
            <TableCell>Produto 3</TableCell>
            <TableCell align="center">Valor Total</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.product1}</TableCell>
              <TableCell>{order.product2}</TableCell>
              <TableCell>{order.product3}</TableCell>
              <TableCell align="center">{order.totalValue}</TableCell>
              <TableCell align="right">Botão</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <br></br>
      </Table>
      <div>
        <Link color="primary" href="#" >
          Gerar CSV
        </Link>
      </div>
      </div>
      )
  }
}
export default Orders