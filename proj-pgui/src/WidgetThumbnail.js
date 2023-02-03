import startsRating from "./icons/startsRating.png";
import qualityIcon from "./icons/qualityIcon.png"
import { useNavigate } from "react-router-dom";
import { TextAny } from "./language/langTexts";

function WidgetThumbnail(props) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="widget_thumbnail"
        onClick={(e) => {
          e.preventDefault();
          navigate(props.location);
        }}
      >
        {props.name === "orders" ? (
          <div className="widget_thumbnail_content">
            <h2>{<TextAny text={props.name} />}</h2>
            <hr />
            <p>
              Not Paid: 12
              <br />
              Not Sent: 15
              <br />
              Refunds: 10
              <br />
            </p>
          </div>
        ) : (
          ""
        )}

        {props.name === "qualityOfSales" ? (
          <div className="widget_thumbnail_content">
            <div className="rightIcon"><img src={qualityIcon} alt="quality" height="50"/></div>
            <h2>{<TextAny text={props.name} />}</h2>
            <hr />
            <div style={{ marginLeft: "35%" }}>
              <img src={startsRating} alt="stars" height="50" />
            </div>

            <div style={{textAlign: "center"}}>
            <h4>{<TextAny text="receivedCategory" />}DECENT</h4>
              <h4>{<TextAny text="qualityRate" />}37/50</h4>
            </div>

            <div style={{ marginLeft: "25%" }}>
              <button className="roundedButton buttonClicked">
                <TextAny text="chechDetails" />
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        {props.name === "buyersReviews" ? (
          <div className="widget_thumbnail_content">
            <h2>{<TextAny text={props.name} />}</h2>
            <hr />
            <p>opinie</p>
          </div>
        ) : (
          ""
        )}

        {props.name === "rankingOfOffers" ? (
          <div className="widget_thumbnail_content">
            <h2>{<TextAny text={props.name} />}</h2>
            <hr />
            <p>Best seller</p>
            <p style={{ fontWeight: "bold" }}>Słuchawki RAZER Kraken X Lite</p>
            <p>Worst seller</p>
            <p style={{ fontWeight: "bold" }}>
              Smartfon SAMSUNG Galaxy S23 8/256GB 5G
            </p>
          </div>
        ) : (
          ""
        )}

        {props.name === "salesChart" ? (
          <div className="widget_thumbnail_content">
            <h2>{<TextAny text={props.name} />}</h2>
            <hr />
            <p>Go to data from chart:</p>
          </div>
        ) : (
          ""
        )}

        {props.name === "salesAdvice" ? (
          <div className="widget_thumbnail_content">
            <h2>{<TextAny text={props.name} />}</h2>
            <hr />
            <p>porady</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default WidgetThumbnail;
