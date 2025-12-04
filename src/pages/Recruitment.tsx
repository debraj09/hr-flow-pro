import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/dashboard/KPICard";
import { RecruitmentPipeline } from "@/components/dashboard/RecruitmentPipeline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Briefcase,
  Users,
  Calendar,
  Clock,
  Plus,
  Filter,
  Eye,
  MapPin,
  Building,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const openPositions = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    applicants: 45,
    posted: "Dec 1, 2024",
    status: "Active",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    applicants: 32,
    posted: "Dec 3, 2024",
    status: "Active",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    applicants: 28,
    posted: "Nov 28, 2024",
    status: "Active",
  },
  {
    id: 4,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Los Angeles, CA",
    type: "Full-time",
    applicants: 19,
    posted: "Dec 5, 2024",
    status: "Active",
  },
  {
    id: 5,
    title: "Data Analyst",
    department: "Analytics",
    location: "Remote",
    type: "Contract",
    applicants: 56,
    posted: "Nov 25, 2024",
    status: "Closing Soon",
  },
];

const hiringData = [
  { month: "Jul", applications: 120, hired: 8 },
  { month: "Aug", applications: 145, hired: 12 },
  { month: "Sep", applications: 98, hired: 6 },
  { month: "Oct", applications: 167, hired: 15 },
  { month: "Nov", applications: 134, hired: 10 },
  { month: "Dec", applications: 89, hired: 4 },
];

const scheduledInterviews = [
  {
    id: 1,
    candidate: "Chris Anderson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    position: "Senior Frontend Developer",
    time: "10:00 AM",
    date: "Today",
    round: "Technical",
  },
  {
    id: 2,
    candidate: "Rachel Green",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    position: "Product Designer",
    time: "2:30 PM",
    date: "Today",
    round: "Portfolio Review",
  },
  {
    id: 3,
    candidate: "Daniel Kim",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
    position: "DevOps Engineer",
    time: "11:00 AM",
    date: "Tomorrow",
    round: "HR Round",
  },
];

const Recruitment = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Recruitment</h1>
            <p className="text-muted-foreground mt-1">
              Manage job postings and track candidates
            </p>
          </div>
          <Button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Post New Job
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            title="Open Positions"
            value="12"
            change={{ value: 20, type: "increase" }}
            icon={Briefcase}
          />
          <KPICard
            title="Total Applicants"
            value="284"
            change={{ value: 15.3, type: "increase" }}
            icon={Users}
            variant="success"
          />
          <KPICard
            title="Interviews Scheduled"
            value="18"
            icon={Calendar}
            variant="info"
          />
          <KPICard
            title="Avg Time to Hire"
            value="23 days"
            change={{ value: 8, type: "decrease" }}
            icon={Clock}
            variant="warning"
          />
        </div>

        {/* Charts and Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Hiring Funnel */}
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-semibold mb-4">Hiring Funnel</h3>
            <div className="space-y-4">
              {[
                { stage: "Applications", count: 284, percent: 100, color: "bg-chart-1" },
                { stage: "Screening", count: 156, percent: 55, color: "bg-chart-5" },
                { stage: "Interview", count: 68, percent: 24, color: "bg-chart-3" },
                { stage: "Technical", count: 32, percent: 11, color: "bg-chart-4" },
                { stage: "Offer", count: 12, percent: 4, color: "bg-chart-2" },
              ].map((item) => (
                <div key={item.stage}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.stage}</span>
                    <span className="font-medium">{item.count} ({item.percent}%)</span>
                  </div>
                  <div className="h-8 bg-muted rounded-lg overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-500`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Applications Trend */}
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-semibold mb-4">Applications vs Hires</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={hiringData}>
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
                  }}
                />
                <Bar dataKey="applications" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Applications" />
                <Bar dataKey="hired" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} name="Hired" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Scheduled Interviews & Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Scheduled Interviews */}
          <div className="dashboard-card">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-semibold">Upcoming Interviews</h3>
            </div>
            <div className="divide-y divide-border">
              {scheduledInterviews.map((interview) => (
                <div
                  key={interview.id}
                  className="p-4 flex items-center justify-between gap-4 table-row-hover"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={interview.avatar} />
                      <AvatarFallback>{interview.candidate.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{interview.candidate}</p>
                      <p className="text-sm text-muted-foreground">{interview.position}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{interview.time}</p>
                    <p className="text-sm text-muted-foreground">{interview.date}</p>
                  </div>
                  <Badge variant="outline">{interview.round}</Badge>
                </div>
              ))}
            </div>
          </div>

          <RecruitmentPipeline />
        </div>

        {/* Open Positions Table */}
        <div className="dashboard-card overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="text-lg font-semibold">Open Positions</h3>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Position</TableHead>
                <TableHead className="hidden md:table-cell">Location</TableHead>
                <TableHead className="hidden lg:table-cell">Type</TableHead>
                <TableHead>Applicants</TableHead>
                <TableHead className="hidden sm:table-cell">Posted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {openPositions.map((position) => (
                <TableRow key={position.id} className="table-row-hover">
                  <TableCell>
                    <div>
                      <p className="font-medium">{position.title}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Building className="w-3 h-3" />
                        {position.department}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {position.location}
                    </span>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <Badge variant="outline">{position.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{position.applicants}</span>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">
                    {position.posted}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        position.status === "Active"
                          ? "bg-success hover:bg-success/90"
                          : "bg-warning hover:bg-warning/90 text-warning-foreground"
                      }
                    >
                      {position.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="w-4 h-4" />
                    </Button>
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

export default Recruitment;
