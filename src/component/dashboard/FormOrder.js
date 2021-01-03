import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import OrdersService from '../../services/OrdersService';
import Container from '@material-ui/core/Container';


class FormOrder extends React.Component {
    
    constructor() {
      super();
      this.state =  {
          checkedProduct2:false,
          checkedProduct3:false,
          product1name: '',
          product1value: '0',
          product2name: '',
          product2value: '0',
          product3name: '',
          product3value: '0',
          totalValue: '0',
          sent:false,
        }
    }
    
    handleChange = e => {
      this.setState({[e.target.name]: e.target.value});
    }
    submitHandler = e => {
      e.preventDefault();
      var obj = new Object();
      obj.product1 = this.state.product1name;
      obj.product2 = this.state.product2name;
      obj.product3 = this.state.product3name;
      obj.totalValue = this.state.totalValue;
      obj.valueProduct1 = this.state.product1value;
      obj.valueProduct2 = this.state.product2value;
      obj.valueProduct3 = this.state.product3value;
      obj.sent = this.state.sent;
      OrdersService.createOrder(obj)
      .then((response) => {
          alert('Cadastrado com sucesso');
          window.location.reload();
      }).catch(() => {
          alert('Erro no cadastro');
      });
    }

    calcularValorTotal = () => {
        var product1value = document.getElementById("product1value").value;
        var product2value = document.getElementById("product2value").value;
        var product3value = document.getElementById("product3value").value;
        var valortotal = document.getElementById("totalvalueorder");
        var product1V = parseFloat(product1value);
        var product2V = parseFloat(product2value);
        var product3V = parseFloat(product3value);

        if(!Number.isNaN(product1V)) {
          valortotal.value = product1V;
          this.setState({ totalValue: valortotal.value }); 
          if(!Number.isNaN(product2V)) {
            valortotal.value = parseFloat(valortotal.value)+product2V;
            this.setState({ totalValue: valortotal.value }); 
            if(!Number.isNaN(product3V)) {
              valortotal.value = parseFloat(valortotal.value)+product3V;
            }
            this.setState({ totalValue: valortotal.value }); 
          }
        }
    }

    handleCheckClick     = () => {
        var product2name = document.getElementById("product2name");
        var product2value = document.getElementById("product2value");
        var product3checkbox = document.getElementById("product3checkbox");
        var product3name = document.getElementById("product3name");
        var product3value = document.getElementById("product3value");
        if(this.state.checkedProduct2) {
            product2name.disabled = true;
            product2name.value = "";
            product2value.disabled = true;
            product2value.value = "0";
            product3checkbox.disabled = true;
            product3name.value = "";
            product3name.disabled = true;
            product3value.disabled = true;
            product3value.value = "0";
        } else {
            product2name.disabled = false;
            product2value.disabled = false;
            product3checkbox.disabled = false;
        }
        this.setState({ checkedProduct2: !this.state.checkedProduct2 });   
        this.setState({ checkedProduct3: false });
        this.calcularValorTotal();
    }
    handleCheckClickP3     = () => {
      var product3name = document.getElementById("product3name");
      var product3value = document.getElementById("product3value");
        if(this.state.checkedProduct3) {
            product3name.disabled = true;
            product3name.value = "";
            product3value.disabled = true;
            product3value.value = "0";
        } else {
            product3name.disabled = false;
            product3value.disabled = false;
        }
        this.setState({ checkedProduct3: !this.state.checkedProduct3 }); 
        this.calcularValorTotal();  
    }
    render() {
    
    const { product1Name, product1Value, product2Name, product2Value, product3Name, product3Value, totalValue} = this.state;
    return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className="paper">
      <Typography component="h1" variant="h5">
        Cadastrar novo pedido
      </Typography>
      <form className="form" noValidate onSubmit={this.submitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <TextField
              autoComplete="fname"
              name="product1name"
              variant="outlined"
              required
              fullWidth
              id="product1name"
              label="Produto 1" 
              onChange={this.handleChange}
              value={product1Name}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              variant="outlined"
              type="number"
              inputMode="decimal"
              required
              fullWidth
              id="product1value"
              value={product1Value}
              onChange={this.handleChange}
              onKeyUp={this.calcularValorTotal}
              placeholder="0"
              name="product1value"
              autoComplete="lname"
            />
          </Grid>
          
        <Grid item xs={12} sm={1}>
          <FormControlLabel
              control={<Checkbox color="primary" checked={this.state.checkedProduct2} id="product2checkbox" onChange={this.handleCheckClick} />}
              label=""
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              autoComplete="fname"
              name="product2name"
              variant="outlined"
              disabled
              onChange={this.handleChange}
              fullWidth
              id="product2name"
              value={product2Name}
              label="Produto 2"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              variant="outlined"
              disabled
              fullWidth
              type="number"
              onChange={this.handleChange}
              inputMode="decimal"
              id="product2value"
              onKeyUp={this.calcularValorTotal}
              placeholder="0"
              name="product2value"
              value={product2Value}
              autoComplete="lname"
            />
          </Grid>
        <Grid item xs={12} sm={1}>
          <FormControlLabel 
              control={<Checkbox color="primary" checked={this.state.checkedProduct3} id="product3checkbox" onChange={this.handleCheckClickP3} disabled />}
              label=" "
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              autoComplete="fname"
              name="product3name"
              variant="outlined"
              disabled
              onChange={this.handleChange}
              fullWidth
              id="product3name"
              label="Produto 3"
              value={product3Name}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              variant="outlined"
              fullWidth
              onChange={this.handleChange}
              id="product3value"
              disabled
              type="number"
              inputMode="decimal"
              value={product3Value}
              placeholder="0"
              onKeyUp={this.calcularValorTotal}
              name="product3value"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              disabled
              inputMode="decimal"
              value={totalValue}
              id="totalvalueorder"
              placeholder="Valor Total"
              name="totalvalueorder"
            />
          </Grid>
          <Grid item xs={12}>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="submit"
        >
          Cadastrar novo pedido
        </Button>
      </form>
    </div>
    <Box mt={5}>
    </Box>
    </Container>
    )
    }
}

export default FormOrder;
