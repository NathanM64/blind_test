import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login_Page from './pages/User/login_page';
import Home from './pages/Home'

const Router = () => {
    return (
        <Switch>
            <Route component={Home} exact path="/"/>
            <Route component={Login_Page} path="/login"/>
        </Switch>
    )
}

export default Router
