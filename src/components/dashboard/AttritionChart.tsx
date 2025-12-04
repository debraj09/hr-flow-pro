import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jul", hired: 12, exits: 3 },
  { month: "Aug", hired: 15, exits: 5 },
  { month: "Sep", hired: 8, exits: 4 },
  { month: "Oct", hired: 18, exits: 6 },
  { month: "Nov", hired: 14, exits: 3 },
  { month: "Dec", hired: 10, exits: 2 },
];

export const AttritionChart = () => {
  return (
    <div className="dashboard-card p-6 h-[400px]">
      <h3 className="text-lg font-semibold mb-4">Hiring vs Attrition</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          />
          <YAxis
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
          />
          <Legend
            verticalAlign="top"
            height={36}
            formatter={(value) => (
              <span className="text-sm capitalize text-muted-foreground">{value}</span>
            )}
          />
          <Bar
            dataKey="hired"
            fill="hsl(var(--chart-2))"
            radius={[4, 4, 0, 0]}
            name="New Hires"
          />
          <Bar
            dataKey="exits"
            fill="hsl(var(--destructive))"
            radius={[4, 4, 0, 0]}
            name="Exits"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
