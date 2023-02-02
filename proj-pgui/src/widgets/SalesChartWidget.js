import { Link } from "react-router-dom";
import "../styles.css";
import SalesLineChart from "../charts/SalesLineChart";
import SalesBarChart from "../charts/SalesBarChart";
import { useState } from "react";

function SalesChartWidget() {
  const [chartType, setChartType] = useState("barChart");
  const changeChartType=(e)=>{
    e.preventDefault();
    setChartType(e.target.value);
  }
  return (
    <div className="widgetCard">
      <p className="widgetTitle">Wykres Sprzedaży</p>
      <hr className="widgetTitle" />
      <div style={{marginLeft: "32%", marginTop: "2%"}}>
      <ChartTypeButton name="LINIOWY" handleClick={changeChartType} buttonValue="lineChart" isChosen={chartType === "lineChart" ? "yes": "no"}/>
      <ChartTypeButton name="SŁUPKOWY" handleClick={changeChartType} buttonValue="barChart" isChosen={chartType === "barChart" ? "yes": "no"}/>
      </div>
      {/* <p>wybrany: {chartType}</p> */}
      { chartType === "barChart" ? <SalesBarChart sortType="turnover" /> : <SalesLineChart sortType="turnover"/>}
    </div>
  );
}

function ChartTypeButton(props){
  return(
    <>
    <button onClick={props.handleClick}
    value={props.buttonValue}
    className={props.isChosen === "yes" ? "buttonClicked roundedButton" : "buttonNotClicked roundedButton"}>
      {props.name}
    </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </>
  )
}

export default SalesChartWidget;
