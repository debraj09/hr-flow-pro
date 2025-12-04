import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Cake } from "lucide-react";

const birthdays = [
  {
    id: 1,
    name: "Lisa Wang",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    department: "HR",
    date: "Dec 15",
    daysUntil: 0,
  },
  {
    id: 2,
    name: "James Brown",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    department: "Engineering",
    date: "Dec 17",
    daysUntil: 2,
  },
  {
    id: 3,
    name: "Sophia Lee",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    department: "Marketing",
    date: "Dec 19",
    daysUntil: 4,
  },
  {
    id: 4,
    name: "Marcus Johnson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    department: "Finance",
    date: "Dec 22",
    daysUntil: 7,
  },
];

export const UpcomingBirthdays = () => {
  return (
    <div className="dashboard-card">
      <div className="p-6 border-b border-border flex items-center gap-2">
        <Cake className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Upcoming Birthdays</h3>
      </div>
      <div className="divide-y divide-border">
        {birthdays.map((person) => (
          <div
            key={person.id}
            className="p-4 flex items-center justify-between gap-4 table-row-hover"
          >
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={person.avatar} />
                <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{person.name}</p>
                <p className="text-sm text-muted-foreground">{person.department}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{person.date}</p>
              <p className="text-xs text-muted-foreground">
                {person.daysUntil === 0 ? "Today! 🎉" : `in ${person.daysUntil} days`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
