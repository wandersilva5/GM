import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Logon from './pages/Logon';
import Dashboard from './pages/Dashboard';
import Pedidos from './pages/Pedidos';
import Layout from './pages/Layout';

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Logon} />
            <Layout>
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/pedidos" component={Pedidos} />
            </Layout>
              <Route path="*" component={() => <h1>Página não existe!</h1>} />
          </Switch>
        </BrowserRouter>
    )
}