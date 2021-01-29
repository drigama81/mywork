import React, { Component } from 'react';
import { BrowserRouter as BR, Route, Switch } from 'react-router-dom'; 
import PaginaPrincipal from './Components/PaginaPrincipal/PaginaPrincipal';
import AppBar from './Components/AppBar/AppBar';
import Container from '@material-ui/core/Container';
import './App.css';

class App extends Component {

state = {
    rideType: 'ow'
  };

  componentDidMount() {
  }  

  render() {    
    return (
      <BR>
        <div className="App">
          <AppBar></AppBar>
          <br />
          <Container>
            <Switch>
              <Route path="/" exact component={ PaginaPrincipal } />
            </Switch>
          </Container>          
        </div>
      </BR>
    );
  }
}

export default App;
