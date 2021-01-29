import React, { Component } from 'react';
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './PaginaPrincipal.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class PaginaPrincipal extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      type: 'ow',
      primeiro : 0,
      segundo: 0,
      total: 0,
      destination: null,
      lat:null,
      lng:null,
      distance: null,
      journeyTime: null,
      
    };
  }
getSoma = async () => {
  const url = '/api/v1/somador/'+this.state.primeiro+'/'+this.state.segundo;
  fetch(url, {
      method: 'get',
      headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
  })
  .then(resp =>  resp.json())
  .then(data => {
      console.log('Request succeeded with JSON response', data);
      this.changeTotal(data);
  })
  .catch(function (error) {
      console.log('Request failed', error);
  });
};

onPrimeiroChange(value){
  this.setState({
    primeiro: value
  });
}

onSegundoChange(value){
  this.setState({
    segundo: value
  });
}

changeTotal(value){
  this.setState({
    total: value
  });
}

  render() {

    return (
        <div className={useStyles.root}>
        
            <Grid container spacing={3}  alignItems="center">
              <Grid item xs={3}>
              <TextField variant="outlined" value={this.state.primeiro}  onChange={e => this.onPrimeiroChange(e.target.value)} label="Primeiro Algarismo" />
              </Grid>

              <Grid item xs={3}>
              <TextField variant="outlined" value={this.state.segundo} onChange={e => this.onSegundoChange(e.target.value)} label="Segundo Algarismo" />
              </Grid>

              <Grid item xs={2}>
              <Button variant="contained" color="primary" onClick={ () => this.getSoma()}>
                Somar
              </Button>
              </Grid>

              <Grid item xs={3}>
              <TextField variant="filled" value={this.state.total} disabled label="Total"/>
              </Grid>

            </Grid>
        </div>
    
    );
  }
}

export default PaginaPrincipal;