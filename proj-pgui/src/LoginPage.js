import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ctxAuth, authenticate } from "./auth";
import { TextAny } from "./language/langTexts";
import ThemeContext from "./theme/themeContext";
import logoMZ from "./icons/logoMZ.png"

function LoginPage() {
  const [username, setUsername] = useState("");
  let { zaloguj } = useContext(ctxAuth);
  let { state } = useLocation();
  const [pathTo] = useState(state?.pathTo);
  const [msg, setMsg] = useState(state?.msg);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const cmdLogin = (e) => {
    e.preventDefault();
    if (authenticate(username)) {
      zaloguj(username);
      navigate(pathTo ?? "/home");
    } else {
      setMsg(<TextAny text="incorrectUsername" />);
    }
  };
  return (
    <>
    <div className={"loginPanel centeredElement " + theme + "Main"}>
      {msg ? <div style={{ marginBottom: "1em", color: "red", fontWeight: "bold" }}>{msg}</div> : ""}
      <div className="centeredElement leftAndRightMargins">
            <img style={{maxWidth: "100%", marginBottom: "-8%"}} src={logoMZ} alt="logo" height="300"/>
          </div>
      <form onSubmit={cmdLogin}>
        <h1
          style={{
            fontWeight: "bold",
            paddingTop: "100px",
            textAlign: "center",
          }}
        >
          <TextAny text="pleaseLoginIn" />
        </h1>
        <div className="centeredElement">
          <input
            className={"loginInput " + theme + "Input"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            type="text"
          />
        </div>
        <br />
        <div className="centeredElement">
          <button
            className="buttonClicked roundedButton largeFontSize"
            onClick={cmdLogin}
          >
            <TextAny text="logIn" />
          </button>
        </div>
        <br />
      </form>
    </div>
    <br/>
    </>
  );
}

export default LoginPage;
