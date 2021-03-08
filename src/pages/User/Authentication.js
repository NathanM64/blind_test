import React, { useState, useEffect} from "react";
import { useDispatch, useSelector  } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { LayoutRoot, LayoutForm, Title, Text, Button, Input } from './Authentication.style';
import { authenticateUser } from "./userEffects";

export const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [canSignIn, setCanSignIn] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const isAuthenticated = useSelector(
    (state) => state.user.isAuthenticated
  );
  const history = useHistory();
  const { from } = useLocation().state || { from: { pathname: "/" } };
  const signInSuccess = () => {
    history.replace(from);
  };
  useEffect(() => {
    // Verify email format is correct
    let emailIsValid = false;
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      emailIsValid = true;
    }
    // Verify password format is correct
    let passwordIsValid = false;
    if (password.length >= 6) {
      passwordIsValid = true;
    }
    setCanSignIn(emailIsValid && passwordIsValid);
  }, [email, password]);
  useEffect(() => {
    console.log()
    if (isAuthenticated) history.replace("/");
  }, [isAuthenticated, history]);
  return (
    <LayoutRoot>
      <img src="/assets/images/logo.png" alt="Blind test logo" />
      <Title>Connexion</Title>
      {isLoading ? (
        <img
          src="/assets/images/spinner.svg"
          alt="Loading animation"
          style={{ height: "50px" }}
        />
      ) : (
        <LayoutForm>
          <Input
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <Input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <Button
            onClick={() =>
              dispatch(
                authenticateUser(email, password, signInSuccess)
              )
            }
            disabled={!canSignIn}
          >
            Se connecter
          </Button>
        </LayoutForm>
      )}
    </LayoutRoot>
  );
};
