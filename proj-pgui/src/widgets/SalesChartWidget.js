import SalesLineChart from "../charts/SalesLineChart";
import SalesBarChart from "../charts/SalesBarChart";
import { useState } from "react";
import { TextAny } from "../language/langTexts";
import { RequiredAuth } from "../auth";

function SalesChartWidget() {
  const [chartType, setChartType] = useState("barChart");
  const changeChartType = (e) => {
    e.preventDefault();
    setChartType(e.target.value);
  };
  return (
    <RequiredAuth>
      <div className="widgetCard">
        <p className="widgetTitle adjustedTextLargeWidgetCardTitle">
          <TextAny text="salesChart" />
        </p>
        <hr className="widgetTitle" />
        <div className="centeredElement">
          <ChartTypeButton
            name="lineChart"
            handleClick={changeChartType}
            buttonValue="lineChart"
            isChosen={chartType === "lineChart" ? "yes" : "no"}
          />
          <ChartTypeButton
            name="barChart"
            handleClick={changeChartType}
            buttonValue="barChart"
            isChosen={chartType === "barChart" ? "yes" : "no"}
          />
        </div>
        {/* <p>wybrany: {chartType}</p> */}
        {chartType === "barChart" ? (
          <SalesBarChart sortType="turnover" />
        ) : (
          <SalesLineChart sortType="turnover" />
        )}
      </div>
    </RequiredAuth>
  );
}

function ChartTypeButton(props) {
  return (
    <>
      <button
        onClick={props.handleClick}
        value={props.buttonValue}
        className={
          props.isChosen === "yes"
            ? "buttonClicked roundedButton largeFontSize"
            : "buttonNotClicked roundedButton largeFontSize"
        }
      >
        <TextAny text={props.name} />
      </button>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
}

export default SalesChartWidget;
