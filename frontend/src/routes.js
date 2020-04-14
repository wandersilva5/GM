import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Dashboard from './pages/Dashboard';
import Pedidos from './pages/Pedidos';
import Layout from './pages/Layout';

export default function Routes() {
    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/pedidos" component={Pedidos} />
            </Switch>
        </Layout>
        </BrowserRouter>
    )
}