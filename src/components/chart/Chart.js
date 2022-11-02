import "./chart.scss";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", total: 1200 },
  { name: "February", total: 1900 },
  { name: "March", total: 2100 },
  { name: "April", total: 800 },
  { name: "May", total: 1600 },
  { name: "June", total: 1700 },
];

const Charts = () => {
  return (
    <div className="chart">
      <div className="title">Last 6 Months (Revenue)</div>
      {/* <ResponsiveContainer width="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="total"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer> */}
    </div>
  );
};

export default Charts;
