import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { ctxAuth } from "./auth";

function HomePage() {
  let { authState, wyloguj } = React.useContext(ctxAuth);
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ marginBottom: "0.5em" }}>
        <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/dashboard">Dashboard</Link>&nbsp;&nbsp;&nbsp;
        <div style={{ float: "right" }}>
          Zalogowany: {authState.zalogowany ? authState.zalogowany : "nikt..."}
          {authState.zalogowany ? (
            <a
              href="#aa"
              onClick={(e) => {
                e.preventDefault();
                wyloguj();
                navigate("/");
              }}
            >
              (wyloguj)
            </a>
          ) : (
            <Link to="/">(zaloguj)</Link>
          )}
        </div>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
  
  export default HomePage;
  