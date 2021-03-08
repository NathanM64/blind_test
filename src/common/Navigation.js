import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
  Link,
} from "react-router-dom";
import { Authentication } from '../pages/User/Authentication';
import { disconnectUser } from "../pages/User/userEffects";
import { launchSequence, launchApp } from "./appEffects";
import Home from '../pages/Home'
import Game from '../pages/Game/Game'
import Profile from '../pages/User/Profile'
import {NavBar, NavImage, NameApp, NavActionLink, NavSignOut, SignOut} from './Navigation.style'

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Navigation = () => {
    const isAuthenticated = useSelector(
        (state) => state.user.isAuthenticated
    );
    const player = useSelector((state) => state.user.player);
    const isLoading = useSelector((state) => state.app.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(launchApp());
    }, [dispatch]);
    
    return isLoading ? (
      <div className="loading-root">
        <img
          src="/assets/images/spinner.svg"
          alt="Loading animation"
          style={{ height: "50px" }}
        />
      </div>
    ) : (
      <Router>
          {isAuthenticated ? (
            <NavBar>
              <NameApp to="/">
                <NavImage src="/assets/images/logo.png" alt="Blind test logo"/>
                Blind-Test
              </NameApp>
              <NavActionLink>
                <Link to="/play">Jouer</Link>
                <Link to="/profile">Profile</Link>
              </NavActionLink>
              <NavSignOut>
                <SignOut
                  to="/login"
                  onClick={() => disconnectUser()}
                >
                  Se déconnecter
                  <NavImage src={player.avatar} alt="User avatar" />
                </SignOut>
              </NavSignOut>
            </NavBar>
          ) : undefined}
          <Switch>
            <Route path="/login">
              <Authentication />
            </Route>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute path="/play">
              <Game />
            </PrivateRoute>
            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
      </Router>
        
    )
  }

export default Navigation
