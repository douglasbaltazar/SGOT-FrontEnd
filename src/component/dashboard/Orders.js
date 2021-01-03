import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OrdersService from '../../services/OrdersService';
import TableCSVExporter from './utils/TableCSVExporter';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import DeleteIcon from '@material-ui/icons/Delete';
import Title from './Title';
import TransportOrderService from '../../services/TransportOrderService';

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
    OrdersService.getOrdersAbove500().then((response) => {
        this.setState({orders: response.data})
    });
  }
  handleEnviar = (id) => (e) => {
    e.preventDefault();
    var obj = new Object();
    obj.product_id = id;
    obj.sent = true;
    TransportOrderService.handleSent(obj)
    .then((response) => {
        alert('Enviado com sucesso');
    }).catch(() => {
        alert('Erro no envio');
    });
  }
  exportToCSV(){
    const dataTable = document.getElementById("dataTable");
    const exporter = new TableCSVExporter(dataTable, false);
    const csvOutput = exporter.convertToCSV();
    const csvBlob = new Blob([csvOutput], { type: "text/csv" });
    const blobUrl = URL.createObjectURL(csvBlob);
    const anchorElement = document.createElement("a");
    anchorElement.href = blobUrl;
    anchorElement.download = "relatorioMaiorQue500.csv";
    anchorElement.click();
    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
    }, 500);
}
  render () {
    return (
      <div>
      <Title>Pedidos com ValorTotal maior que  500</Title>
      <Table id="dataTable" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Produto 1</TableCell>
            <TableCell>Produto 2</TableCell>
            <TableCell>Produto 3</TableCell>
            <TableCell align="center">Valor Total</TableCell>
            <TableCell align="right">Enviar</TableCell>
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
              <TableCell align="right"><Link id="btnEnviar" onClick={this.handleEnviar(order.id)} color="primary" href="#"> <LocalShippingIcon /></Link> <Link id="btnDeletar" color="secondary" href="#"> <DeleteIcon /></Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
        
      </Table>
      <br></br>
      <div>
      <div align="center">
        <Link id="btnExportToCsv" onClick={this.exportToCSV} color="primary" href="#" >
          Gerar CSV
        </Link>
      </div>
      </div>
      </div>
      )
  }
}
export default Orders