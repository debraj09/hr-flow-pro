import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jul", satisfaction: 78, performance: 72, engagement: 68 },
  { month: "Aug", satisfaction: 80, performance: 75, engagement: 70 },
  { month: "Sep", satisfaction: 82, performance: 78, engagement: 74 },
  { month: "Oct", satisfaction: 79, performance: 80, engagement: 76 },
  { month: "Nov", satisfaction: 85, performance: 82, engagement: 79 },
  { month: "Dec", satisfaction: 88, performance: 85, engagement: 82 },
];

export const PerformanceChart = () => {
  return (
    <div className="dashboard-card p-6 h-[400px]">
      <h3 className="text-lg font-semibold mb-4">Employee Metrics Trend</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          />
          <YAxis
            domain={[60, 100]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
            formatter={(value: number) => [`${value}%`, ""]}
          />
          <Legend
            verticalAlign="top"
            height={36}
            formatter={(value) => (
              <span className="text-sm capitalize text-muted-foreground">{value}</span>
            )}
          />
          <Line
            type="monotone"
            dataKey="satisfaction"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2 }}
            name="Satisfaction"
          />
          <Line
            type="monotone"
            dataKey="performance"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2 }}
            name="Performance"
          />
          <Line
            type="monotone"
            dataKey="engagement"
            stroke="hsl(var(--chart-3))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-3))", strokeWidth: 2 }}
            name="Engagement"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
