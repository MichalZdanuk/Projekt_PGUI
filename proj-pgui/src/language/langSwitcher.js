import {useContext} from "react";
import { LangContext } from "./lang";

import ThemeContext from "../theme/themeContext";

export function LangSwitcher(props) {
  let ctxLang = useContext(LangContext);
  const { theme } = useContext(ThemeContext);

  const handleLangChange = (evt) => {
    ctxLang.setLang(evt.target.value);
  };
  return (
    <>
      {ctxLang.lang === "pl" ? (
        <button className={"roundedButton languageButton " + theme + "ChangeButton"} onClick={handleLangChange} value="en">
          POLSKI
        </button>
      ) : (
        <button className={"roundedButton languageButton " + theme + "ChangeButton"} onClick={handleLangChange} value="pl">
          ENGLISH
        </button>
      )}
    </>
  );
}
