import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Download,
  FileText,
  Users,
  Wallet,
  Calendar,
  TrendingUp,
  Clock,
  Filter,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const revenuePerEmployee = [
  { dept: "Engineering", revenue: 185000 },
  { dept: "Sales", revenue: 220000 },
  { dept: "Marketing", revenue: 145000 },
  { dept: "Finance", revenue: 165000 },
  { dept: "Operations", revenue: 125000 },
];

const attritionData = [
  { month: "Jul", rate: 2.1 },
  { month: "Aug", rate: 2.4 },
  { month: "Sep", rate: 1.8 },
  { month: "Oct", rate: 2.2 },
  { month: "Nov", rate: 1.5 },
  { month: "Dec", rate: 1.2 },
];

const headcountTrend = [
  { month: "Jul", count: 342 },
  { month: "Aug", count: 348 },
  { month: "Sep", count: 352 },
  { month: "Oct", count: 358 },
  { month: "Nov", count: 362 },
  { month: "Dec", count: 365 },
];

const deptRevenue = [
  { name: "Engineering", value: 2200000, color: "hsl(216, 100%, 50%)" },
  { name: "Sales", value: 3500000, color: "hsl(142, 76%, 36%)" },
  { name: "Marketing", value: 1200000, color: "hsl(38, 92%, 50%)" },
  { name: "Finance", value: 800000, color: "hsl(280, 65%, 60%)" },
  { name: "Operations", value: 950000, color: "hsl(199, 89%, 48%)" },
];

const costPerEmployee = [
  { dept: "Engineering", cost: 125000 },
  { dept: "Sales", cost: 95000 },
  { dept: "Marketing", cost: 85000 },
  { dept: "HR", cost: 75000 },
  { dept: "Finance", cost: 90000 },
  { dept: "Operations", cost: 70000 },
];

const reportTemplates = [
  {
    id: 1,
    name: "Monthly HR Summary",
    description: "Complete monthly overview of HR metrics",
    icon: Users,
    lastGenerated: "Dec 1, 2024",
    type: "Scheduled",
  },
  {
    id: 2,
    name: "Payroll Report",
    description: "Detailed payroll breakdown by department",
    icon: Wallet,
    lastGenerated: "Nov 30, 2024",
    type: "Monthly",
  },
  {
    id: 3,
    name: "Attendance Analysis",
    description: "Attendance patterns and trends",
    icon: Calendar,
    lastGenerated: "Dec 3, 2024",
    type: "Weekly",
  },
  {
    id: 4,
    name: "Performance Analytics",
    description: "Employee performance metrics and KPIs",
    icon: TrendingUp,
    lastGenerated: "Nov 28, 2024",
    type: "Quarterly",
  },
  {
    id: 5,
    name: "Overtime Report",
    description: "Overtime hours and cost analysis",
    icon: Clock,
    lastGenerated: "Dec 2, 2024",
    type: "Monthly",
  },
  {
    id: 6,
    name: "Custom Report",
    description: "Create a custom report with selected metrics",
    icon: FileText,
    lastGenerated: "-",
    type: "On-demand",
  },
];

const Reports = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Reports & Analytics</h1>
            <p className="text-muted-foreground mt-1">
              Generate insights and download reports
            </p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="dec-2024">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dec-2024">December 2024</SelectItem>
                <SelectItem value="nov-2024">November 2024</SelectItem>
                <SelectItem value="q4-2024">Q4 2024</SelectItem>
                <SelectItem value="2024">Year 2024</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Report Templates */}
        <div className="dashboard-card p-6">
          <h3 className="text-lg font-semibold mb-4">Report Templates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reportTemplates.map((report) => (
              <div
                key={report.id}
                className="p-4 border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <report.icon className="w-5 h-5" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {report.type}
                  </Badge>
                </div>
                <h4 className="font-medium mt-3">{report.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {report.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    {report.lastGenerated !== "-" ? `Last: ${report.lastGenerated}` : "Not generated"}
                  </span>
                  <Button size="sm" variant="ghost" className="h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download className="w-4 h-4 mr-1" />
                    Generate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Charts - Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue per Employee */}
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-semibold mb-4">Revenue per Employee by Department</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={revenuePerEmployee}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="dept"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => [formatCurrency(value), "Revenue/Employee"]}
                />
                <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Attrition Rate */}
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-semibold mb-4">Attrition Rate Trend</h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={attritionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <YAxis
                  domain={[0, 4]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) => [`${value}%`, "Attrition Rate"]}
                />
                <Area
                  type="monotone"
                  dataKey="rate"
                  stroke="hsl(var(--destructive))"
                  fill="hsl(var(--destructive))"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Analytics Charts - Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Department Revenue */}
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-semibold mb-4">Department-wise Revenue</h3>
            <div className="flex items-center">
              <ResponsiveContainer width="60%" height={280}>
                <PieChart>
                  <Pie
                    data={deptRevenue}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {deptRevenue.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    formatter={(value: number) => [formatCurrency(value), ""]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {deptRevenue.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Headcount Trend */}
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-semibold mb-4">Headcount Trend</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={headcountTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <YAxis
                  domain={[330, 380]}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--chart-2))" }}
                  name="Employees"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cost per Employee */}
        <div className="dashboard-card p-6">
          <h3 className="text-lg font-semibold mb-4">Average Cost per Employee by Department</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={costPerEmployee} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <YAxis
                type="category"
                dataKey="dept"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                width={80}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => [formatCurrency(value), "Cost/Employee"]}
              />
              <Bar dataKey="cost" fill="hsl(var(--chart-3))" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Key Metrics Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Avg Tenure", value: "2.8 years", change: "+0.3" },
            { label: "Training Hours/Employee", value: "24 hrs", change: "+5" },
            { label: "Overtime Cost", value: "$145K", change: "-12%" },
            { label: "Employee NPS", value: "72", change: "+8" },
          ].map((metric) => (
            <div key={metric.label} className="dashboard-card p-4 text-center">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="text-2xl font-bold mt-1">{metric.value}</p>
              <Badge variant="outline" className="mt-2 text-success">
                {metric.change}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
