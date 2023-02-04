import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import { chartData } from "../mocks/mockedData";
const barChartData = chartData;
function SalesBarChart(props) {
  const sortedDataType =
    props.sortType === "turnover" ? "turnover" : "how_many";
  return (
    <div className="chartCard">
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          data={barChartData}
          margin={{ left: 50, right: 50, top: 100, bottom: 100 }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <Tooltip contentStyle={{ backgroundColor: "#3E7E9F" }}/>
          <Bar dataKey={sortedDataType} fill="#FEE9FF" />
          <XAxis dataKey="day" interval="preserveStartEnd" />
          <YAxis />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default SalesBarChart;
