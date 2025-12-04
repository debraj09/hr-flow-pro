import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/dashboard/KPICard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Wallet,
  TrendingUp,
  Clock,
  DollarSign,
  Download,
  Calendar,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salaryData = [
  { dept: "Engineering", amount: 450000 },
  { dept: "Sales", amount: 320000 },
  { dept: "Marketing", amount: 180000 },
  { dept: "HR", amount: 95000 },
  { dept: "Finance", amount: 150000 },
  { dept: "Operations", amount: 200000 },
];

const payrollBreakdown = [
  { name: "Base Salary", value: 1200000, color: "hsl(216, 100%, 50%)" },
  { name: "Bonuses", value: 150000, color: "hsl(142, 76%, 36%)" },
  { name: "Allowances", value: 80000, color: "hsl(38, 92%, 50%)" },
  { name: "Deductions", value: 120000, color: "hsl(0, 84%, 60%)" },
];

const payrollRecords = [
  {
    id: 1,
    employee: "Sarah Johnson",
    department: "Engineering",
    basic: 85000,
    allowances: 12000,
    deductions: 8500,
    net: 88500,
    status: "Processed",
  },
  {
    id: 2,
    employee: "Michael Chen",
    department: "Marketing",
    basic: 72000,
    allowances: 10000,
    deductions: 7200,
    net: 74800,
    status: "Processed",
  },
  {
    id: 3,
    employee: "David Wilson",
    department: "Finance",
    basic: 78000,
    allowances: 11000,
    deductions: 7800,
    net: 81200,
    status: "Pending",
  },
  {
    id: 4,
    employee: "Lisa Wang",
    department: "HR",
    basic: 65000,
    allowances: 8000,
    deductions: 6500,
    net: 66500,
    status: "Processed",
  },
  {
    id: 5,
    employee: "James Brown",
    department: "Engineering",
    basic: 95000,
    allowances: 15000,
    deductions: 9500,
    net: 100500,
    status: "Processing",
  },
];

const Payroll = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Payroll</h1>
            <p className="text-muted-foreground mt-1">
              Manage salary processing and payroll analytics
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
                <SelectItem value="oct-2024">October 2024</SelectItem>
              </SelectContent>
            </Select>
            <Button className="btn-primary">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            title="Total Payroll"
            value="$1.43M"
            change={{ value: 3.2, type: "increase" }}
            icon={Wallet}
          />
          <KPICard
            title="Avg Salary"
            value="$78,500"
            change={{ value: 5.1, type: "increase" }}
            icon={DollarSign}
            variant="success"
          />
          <KPICard
            title="Overtime Hours"
            value="1,240"
            change={{ value: 8.3, type: "decrease" }}
            icon={Clock}
            variant="warning"
          />
          <KPICard
            title="Processing"
            value="98%"
            change={{ value: 2, type: "increase" }}
            icon={TrendingUp}
            variant="info"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Department-wise Salary */}
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-semibold mb-4">Department-wise Payroll</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salaryData} layout="vertical">
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
                  formatter={(value: number) => [formatCurrency(value), "Amount"]}
                />
                <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Payroll Breakdown */}
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-semibold mb-4">Payroll Breakdown</h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={payrollBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {payrollBreakdown.map((entry, index) => (
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
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {payrollBreakdown.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Salary Cycle Status */}
        <div className="dashboard-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Salary Cycle - December 2024</h3>
              <p className="text-sm text-muted-foreground">Processing deadline: Dec 25, 2024</p>
            </div>
            <Badge className="bg-warning text-warning-foreground">In Progress</Badge>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span className="font-medium">340/365 (93%)</span>
                </div>
                <Progress value={93} className="h-3" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <CheckCircle className="w-6 h-6 mx-auto text-success mb-2" />
                <p className="text-2xl font-bold">320</p>
                <p className="text-sm text-muted-foreground">Processed</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Clock className="w-6 h-6 mx-auto text-info mb-2" />
                <p className="text-2xl font-bold">20</p>
                <p className="text-sm text-muted-foreground">Processing</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <AlertCircle className="w-6 h-6 mx-auto text-warning mb-2" />
                <p className="text-2xl font-bold">18</p>
                <p className="text-sm text-muted-foreground">Pending Approval</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Calendar className="w-6 h-6 mx-auto text-muted-foreground mb-2" />
                <p className="text-2xl font-bold">7</p>
                <p className="text-sm text-muted-foreground">On Hold</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payroll Table */}
        <div className="dashboard-card overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-lg font-semibold">Recent Payroll Records</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Employee</TableHead>
                <TableHead className="hidden md:table-cell">Department</TableHead>
                <TableHead className="text-right">Basic</TableHead>
                <TableHead className="hidden lg:table-cell text-right">Allowances</TableHead>
                <TableHead className="hidden lg:table-cell text-right">Deductions</TableHead>
                <TableHead className="text-right">Net Salary</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payrollRecords.map((record) => (
                <TableRow key={record.id} className="table-row-hover">
                  <TableCell className="font-medium">{record.employee}</TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">
                    {record.department}
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(record.basic)}</TableCell>
                  <TableCell className="hidden lg:table-cell text-right text-success">
                    +{formatCurrency(record.allowances)}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-right text-destructive">
                    -{formatCurrency(record.deductions)}
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {formatCurrency(record.net)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        record.status === "Processed"
                          ? "bg-success hover:bg-success/90"
                          : record.status === "Processing"
                          ? "bg-info hover:bg-info/90"
                          : "bg-warning hover:bg-warning/90 text-warning-foreground"
                      }
                    >
                      {record.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Payroll;
