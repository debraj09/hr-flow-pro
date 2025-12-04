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
  { day: "Mon", present: 340, absent: 15, leave: 10 },
  { day: "Tue", present: 345, absent: 12, leave: 8 },
  { day: "Wed", present: 338, absent: 18, leave: 9 },
  { day: "Thu", present: 342, absent: 14, leave: 9 },
  { day: "Fri", present: 335, absent: 20, leave: 10 },
  { day: "Sat", present: 180, absent: 5, leave: 5 },
  { day: "Sun", present: 0, absent: 0, leave: 0 },
];

export const AttendanceChart = () => {
  return (
    <div className="dashboard-card p-6 h-[400px]">
      <h3 className="text-lg font-semibold mb-4">Weekly Attendance Trend</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data} barGap={2}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="day"
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
            dataKey="present"
            fill="hsl(var(--chart-2))"
            radius={[4, 4, 0, 0]}
            name="Present"
          />
          <Bar
            dataKey="absent"
            fill="hsl(var(--destructive))"
            radius={[4, 4, 0, 0]}
            name="Absent"
          />
          <Bar
            dataKey="leave"
            fill="hsl(var(--chart-3))"
            radius={[4, 4, 0, 0]}
            name="On Leave"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
