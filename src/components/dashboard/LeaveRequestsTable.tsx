import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const leaveRequests = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    department: "Engineering",
    type: "Annual Leave",
    dates: "Dec 20 - Dec 25",
    days: 5,
    status: "pending",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    department: "Marketing",
    type: "Sick Leave",
    dates: "Dec 18 - Dec 19",
    days: 2,
    status: "pending",
  },
  {
    id: 3,
    name: "Emily Davis",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    department: "Sales",
    type: "Personal Leave",
    dates: "Dec 22",
    days: 1,
    status: "pending",
  },
  {
    id: 4,
    name: "David Wilson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    department: "Finance",
    type: "Annual Leave",
    dates: "Dec 26 - Dec 30",
    days: 4,
    status: "pending",
  },
];

export const LeaveRequestsTable = () => {
  return (
    <div className="dashboard-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Pending Leave Requests</h3>
          <Badge variant="secondary">{leaveRequests.length} pending</Badge>
        </div>
      </div>
      <div className="divide-y divide-border">
        {leaveRequests.map((request) => (
          <div
            key={request.id}
            className="p-4 flex items-center justify-between gap-4 table-row-hover"
          >
            <div className="flex items-center gap-3 min-w-0">
              <Avatar className="w-10 h-10 flex-shrink-0">
                <AvatarImage src={request.avatar} />
                <AvatarFallback>{request.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="font-medium truncate">{request.name}</p>
                <p className="text-sm text-muted-foreground truncate">
                  {request.department}
                </p>
              </div>
            </div>
            <div className="hidden md:block text-center">
              <p className="text-sm font-medium">{request.type}</p>
              <p className="text-xs text-muted-foreground">{request.dates}</p>
            </div>
            <div className="hidden sm:block text-center">
              <Badge variant="outline">{request.days} days</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-success hover:text-success hover:bg-success/10">
                <Check className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-border">
        <Button variant="ghost" className="w-full text-sm text-primary">
          View All Requests
        </Button>
      </div>
    </div>
  );
};
