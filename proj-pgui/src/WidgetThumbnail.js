import startsRating from "./icons/startsRating.png";
import chartIcon from "./icons/chartIcon.png";
import arrowDark from "./icons/arrowDark.png"

import { useNavigate } from "react-router-dom";
import { TextAny } from "./language/langTexts";

function WidgetThumbnail(props) {
  const navigate = useNavigate();
  return (
    
      <div
        className="widget_thumbnail"
        // onClick={(e) => {
        //   // e.preventDefault();
        //   navigate(props.location);
        // }}
        onMouseUp={ e => {e.stopPropagation(); navigate(props.location); }}
      >
        {props.name === "orders" ? (
          <div className="widget_thumbnail_content">
            <p className="widgetCardTitle largeFontSize">{<TextAny text={props.name} />}</p>
            <hr className="widgetCardHR" />
            <p>
              <TextAny text="notPaid" />
              12
              <br />
              <TextAny text="notSent" />
              15
              <br />
              <TextAny text="refunds" />
              10
              <br />
            </p>
          </div>
        ) : (
          ""
        )}

        {props.name === "qualityOfSales" ? (
          <div className="widget_thumbnail_content">
            <p className="widgetCardTitle largeFontSize">{<TextAny text={props.name} />}</p>
            <hr className="widgetCardHR" />
            <div className="centeredElement">
              <img src={startsRating} alt="stars" height="50" />
            </div>

            <div className="centeredElement">
              <h4>{<TextAny text="receivedCategory" />}DECENT</h4>
              <h4>{<TextAny text="qualityRate" />}37/50</h4>
            </div>

            <div className="centeredElement">
              <button className="roundedButton buttonClicked largeFontSize">
                <TextAny text="checkDetails" />
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        {props.name === "buyersReviews" ? (
          <div className="widget_thumbnail_content">
            <p className="widgetCardTitle largeFontSize">{<TextAny text={props.name} />}</p>
            <hr className="widgetCardHR" />
            <div style={{width: "60%", float: "left"}}>
            <p> <emph style={{fontWeight: "bold", fontSize: "18px"}}>DonPedro</emph><br/>
            Dobra kamera. Jak na cenę 200 PLN to chyba najlepszy dostępny na stronie...</p>

            <p> <emph style={{fontWeight: "bold", fontSize: "18px"}}>Caro33</emph><br/>
            Te słuchawki warte są każdych pieniędzy! Profesjonalne wykonanie, szeroka scena dźwięku...</p>
          </div>
          <div style={{width: "40%", float: "right"}}>
            <p className="centeredElement">
            <emph style={{ fontSize: "100px", fontWeight: "bold"}}>
              70%
              </emph>
            <br />
            <TextAny text="customersReviewThumbnail" />
            </p>
            </div>
          </div>
        ) : (
          ""
        )}

        {props.name === "rankingOfOffers" ? (
          <div className="widget_thumbnail_content">
            <p className="widgetCardTitle largeFontSize">{<TextAny text={props.name} />}</p>
            <hr className="widgetCardHR" />
            <p><TextAny text="bestSeller" /></p>
            <p style={{ fontWeight: "bold" }}>Słuchawki RAZER Kraken X Lite</p>
            <p><TextAny text="worstSeller" /></p>
            <p style={{ fontWeight: "bold" }}>
              Smartfon SAMSUNG Galaxy S23 8/256GB 5G
            </p>
          </div>
        ) : (
          ""
        )}

        {props.name === "salesChart" ? (
          <div className="widget_thumbnail_content">
            <p className="widgetCardTitle largeFontSize">{<TextAny text={props.name} />}</p>
            <hr className="widgetCardHR" />
            <p>
              <TextAny text="analyzeData" />
            </p>
            <div className="rightIcon">
              <img src={chartIcon} alt="stars" height="100" />
            </div>

            <button className="buttonClicked roundedButton">
              <TextAny text="lastWeek" />
            </button>
            <br />
            <button className="buttonClicked roundedButton">
              <TextAny text="lastMonth" />
            </button>
            <br />
            <button className="buttonClicked roundedButton">
              <TextAny text="lastYear" />
            </button>
          </div>
        ) : (
          ""
        )}

        {props.name === "salesAdvice" ? (
          <div className="widget_thumbnail_content">
            <p className="widgetCardTitle largeFontSize">{<TextAny text={props.name} />}</p>
            <hr className="widgetCardHR" />
            <p style={{marginRight: "12%"}}>Dodanie zdjęcia produktu, zwiększa liczbę zgłoszeń o ponad 60%. Aby zadbać o odpowiednią jakość zdjęcie wykonaj w oświetlonym pomieszczeniu!</p>
            <img style={{float: "right", marginTop: "-12%", marginRight: "4%"}} src={arrowDark} alt="back" height="20" />
            
            <p style={{marginRight: "12%"}}>Opis produktu, który zamieszczach w ofercie powinien być krótki, a zarazem treściwy. Kupujący czytają najczęściej tylko 2 pierwsze zdania!!!</p>
            <img style={{float: "right", marginTop: "-12%", marginRight: "4%"}} src={arrowDark} alt="back" height="20" />
          </div>
        ) : (
          ""
        )}
      </div>
    
  );
}

export default WidgetThumbnail;
