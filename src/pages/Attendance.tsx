import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/dashboard/KPICard";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  UserCheck,
  UserX,
  Clock,
  CalendarOff,
  Search,
  Calendar,
  Download,
} from "lucide-react";

const attendanceData = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    department: "Engineering",
    checkIn: "09:02 AM",
    checkOut: "06:15 PM",
    workHours: "9h 13m",
    status: "Present",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    department: "Marketing",
    checkIn: "08:45 AM",
    checkOut: "05:30 PM",
    workHours: "8h 45m",
    status: "Present",
  },
  {
    id: 3,
    name: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    department: "Sales",
    checkIn: "-",
    checkOut: "-",
    workHours: "-",
    status: "On Leave",
  },
  {
    id: 4,
    name: "David Wilson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    department: "Finance",
    checkIn: "09:30 AM",
    checkOut: "-",
    workHours: "5h 30m",
    status: "Working",
  },
  {
    id: 5,
    name: "Lisa Wang",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    department: "HR",
    checkIn: "08:55 AM",
    checkOut: "06:00 PM",
    workHours: "9h 5m",
    status: "Present",
  },
  {
    id: 6,
    name: "James Brown",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    department: "Engineering",
    checkIn: "-",
    checkOut: "-",
    workHours: "-",
    status: "Absent",
  },
];

const Attendance = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Attendance</h1>
            <p className="text-muted-foreground mt-1">
              Track and manage employee attendance
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Select Date
            </Button>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            title="Present Today"
            value="342"
            icon={UserCheck}
            variant="success"
          />
          <KPICard
            title="Absent Today"
            value="8"
            icon={UserX}
            variant="destructive"
          />
          <KPICard
            title="On Leave"
            value="15"
            icon={CalendarOff}
            variant="warning"
          />
          <KPICard
            title="Late Arrivals"
            value="12"
            icon={Clock}
            variant="info"
          />
        </div>

        {/* Attendance Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AttendanceChart />
          </div>
          <div className="dashboard-card p-6 space-y-6">
            <h3 className="text-lg font-semibold">Today's Summary</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Present</span>
                  <span className="font-medium">342 (93.7%)</span>
                </div>
                <Progress value={93.7} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>On Leave</span>
                  <span className="font-medium">15 (4.1%)</span>
                </div>
                <Progress value={4.1} className="h-2 [&>div]:bg-warning" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Absent</span>
                  <span className="font-medium">8 (2.2%)</span>
                </div>
                <Progress value={2.2} className="h-2 [&>div]:bg-destructive" />
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">9:02 AM</p>
                  <p className="text-sm text-muted-foreground">Avg Check-in</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">6:15 PM</p>
                  <p className="text-sm text-muted-foreground">Avg Check-out</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="dashboard-card p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search employees..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="present">Present</SelectItem>
                <SelectItem value="absent">Absent</SelectItem>
                <SelectItem value="leave">On Leave</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="dashboard-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Employee</TableHead>
                <TableHead className="hidden md:table-cell">Department</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead className="hidden sm:table-cell">Check Out</TableHead>
                <TableHead className="hidden lg:table-cell">Work Hours</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceData.map((row) => (
                <TableRow key={row.id} className="table-row-hover">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-9 h-9">
                        <AvatarImage src={row.avatar} />
                        <AvatarFallback>{row.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{row.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-muted-foreground">
                    {row.department}
                  </TableCell>
                  <TableCell>{row.checkIn}</TableCell>
                  <TableCell className="hidden sm:table-cell">{row.checkOut}</TableCell>
                  <TableCell className="hidden lg:table-cell">{row.workHours}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        row.status === "Present" || row.status === "Working"
                          ? "default"
                          : row.status === "On Leave"
                          ? "secondary"
                          : "destructive"
                      }
                      className={
                        row.status === "Present"
                          ? "bg-success hover:bg-success/90"
                          : row.status === "Working"
                          ? "bg-info hover:bg-info/90"
                          : row.status === "On Leave"
                          ? "bg-warning hover:bg-warning/90 text-warning-foreground"
                          : ""
                      }
                    >
                      {row.status}
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

export default Attendance;
