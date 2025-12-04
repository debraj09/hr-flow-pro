import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/dashboard/KPICard";
import { DepartmentChart } from "@/components/dashboard/DepartmentChart";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { LeaveRequestsTable } from "@/components/dashboard/LeaveRequestsTable";
import { RecentJoineesTable } from "@/components/dashboard/RecentJoineesTable";
import { UpcomingBirthdays } from "@/components/dashboard/UpcomingBirthdays";
import { HolidaysList } from "@/components/dashboard/HolidaysList";
import { RecruitmentPipeline } from "@/components/dashboard/RecruitmentPipeline";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
import { AttritionChart } from "@/components/dashboard/AttritionChart";
import {
  Users,
  UserCheck,
  CalendarOff,
  Briefcase,
  ClipboardCheck,
} from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your team.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <KPICard
            title="Total Employees"
            value="365"
            change={{ value: 4.5, type: "increase" }}
            icon={Users}
            className="stagger-1"
          />
          <KPICard
            title="Present Today"
            value="342"
            change={{ value: 2.1, type: "increase" }}
            icon={UserCheck}
            variant="success"
            className="stagger-2"
          />
          <KPICard
            title="On Leave"
            value="15"
            change={{ value: 8.3, type: "decrease" }}
            icon={CalendarOff}
            variant="warning"
            className="stagger-3"
          />
          <KPICard
            title="Open Positions"
            value="12"
            change={{ value: 3, type: "increase" }}
            icon={Briefcase}
            variant="info"
            className="stagger-4"
          />
          <KPICard
            title="Pending Approvals"
            value="8"
            change={{ value: 5.2, type: "decrease" }}
            icon={ClipboardCheck}
            variant="destructive"
            className="stagger-5"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="animate-slide-up stagger-1">
            <AttendanceChart />
          </div>
          <div className="animate-slide-up stagger-2">
            <DepartmentChart />
          </div>
        </div>

        {/* Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="animate-slide-up stagger-1">
            <LeaveRequestsTable />
          </div>
          <div className="animate-slide-up stagger-2">
            <RecentJoineesTable />
          </div>
        </div>

        {/* More Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="animate-slide-up stagger-1">
            <PerformanceChart />
          </div>
          <div className="animate-slide-up stagger-2">
            <AttritionChart />
          </div>
        </div>

        {/* Bottom Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="animate-slide-up stagger-1">
            <RecruitmentPipeline />
          </div>
          <div className="animate-slide-up stagger-2">
            <UpcomingBirthdays />
          </div>
          <div className="animate-slide-up stagger-3">
            <HolidaysList />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
