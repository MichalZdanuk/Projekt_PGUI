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
  console.log(location);
  if (!authState.czyZalogowany) {
    return (
      <Navigate
        to="/login"
        state={{
          msg: "Musisz być zalogowany, aby uzyskać dostęp do tej strony.",
          pathTo: location.pathname
        }}
      />
    );
  }
  return props.children;
}
