import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ctxAuth } from "./auth";
import backIcon from "./icons/backIcon.png";

import { LangSwitcher } from "./language/langSwitcher";
import { TextAny } from "./language/langTexts";

import ThemeSwitcher from "./theme/themeSwitcher";

export function DashBoardLayout() {
  let { authState } = React.useContext(ctxAuth);
  let location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div className="right">
        <emph className="navbar_text">
          <TextAny text="language" /> {<LangSwitcher />}
        </emph>
        &ensp;&ensp;&ensp;
        <emph className="navbar_text">
          <TextAny text="theme" /> {<ThemeSwitcher />}
        </emph>
      </div>
      <br />
      <div className="left-side">
        <img src={backIcon} alt="back" height="20" />

        <emph
          onClick={(e) => {
            if (location.pathname === "/dashboard") {
              navigate("/home");
            } else {
              navigate("/dashboard");
            }
          }}
          style={{ marginLeft: "1%" }}
        >
          <span className="adjustedTextLargeWidgetThumbnail">
            <TextAny text="return" />
            {location.pathname === "/dashboard" ? (
              <TextAny text="homePage" />
            ) : (
              <TextAny text="dashboard" />
            )}
          </span>
        </emph>
      </div>

      <h1 style={{ marginLeft: "5%", marginRight: "5%" }}>
        <TextAny text="welcome" />
        {authState.zalogowany ? authState.zalogowany : "nikt?"}!
      </h1>
      <div style={{ marginLeft: "5%", marginRight: "5%" }}>
        <Outlet />
      </div>
    </>
  );
}
