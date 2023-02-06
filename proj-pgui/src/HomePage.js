import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ctxAuth } from "./auth";
import ThemeContext from "./theme/themeContext";
import { TextAny } from "./language/langTexts";

function HomePage() {
  let { authState, wyloguj } = useContext(ctxAuth);
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();
  const handleClick = () => {
    window.location.replace('https://github.com/MichalZdanuk/Projekt_PGUI');
  };
  return (
    <div>
      <div style={{ marginBottom: "0.5em" }}>

        <div style={{ float: "right" }}>
          <TextAny text="logged" /> {authState.zalogowany ? authState.zalogowany : "nikt..."}
          {authState.zalogowany ? (
            <a
              href="#aa"
              onClick={(e) => {
                e.preventDefault();
                wyloguj();
                navigate("/");
              }}
            >
              (<TextAny text="logOut" />)
            </a>
          ) : (
            <Link to="/">(<TextAny text="logIn" />)</Link>
          )}
        </div>
      </div>
      <br />
      <br />

      <div onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }} className={"widgetCard " + theme + "Main"}>
        <p className="widgetTitle adjustedTextLargeWidgetCardTitle">
          <TextAny text="homePage" />
        </p>
        <hr className="widgetTitle" />
        <div className="centeredElement">
          <p className="adjustedTextLargeWidgetThumbnail">
            <TextAny text="homePageDescription1" /><br/>
            <span style={{ fontWeight: "bold" }}>
              <TextAny text="pgui" />
            </span>
            <TextAny text="homePageDescription2" />{" "}
            <span style={{ fontWeight: "bold" }}>
              <TextAny text="university" />
            </span>{" "}
            <span style={{ fontWeight: "bold" }}>
              <TextAny text="department" />
            </span>
            <br/>
            <TextAny text="homePageDescription3" />
            
            <br/>
            <TextAny text="homePageDescription4" />
            
          </p>
        </div>
      </div>
      <div onClick={handleClick} className={"widgetCard " + theme + "Main"}>
        <p className="widgetTitle adjustedTextLargeWidgetCardTitle">
         <TextAny text="linkToRepo" />
        </p>
        <hr className="widgetTitle" />
        <div className="centeredElement adjustedTextLargeWidgetThumbnail">
          <span style={{fontWeight: "bold"}}>https://github.com/MichalZdanuk/Projekt_PGUI</span>
        </div>
        </div>
    </div>
  );
}

export default HomePage;
