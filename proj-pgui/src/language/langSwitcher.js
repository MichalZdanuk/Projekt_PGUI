import React from "react";
import { LangContext } from "./lang";

export function LangSwitcher(props) {
  let ctxLang = React.useContext(LangContext);
  const handleLangChange = (evt) => {
    ctxLang.setLang(evt.target.value);
  };
  return (
    <>
      {ctxLang.lang === "pl" ? (
        <button className="roundedButton languageButon" onClick={handleLangChange} value="en">
          POLSKI
        </button>
      ) : (
        <button className="roundedButton languageButon" onClick={handleLangChange} value="pl">
          ENGLISH
        </button>
      )}
    </>
  );
}
