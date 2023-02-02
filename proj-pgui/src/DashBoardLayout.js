import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ctxAuth } from "./auth";
import "./styles.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export function DashBoardLayout() {
  let { authState, wyloguj } = React.useContext(ctxAuth);
  let location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div className="right">
        <emph>Język: {<LanguageButton />}</emph>&ensp;&ensp;&ensp;
        <emph>Motyw: {<ColorThemeButton />}</emph>
      </div>
      <br />
      <emph
        onClick={(e) => {
          if (location.pathname === "/dashboard") {
            navigate("/home");
          } else {
            navigate("/dashboard");
          }
        }}
        style={{marginLeft: "5%"}}
      >
        Powrót do:{" "}
        {location.pathname === "/dashboard" ? "Strona Główna" : "DashBoard"}
      </emph>

      <h1 style={{ marginLeft: "5%", marginRight: "5%" }}>
        Welcome {authState.zalogowany ? authState.zalogowany : "nikt?"}!
      </h1>
      <div style={{ marginLeft: "5%", marginRight: "5%" }}>
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
}

function LanguageButton() {
  return (
    <>
      <button className="languageButon roundedButton">POLSKI</button>
    </>
  );
}

function ColorThemeButton() {
  return (
    <>
      <button className="languageButon roundedButton">JASNY</button>
    </>
  );
}
