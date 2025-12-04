import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Engineering", value: 120, color: "hsl(216, 100%, 50%)" },
  { name: "Sales", value: 85, color: "hsl(142, 76%, 36%)" },
  { name: "Marketing", value: 45, color: "hsl(38, 92%, 50%)" },
  { name: "HR", value: 25, color: "hsl(280, 65%, 60%)" },
  { name: "Finance", value: 35, color: "hsl(199, 89%, 48%)" },
  { name: "Operations", value: 55, color: "hsl(0, 84%, 60%)" },
];

export const DepartmentChart = () => {
  return (
    <div className="dashboard-card p-6 h-[400px]">
      <h3 className="text-lg font-semibold mb-4">Department Distribution</h3>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
            formatter={(value: number) => [`${value} employees`, ""]}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value) => (
              <span className="text-sm text-muted-foreground">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
