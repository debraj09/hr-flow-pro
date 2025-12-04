import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { KPICard } from "@/components/dashboard/KPICard";
import { PerformanceChart } from "@/components/dashboard/PerformanceChart";
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
  TrendingUp,
  Award,
  Target,
  BookOpen,
  Star,
  Calendar,
  ChevronRight,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const performanceScores = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    department: "Engineering",
    score: 92,
    trend: "up",
    goals: 8,
    goalsCompleted: 7,
  },
  {
    id: 2,
    name: "James Brown",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    department: "Engineering",
    score: 88,
    trend: "up",
    goals: 6,
    goalsCompleted: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    department: "Marketing",
    score: 85,
    trend: "stable",
    goals: 5,
    goalsCompleted: 4,
  },
  {
    id: 4,
    name: "Lisa Wang",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    department: "HR",
    score: 90,
    trend: "up",
    goals: 7,
    goalsCompleted: 7,
  },
  {
    id: 5,
    name: "David Wilson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    department: "Finance",
    score: 78,
    trend: "down",
    goals: 6,
    goalsCompleted: 4,
  },
];

const radarData = [
  { skill: "Communication", score: 85 },
  { skill: "Technical", score: 92 },
  { skill: "Leadership", score: 78 },
  { skill: "Teamwork", score: 88 },
  { skill: "Problem Solving", score: 90 },
  { skill: "Creativity", score: 82 },
];

const trainingSessions = [
  {
    id: 1,
    title: "Leadership Excellence Program",
    instructor: "Dr. Amanda Roberts",
    date: "Dec 18, 2024",
    duration: "3 hours",
    enrolled: 25,
    type: "Workshop",
  },
  {
    id: 2,
    title: "Advanced React Development",
    instructor: "Tech Team",
    date: "Dec 20, 2024",
    duration: "4 hours",
    enrolled: 18,
    type: "Technical",
  },
  {
    id: 3,
    title: "Effective Communication Skills",
    instructor: "HR Department",
    date: "Dec 22, 2024",
    duration: "2 hours",
    enrolled: 32,
    type: "Soft Skills",
  },
];

const upcomingReviews = [
  { name: "Q4 Performance Reviews", date: "Dec 20-30", employees: 365 },
  { name: "Annual Goal Setting", date: "Jan 2-10", employees: 365 },
  { name: "Mid-year Check-ins", date: "Jun 15-30", employees: 365 },
];

const surveyData = [
  { month: "Jul", satisfaction: 78, engagement: 72 },
  { month: "Aug", satisfaction: 80, engagement: 75 },
  { month: "Sep", satisfaction: 82, engagement: 78 },
  { month: "Oct", satisfaction: 79, engagement: 76 },
  { month: "Nov", satisfaction: 85, engagement: 80 },
  { month: "Dec", satisfaction: 87, engagement: 83 },
];

const Performance = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Performance</h1>
            <p className="text-muted-foreground mt-1">
              Track employee performance and engagement
            </p>
          </div>
          <Button className="btn-primary">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Review
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            title="Avg Performance Score"
            value="86.4%"
            change={{ value: 3.2, type: "increase" }}
            icon={TrendingUp}
          />
          <KPICard
            title="Goals Completed"
            value="78%"
            change={{ value: 5.1, type: "increase" }}
            icon={Target}
            variant="success"
          />
          <KPICard
            title="Top Performers"
            value="52"
            change={{ value: 8, type: "increase" }}
            icon={Award}
            variant="warning"
          />
          <KPICard
            title="Training Completion"
            value="92%"
            change={{ value: 2, type: "increase" }}
            icon={BookOpen}
            variant="info"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PerformanceChart />
          
          {/* Skills Radar */}
          <div className="dashboard-card p-6">
            <h3 className="text-lg font-semibold mb-4">Company Skills Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis
                  dataKey="skill"
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Employee Pulse Survey */}
        <div className="dashboard-card p-6">
          <h3 className="text-lg font-semibold mb-4">Employee Pulse Survey Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={surveyData}>
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
                }}
                formatter={(value: number) => [`${value}%`, ""]}
              />
              <Line
                type="monotone"
                dataKey="satisfaction"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--primary))" }}
                name="Satisfaction"
              />
              <Line
                type="monotone"
                dataKey="engagement"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-2))" }}
                name="Engagement"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Performers */}
          <div className="dashboard-card">
            <div className="p-6 border-b border-border">
              <h3 className="text-lg font-semibold">Top Performers</h3>
            </div>
            <div className="divide-y divide-border">
              {performanceScores.map((employee, index) => (
                <div
                  key={employee.id}
                  className="p-4 flex items-center justify-between gap-4 table-row-hover"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-muted-foreground w-6">
                      {index + 1}
                    </span>
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={employee.avatar} />
                      <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{employee.name}</p>
                      <p className="text-sm text-muted-foreground">{employee.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-bold text-lg">{employee.score}%</p>
                      <p className="text-xs text-muted-foreground">
                        {employee.goalsCompleted}/{employee.goals} goals
                      </p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.round(employee.score / 20)
                              ? "text-warning fill-warning"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training Sessions */}
          <div className="dashboard-card">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="text-lg font-semibold">Upcoming Training</h3>
              <Button variant="ghost" size="sm">
                View All
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="divide-y divide-border">
              {trainingSessions.map((session) => (
                <div
                  key={session.id}
                  className="p-4 table-row-hover"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium">{session.title}</p>
                      <p className="text-sm text-muted-foreground">
                        by {session.instructor}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {session.date}
                        </span>
                        <span>{session.duration}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">{session.type}</Badge>
                      <p className="text-sm text-muted-foreground mt-2">
                        {session.enrolled} enrolled
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Reviews */}
        <div className="dashboard-card p-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming Evaluation Cycles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingReviews.map((review) => (
              <div
                key={review.name}
                className="p-4 bg-muted/50 rounded-lg border border-border"
              >
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{review.date}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm">{review.employees} employees</span>
                  <Badge variant="outline">Scheduled</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Performance;
