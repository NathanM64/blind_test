import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Authentication } from './pages/User/Authentication';
import Home from './pages/Home'

const Router = () => {
    return (
        <Switch>
            <Route component={Home} exact path="/"/>
            <Route component={Authentication} path="/login"/>
        </Switch>
    )
}

export default Router
