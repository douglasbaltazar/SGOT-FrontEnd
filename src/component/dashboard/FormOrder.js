import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styles from './css/formorder.css';
import Container from '@material-ui/core/Container';


class FormOrder extends React.Component {
    constructor() {
        super();
        this.state =  {
            checkedProduct2:false,
            checkedProduct3:false,
            product1Name: '',
            product1Value: '',
            product2Name: '',
            product2Value: '',
            product3Name: '',
            product3Value: '',
            totalValue: ''
        }
    }

    handleChangeProduct2(event) {
        this.setState({
            recipe : {[event.target.name]: event.target.value}
        })
    }

    calcularValorTotal() {
        var product1value = document.getElementById("product1value").value;
        var product2value = document.getElementById("product2value").value;
        var product3value = document.getElementById("product3value").value;
        var valortotal = document.getElementById("totalvalueorder");
        var soma = parseFloat(product1value) + parseFloat(product2value) + parseFloat(product3value);
        valortotal.value = soma;
    }

    handleCheckClick     = () => {
        if(this.state.checkedProduct2) {
            var product2name = document.getElementById("product2name");
            var product2value = document.getElementById("product2value");
            var product3checkbox = document.getElementById("product3checkbox");
            var product3name = document.getElementById("product3name");
            var product3value = document.getElementById("product3value");
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
            var product2name = document.getElementById("product2name");
            var product2value = document.getElementById("product2value");
            var product3checkbox = document.getElementById("product3checkbox");
            product2name.disabled = false;
            product2value.disabled = false;
            product3checkbox.disabled = false;
        }
        this.setState({ checkedProduct2: !this.state.checkedProduct2 });   
        this.setState({ checkedProduct3: false });
        this.calcularValorTotal();
    }
    handleCheckClickP3     = () => {
        if(this.state.checkedProduct3) {
            var product3name = document.getElementById("product3name");
            var product3value = document.getElementById("product3value");
            product3name.disabled = true;
            product3name.value = "";
            product3value.disabled = true;
            product3value.value = "0";
        } else {
            var product3name = document.getElementById("product3name");
            var product3value = document.getElementById("product3value");
            product3name.disabled = false;
            product3value.disabled = false;
        }
        this.setState({ checkedProduct3: !this.state.checkedProduct3 }); 
        this.calcularValorTotal();  
    }
    render() {
    return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className="paper">
      <Typography component="h1" variant="h5">
        Cadastrar novo pedido
      </Typography>
      <form className="form" noValidate>
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
              defaultValue='0'
              onKeyUp={this.calcularValorTotal}
              placeholder="Valor"
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
              fullWidth
              id="product2name"
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
              inputMode="decimal"
              id="product2value"
              onKeyUp={this.calcularValorTotal}
              defaultValue='0'
              placeholder="Valor"
              name="product2value"
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
              fullWidth
              id="product3name"
              label="Produto 3"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              variant="outlined"
              fullWidth
              id="product3value"
              disabled
              type="number"
              inputMode="decimal"
              placeholder="Valor"
              defaultValue='0'
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
              id="totalvalueorder"
              
              placeholder="Valor Total"
              name="totalvalueorder"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="Pedido já foi enviado"
            />
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
