import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/css/linechart.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return <div className="linechart_tooltip">{payload[0].value} min</div>;
  }
  else return null
};


function testLine({ session }) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="linegraph_wrapper"
    >
      <LineChart width="100%" Height="100%" data={session}>
        <Line
          name="durée moyenne des sessions"
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth={2}
          dot={false}
        />
        <XAxis dataKey="daychar" axisLine={false} stroke="white" />
        <Tooltip className="line_tooltip" wrapperStyle={{ outline: "none" }} content={<CustomTooltip />} />
        <Legend verticalAlign="top" width="60%" iconSize="0" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default testLine;
