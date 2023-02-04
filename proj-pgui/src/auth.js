import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export let ctxAuth = React.createContext();

export function authenticate(username) {
  if (username === "aaa" || username === "user") {
    return true;
  }
  return false;
}

export function RequiredAuth(props) {
  let { authState } = React.useContext(ctxAuth);
  let location = useLocation();
  if (!authState.czyZalogowany) {
    return (
      <Navigate
        to="/"
        state={{
          msg: "You must be logged to get access to this page",
          pathTo: location.pathname
        }}
      />
    );
  }
  return props.children;
}
