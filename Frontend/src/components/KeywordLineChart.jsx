import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "Apr 14", rods: 10 },
  { date: "Apr 15", rods: 20 },
  { date: "Apr 16", rods: 25 },
  { date: "Apr 17", rods: 30 },
  { date: "Apr 18", rods: 15 },
  { date: "Apr 19", rods: 22, platforms: "Facebook, Twitter, YouTube" },
  { date: "Apr 20", rods: 55 },
];

const KeywordLineChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip
        formatter={(value, name, props) => {
          if (props.payload.platforms) {
            return [`${value} - ${props.payload.platforms}`, "Rods"];
          }
          return [value, name];
        }}
      />
      <Line type="monotone" dataKey="rods" stroke="#3b82f6" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
);

export default KeywordLineChart;