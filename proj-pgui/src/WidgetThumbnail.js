import startsRating from "./icons/startsRating.png";
import chartIcon from "./icons/chartIcon.png";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TextAny } from "./language/langTexts";

import ThemeContext from "./theme/themeContext";

function WidgetThumbnail(props) {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <div
      className={"widget_thumbnail " + theme + "Main"}
      onMouseUp={(e) => {
        e.stopPropagation();
        navigate(props.location);
      }}
    >
      {props.name === "orders" ? (
        <div className="widget_thumbnail_content">
          <p className="widgetCardTitle adjustedTextLargeWidgetThumbnailTitle">
            {<TextAny text={props.name} />}
          </p>
          <hr className="widgetCardHR" />
          <div style={{ width: "60%", float: "left" }}>
            <p className="adjustedTextLargeWidgetThumbnail">
              <TextAny text="notPaid" />
              &emsp;
              <span className="numberOfOrders">12</span>
              <br />
              <TextAny text="notSent" />
              &emsp;
              <span className="numberOfOrders">15</span>
              <br />
              <TextAny text="refunds" />
              &emsp;<span className="numberOfOrders">10</span>
              <br />
              <br />
            </p>
            <div className="centeredElement">
              <button
                className={
                  "roundedButton adjustedTextLargeWidgetThumbnailTitle buttonClicked " +
                  theme +
                  "ButtonClicked"
                }
              >
                <TextAny text="orders" />
              </button>
            </div>
          </div>
          <div style={{ width: "35%", float: "right", marginRight: "5%" }}>
            <p className="centeredElement">
              <emph style={{ fontSize: "70px", fontWeight: "bold" }}>37</emph>
              <br />
              <TextAny text="currentlyProcessedOrders" />
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      {props.name === "qualityOfSales" ? (
        <div className="widget_thumbnail_content">
          <p className="widgetCardTitle adjustedTextLargeWidgetThumbnailTitle">
            {<TextAny text={props.name} />}
          </p>
          <hr className="widgetCardHR" />
          <div className="centeredElement">
            <img src={startsRating} alt="stars" height="50" />
          </div>

          <div className="centeredElement adjustedTextLargeWidgetThumbnail">
            <h4>
              {<TextAny text="receivedCategory" />}
              <TextAny text="decentCategory" />
            </h4>
            <h4>{<TextAny text="qualityRate" />}37/50</h4>
          </div>

          <div className="centeredElement">
            <button
              className={
                "roundedButton adjustedTextLargeWidgetThumbnailTitle buttonClicked " +
                theme +
                "ButtonClicked"
              }
            >
              <TextAny text="checkDetails" />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {props.name === "buyersReviews" ? (
        <div className="widget_thumbnail_content">
          <p className="widgetCardTitle adjustedTextLargeWidgetThumbnailTitle">
            {<TextAny text={props.name} />}
          </p>
          <hr className="widgetCardHR" />
          <div style={{ width: "60%", float: "left" }}>
            <p className="adjustedTextWidgetThumbnail">
              {" "}
              <emph style={{ fontWeight: "bold", fontSize: "18px" }}>
                DonPedro
              </emph>
              <br />
              Dobra kamera. Jak na cenę 200 PLN to chyba najlepszy dostępny na
              stronie...
            </p>

            <p className="adjustedTextWidgetThumbnail">
              {" "}
              <emph style={{ fontWeight: "bold", fontSize: "18px" }}>
                Caro33
              </emph>
              <br />
              Te słuchawki warte są każdych pieniędzy! Profesjonalne wykonanie,
              szeroka scena dźwięku...
            </p>
          </div>
          <div style={{ width: "35%", float: "right", marginRight: "5%" }}>
            <p className="centeredElement">
              <emph style={{ fontSize: "70px", fontWeight: "bold" }}>70%</emph>
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
          <p className="widgetCardTitle adjustedTextLargeWidgetThumbnailTitle">
            {<TextAny text={props.name} />}
          </p>
          <hr className="widgetCardHR" />
          <p className="adjustedTextWidgetThumbnail">
            <TextAny text="bestSeller" />
          </p>
          <p style={{ fontWeight: "bold" }}>Słuchawki RAZER Kraken X Lite</p>
          <p className="adjustedTextWidgetThumbnail">
            <TextAny text="worstSeller" />
          </p>
          <p style={{ fontWeight: "bold" }}>
            Smartfon SAMSUNG Galaxy S23 8/256GB 5G
          </p>
        </div>
      ) : (
        ""
      )}

      {props.name === "salesChart" ? (
        <div className="widget_thumbnail_content">
          <p className="widgetCardTitle adjustedTextLargeWidgetThumbnailTitle">
            {<TextAny text={props.name} />}
          </p>
          <hr className="widgetCardHR" />
          <p className="adjustedTextWidgetThumbnail">
            <TextAny text="analyzeData" />
          </p>
          <div className="centeredElement leftAndRightMargins">
            <img
              style={{ maxWidth: "100%" }}
              src={chartIcon}
              alt="chart"
              height="100"
            />
          </div>

          <div className="centeredElement adjustedTextWidgetThumbnail">
            <button
              className={
                "roundedButton buttonClicked " + theme + "ButtonClicked"
              }
            >
              <TextAny text="lastWeek" />
            </button>
            <button
              className={
                "roundedButton buttonClicked " + theme + "ButtonClicked"
              }
            >
              <TextAny text="lastMonth" />
            </button>
            <button
              className={
                "roundedButton buttonClicked " + theme + "ButtonClicked"
              }
            >
              <TextAny text="lastYear" />
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      {props.name === "salesAdvice" ? (
        <div className="widget_thumbnail_content">
          <p className="widgetCardTitle adjustedTextLargeWidgetThumbnailTitle">
            {<TextAny text={props.name} />}
          </p>
          <hr className="widgetCardHR" />
          <ul>
            <li>
              Dodanie zdjęcia produktu, zwiększa liczbę zgłoszeń o ponad 60%.
              Aby zadbać o odpowiednią jakość zdjęcie wykonaj w oświetlonym
              pomieszczeniu!
            </li>
            <br />
            <li>
              Opis produktu, który zamieszczach w ofercie powinien być krótki, a
              zarazem treściwy. Kupujący czytają najczęściej tylko 2 pierwsze
              zdania!!!
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default WidgetThumbnail;
