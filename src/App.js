import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/auth/SignIn';
import Airports from './components/airports/airports';
import Aircrafts from './components/aircrafts/aircrafts';
import Transactions from './components/transactions/Transactions';
import Navbar from './components/layouts/Navbar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/airports' component={Airports}></Route>
          <Route path='/aircrafts' component={Aircrafts}></Route>
          <Route path='/transactions' component={Transactions}></Route>
          <Route path='/signIn' component={SignIn}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
