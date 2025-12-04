import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const recentJoinees = [
  {
    id: 1,
    name: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
    role: "Senior Developer",
    department: "Engineering",
    joinDate: "Dec 1, 2024",
    status: "onboarding",
  },
  {
    id: 2,
    name: "Jessica Martinez",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    role: "UX Designer",
    department: "Design",
    joinDate: "Dec 2, 2024",
    status: "active",
  },
  {
    id: 3,
    name: "Ryan Park",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    role: "Sales Executive",
    department: "Sales",
    joinDate: "Dec 3, 2024",
    status: "onboarding",
  },
  {
    id: 4,
    name: "Amanda Liu",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    role: "Product Manager",
    department: "Product",
    joinDate: "Dec 4, 2024",
    status: "active",
  },
];

export const RecentJoineesTable = () => {
  return (
    <div className="dashboard-card">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold">New Joinees This Month</h3>
      </div>
      <div className="divide-y divide-border">
        {recentJoinees.map((joinee) => (
          <div
            key={joinee.id}
            className="p-4 flex items-center justify-between gap-4 table-row-hover"
          >
            <div className="flex items-center gap-3 min-w-0">
              <Avatar className="w-10 h-10 flex-shrink-0">
                <AvatarImage src={joinee.avatar} />
                <AvatarFallback>{joinee.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="font-medium truncate">{joinee.name}</p>
                <p className="text-sm text-muted-foreground truncate">{joinee.role}</p>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-sm">{joinee.department}</p>
              <p className="text-xs text-muted-foreground">{joinee.joinDate}</p>
            </div>
            <Badge
              variant={joinee.status === "active" ? "default" : "secondary"}
              className={joinee.status === "active" ? "bg-success hover:bg-success/90" : ""}
            >
              {joinee.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};
