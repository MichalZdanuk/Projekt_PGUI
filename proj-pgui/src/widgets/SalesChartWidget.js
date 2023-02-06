import SalesLineChart from "../charts/SalesLineChart";
import SalesBarChart from "../charts/SalesBarChart";
import { useState, useContext } from "react";
import { TextAny } from "../language/langTexts";
import { RequiredAuth } from "../auth";

import ThemeContext from "../theme/themeContext";

function SalesChartWidget() {
  const [chartType, setChartType] = useState("lineChart");
  const [dataType, setDataType] = useState("turnover");
  const { theme } = useContext(ThemeContext);

  const changeChartType = (e) => {
    e.preventDefault();
    if (e.target.value === "barChart" || e.target.value === "lineChart") {
      setChartType(e.target.value);
    } else if (e.target.value === "turnover" || e.target.value === "how_many") {
      setDataType(e.target.value);
    }
  };
  return (
    <RequiredAuth>
      <div className={"widgetCard " + theme + "Main"}>
        <p className="widgetTitle adjustedTextLargeWidgetCardTitle">
          <TextAny text="salesChart" />
        </p>
        <hr className="widgetTitle" />
        {/* dataType buttons */}
        <div className="centeredElement">
          <ChartButton
            name="turnover"
            handleClick={changeChartType}
            buttonValue="turnover"
            isChosen={dataType === "turnover" ? "yes" : "no"}
          />
          <ChartButton
            name="how_many"
            handleClick={changeChartType}
            buttonValue="how_many"
            isChosen={dataType === "how_many" ? "yes" : "no"}
          />
        </div>
        <br />

        <div className="centeredElement">
          <ChartButton
            name="lineChart"
            handleClick={changeChartType}
            buttonValue="lineChart"
            isChosen={chartType === "lineChart" ? "yes" : "no"}
          />
          <ChartButton
            name="barChart"
            handleClick={changeChartType}
            buttonValue="barChart"
            isChosen={chartType === "barChart" ? "yes" : "no"}
          />
        </div>

        {chartType === "barChart" ? (
          <SalesBarChart sortType={dataType} />
        ) : (
          <SalesLineChart sortType={dataType} />
        )}
      </div>
    </RequiredAuth>
  );
}

function ChartButton(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={props.handleClick}
        value={props.buttonValue}
        className={
          props.isChosen === "yes"
            ? "roundedButton adjustedTextLargeWidgetThumbnailTitle buttonClicked " +
              theme +
              "ButtonClicked"
            : "roundedButton adjustedTextLargeWidgetThumbnailTitle buttonNotClicked " +
              theme +
              "ButtonNotClicked"
        }
      >
        <TextAny text={props.name} />
      </button>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
}

export default SalesChartWidget;
