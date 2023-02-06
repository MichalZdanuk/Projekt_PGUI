import { useContext } from "react";
import ThemeContext from "./themeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    const bodyElt = document.querySelector("body");
    if (theme === "dark") {
      bodyElt.style.backgroundColor = "#c6bbcf";
      bodyElt.style.color = "#000000";
    } else if (theme === "light") {
      bodyElt.style.backgroundColor = "#27113b";
      bodyElt.style.color = "#fee9ff";
    }
  };
  return (
    <>
      {theme === "dark" ? (
        <button
          className="roundedButton languageButton darkChangeButton"
          onClick={switchTheme}
          value="light"
        >
          DARK
        </button>
      ) : (
        <button
          className="roundedButton languageButton lightChangeButton"
          onClick={switchTheme}
          value="dark"
        >
          LIGHT
        </button>
      )}
    </>
  );
};
export default ThemeSwitcher;
