import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/dashboard/KPICard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import {
  Monitor,
  Laptop,
  Smartphone,
  Server,
  Plus,
  Search,
  Filter,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const assetStats = [
  { name: "Laptops", value: 245, color: "hsl(216, 100%, 50%)" },
  { name: "Monitors", value: 312, color: "hsl(142, 76%, 36%)" },
  { name: "Phones", value: 180, color: "hsl(38, 92%, 50%)" },
  { name: "Servers", value: 24, color: "hsl(280, 65%, 60%)" },
  { name: "Others", value: 89, color: "hsl(199, 89%, 48%)" },
];

const assets = [
  {
    id: "AST-001",
    name: "MacBook Pro 16\"",
    type: "Laptop",
    assignedTo: "Sarah Johnson",
    department: "Engineering",
    status: "Assigned",
    condition: "Good",
    purchaseDate: "Jan 15, 2023",
  },
  {
    id: "AST-002",
    name: "Dell UltraSharp 27\"",
    type: "Monitor",
    assignedTo: "Michael Chen",
    department: "Marketing",
    status: "Assigned",
    condition: "Good",
    purchaseDate: "Mar 22, 2023",
  },
  {
    id: "AST-003",
    name: "iPhone 15 Pro",
    type: "Phone",
    assignedTo: "Emily Davis",
    department: "Sales",
    status: "Assigned",
    condition: "Excellent",
    purchaseDate: "Sep 20, 2024",
  },
  {
    id: "AST-004",
    name: "ThinkPad X1 Carbon",
    type: "Laptop",
    assignedTo: "-",
    department: "-",
    status: "Available",
    condition: "Good",
    purchaseDate: "Jun 10, 2023",
  },
  {
    id: "AST-005",
    name: "Dell PowerEdge R740",
    type: "Server",
    assignedTo: "IT Department",
    department: "IT",
    status: "In Use",
    condition: "Good",
    purchaseDate: "Nov 5, 2022",
  },
  {
    id: "AST-006",
    name: "MacBook Air M2",
    type: "Laptop",
    assignedTo: "-",
    department: "-",
    status: "Maintenance",
    condition: "Needs Repair",
    purchaseDate: "Feb 28, 2024",
  },
];

const itTickets = [
  {
    id: "TKT-1234",
    title: "VPN Connection Issue",
    requester: "David Wilson",
    priority: "High",
    status: "Open",
    created: "2 hours ago",
  },
  {
    id: "TKT-1233",
    title: "Software Installation Request",
    requester: "Lisa Wang",
    priority: "Medium",
    status: "In Progress",
    created: "5 hours ago",
  },
  {
    id: "TKT-1232",
    title: "Email Access Problem",
    requester: "James Brown",
    priority: "High",
    status: "Open",
    created: "1 day ago",
  },
  {
    id: "TKT-1231",
    title: "Hardware Upgrade Request",
    requester: "Sophia Lee",
    priority: "Low",
    status: "Resolved",
    created: "2 days ago",
  },
];

const Assets = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Laptop":
        return <Laptop className="w-4 h-4" />;
      case "Monitor":
        return <Monitor className="w-4 h-4" />;
      case "Phone":
        return <Smartphone className="w-4 h-4" />;
      case "Server":
        return <Server className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Assets & IT</h1>
            <p className="text-muted-foreground mt-1">
              Manage company assets and IT support
            </p>
          </div>
          <Button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Add Asset
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            title="Total Assets"
            value="850"
            change={{ value: 12, type: "increase" }}
            icon={Monitor}
          />
          <KPICard
            title="Assigned"
            value="724"
            icon={CheckCircle}
            variant="success"
          />
          <KPICard
            title="Available"
            value="98"
            icon={Clock}
            variant="info"
          />
          <KPICard
            title="Maintenance"
            value="28"
            icon={AlertTriangle}
            variant="warning"
          />
        </div>

        {/* Charts and Tickets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Asset Distribution */}
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-semibold mb-4">Asset Distribution</h3>
            <div className="flex items-center">
              <ResponsiveContainer width="60%" height={250}>
                <PieChart>
                  <Pie
                    data={assetStats}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {assetStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="w-40% space-y-3">
                {assetStats.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}</span>
                    <span className="text-sm font-medium ml-auto">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IT Support Tickets */}
          <div className="dashboard-card">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="text-lg font-semibold">Recent IT Tickets</h3>
              <Badge>{itTickets.filter(t => t.status !== "Resolved").length} open</Badge>
            </div>
            <div className="divide-y divide-border">
              {itTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="p-4 table-row-hover"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-mono text-muted-foreground">
                          {ticket.id}
                        </span>
                        <Badge
                          variant="outline"
                          className={
                            ticket.priority === "High"
                              ? "border-destructive text-destructive"
                              : ticket.priority === "Medium"
                              ? "border-warning text-warning"
                              : ""
                          }
                        >
                          {ticket.priority}
                        </Badge>
                      </div>
                      <p className="font-medium mt-1">{ticket.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {ticket.requester} • {ticket.created}
                      </p>
                    </div>
                    <Badge
                      className={
                        ticket.status === "Open"
                          ? "bg-destructive hover:bg-destructive/90"
                          : ticket.status === "In Progress"
                          ? "bg-info hover:bg-info/90"
                          : "bg-success hover:bg-success/90"
                      }
                    >
                      {ticket.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="dashboard-card p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search assets..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="laptop">Laptops</SelectItem>
                <SelectItem value="monitor">Monitors</SelectItem>
                <SelectItem value="phone">Phones</SelectItem>
                <SelectItem value="server">Servers</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="assigned">Assigned</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Assets Table */}
        <div className="dashboard-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Asset ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Assigned To</TableHead>
                <TableHead className="hidden lg:table-cell">Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden sm:table-cell">Condition</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assets.map((asset) => (
                <TableRow key={asset.id} className="table-row-hover">
                  <TableCell className="font-mono text-sm">{asset.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(asset.type)}
                      <span className="font-medium">{asset.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {asset.assignedTo}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-muted-foreground">
                    {asset.department}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        asset.status === "Assigned" || asset.status === "In Use"
                          ? "bg-success hover:bg-success/90"
                          : asset.status === "Available"
                          ? "bg-info hover:bg-info/90"
                          : "bg-warning hover:bg-warning/90 text-warning-foreground"
                      }
                    >
                      {asset.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <span
                      className={
                        asset.condition === "Excellent" || asset.condition === "Good"
                          ? "text-success"
                          : "text-destructive"
                      }
                    >
                      {asset.condition}
                    </span>
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

export default Assets;
