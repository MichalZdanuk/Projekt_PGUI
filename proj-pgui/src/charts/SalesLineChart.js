import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import { chartData } from "../mocks/mockedData";

const lineChartData = chartData;
function SalesLineChart(props) {
  const sortedDataType =
    props.sortType === "turnover" ? "turnover" : "how_many";
  return (
    <div className="chartCard">
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          data={lineChartData}
          margin={{ left: 50, right: 50, top: 100, bottom: 100 }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <Tooltip contentStyle={{ backgroundColor: "#3E7E9F" }} />
          <Line
            dataKey={sortedDataType}
            stroke="#FEE9FF"
            activeDot={{ r: 10 }}
            type="monotone"
          />

          <XAxis dataKey="day" interval="preserveStartEnd" />
          <YAxis />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesLineChart;
