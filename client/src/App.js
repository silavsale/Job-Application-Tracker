import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";
import Users from "./components/Users";
// Redux
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
    <Fragment>
      <Navbar/>
      <h1 style={{paddingTop : '50px'}} ></h1>
      <Users/>
    <section>
      <Switch>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </section>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
