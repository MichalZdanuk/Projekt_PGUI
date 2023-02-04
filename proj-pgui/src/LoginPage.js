import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ctxAuth, authenticate } from "./auth";
import { TextAny } from "./language/langTexts";

function LoginPage() {
  const [username, setUsername] = React.useState("");
  let { zaloguj } = React.useContext(ctxAuth);
  let { state } = useLocation();
  const [pathTo] = React.useState(state?.pathTo);
  const [msg, setMsg] = React.useState(state?.msg);
  const navigate = useNavigate();

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
    <div className="loginPanel">
      {msg ? <div style={{ marginBottom: "1em" }}>{msg}</div> : ""}
      <form onSubmit={cmdLogin}>
        <h1 style={{ fontWeight: "bold", paddingTop: "100px", textAlign: "center" }}><TextAny text="pleaseLoginIn" /></h1>
        <br />
        <input
          className="loginInput"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          type="text"
        />
        <br />
        <br />
        <div className="centeredElement">
        <button className="buttonClicked roundedButton largeFontSize" onClick={cmdLogin}><TextAny text="logIn" /></button>
        </div>
        <br />
        <br />
      </form>
    </div>
  );
}

export default LoginPage;
