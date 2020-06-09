import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import SignIn from './components/auth/SignIn';
import Logout from './components/auth/Logout';
import Airports from './components/airports/airports';
import Aircrafts from './components/aircrafts/aircrafts';
import Transactions from './components/transactions/Transactions';
import AirportReport from './components/airports/AirportReport';
import Navbar from './components/layouts/Navbar';
import LandingPage from './components/layouts/LandingPage';


class App extends React.Component {
  render() {
    let routes = (
      <Switch>
          <Route path='/' exact component={LandingPage}></Route>
          <Route path='/signIn' component={SignIn}></Route>
          <Redirect to='/'/>
        </Switch>
    );
    if(this.props.isLoggedIn){
      routes = (<Switch>
          <Route path='/' exact component={LandingPage}></Route>
          <Route path='/airports' component={Airports}></Route>
          <Route path='/aircrafts' component={Aircrafts}></Route>
          <Route path='/transactions' component={Transactions}></Route>
          <Route path='/report/:type' component={AirportReport}></Route>
          <Route path='/logout' component={Logout}></Route>
          <Redirect to='/'/>
      </Switch>);
    }
    return (
      <BrowserRouter>
        <Navbar/>
        {routes}
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => {
  return {
      isLoggedIn: state.auth.token !== null
  };
};
export default connect( mapStateToProps)(App);
