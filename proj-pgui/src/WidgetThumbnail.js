import "./styles.css";
import { useNavigate } from "react-router-dom";

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
        {props.name === "Orders" ? (
          <div className="widget_thumbnail_content">
            <h2>{props.name}</h2>
            <hr />
            <p>
              Not Paid: 12<br />
              Not Sent: 15<br />
              Refunds: 10<br/>
            </p>
          </div>
        ) : (
          ""
        )}

        {props.name === "Quality of Sales" ? (
          <div className="widget_thumbnail_content">
            <h2>{props.name}</h2>
            <hr />
            <p>jakosc</p>
          </div>
        ) : (
          ""
        )}

        {props.name === "Buyers Reviews" ? (
          <div className="widget_thumbnail_content">
            <h2>{props.name}</h2>
            <hr />
            <p>opinie</p>
          </div>
        ) : (
          ""
        )}

        {props.name === "Ranking of Offers" ? (
          <div className="widget_thumbnail_content">
            <h2>{props.name}</h2>
            <hr />
            <p>Best seller</p>
            <p style={{fontWeight: "bold"}}>Słuchawki RAZER Kraken X Lite</p>
            <p>Worst seller</p>
            <p style={{fontWeight: "bold"}}>
Smartfon SAMSUNG Galaxy S23 8/256GB 5G</p>
          </div>
        ) : (
          ""
        )}

        {props.name === "Sales Chart" ? (
          <div className="widget_thumbnail_content">
            <h2>{props.name}</h2>
            <hr />
            <p>Go to data from chart:</p>
          </div>
        ) : (
          ""
        )}

        {props.name === "Sales Advice" ? (
          <div className="widget_thumbnail_content">
            <h2>{props.name}</h2>
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
