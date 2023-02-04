import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ctxAuth } from "./auth";
import backIcon from "./icons/backIcon.png"

import { LangSwitcher } from "./language/langSwitcher";
import { TextAny } from "./language/langTexts";

export function DashBoardLayout() {
  let { authState } = React.useContext(ctxAuth);
  let location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div className="right">
        <emph><TextAny text="language" /> {<LangSwitcher />}</emph>&ensp;&ensp;&ensp;
        <emph><TextAny text="theme" /> {<ColorThemeButton />}</emph>
      </div>
      <br />
      <div style={{marginLeft: "5%"}}>
      <img src={backIcon} alt="back" height="20" />
      
      <emph
        onClick={(e) => {
          if (location.pathname === "/dashboard") {
            navigate("/home");
          } else {
            navigate("/dashboard");
          }
        }}
        style={{ marginLeft: "1%"}}
      >
        <TextAny text="return" />
        {location.pathname === "/dashboard" ? <TextAny text="homePage" /> : <TextAny text="dashboard" />}
      </emph>
      </div>

      <h1 style={{ marginLeft: "5%", marginRight: "5%" }}>
        <TextAny text="welcome" />{authState.zalogowany ? authState.zalogowany : "nikt?"}!
      </h1>
      <div style={{ marginLeft: "5%", marginRight: "5%" }}>
        <Outlet />
      </div>
    </>
  );
}

function ColorThemeButton() {
  return (
    <>
      <button className="languageButon roundedButton"><TextAny text="light" /></button>
    </>
  );
}
