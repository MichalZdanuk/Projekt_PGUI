import SalesLineChart from "../charts/SalesLineChart";
import SalesBarChart from "../charts/SalesBarChart";
import { useState } from "react";
import { TextAny } from "../language/langTexts";
import { RequiredAuth } from "../auth";

function SalesChartWidget() {
  const [chartType, setChartType] = useState("barChart");
  const [dataType, setDataType] = useState("turnover");

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
      <div className="widgetCard">
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

        {/* chartType buttons */}
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
  return (
    <>
      <button
        onClick={props.handleClick}
        value={props.buttonValue}
        className={
          props.isChosen === "yes"
            ? "buttonClicked roundedButton adjustedTextLargeWidgetThumbnailTitle"
            : "buttonNotClicked roundedButton adjustedTextLargeWidgetThumbnailTitle"
        }
      >
        <TextAny text={props.name} />
      </button>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  );
}

export default SalesChartWidget;
