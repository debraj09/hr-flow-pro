import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const holidays = [
  { id: 1, name: "Christmas Day", date: "Dec 25", type: "Public Holiday" },
  { id: 2, name: "Boxing Day", date: "Dec 26", type: "Public Holiday" },
  { id: 3, name: "New Year's Eve", date: "Dec 31", type: "Company Holiday" },
  { id: 4, name: "New Year's Day", date: "Jan 1", type: "Public Holiday" },
];

export const HolidaysList = () => {
  return (
    <div className="dashboard-card">
      <div className="p-6 border-b border-border flex items-center gap-2">
        <Calendar className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Upcoming Holidays</h3>
      </div>
      <div className="divide-y divide-border">
        {holidays.map((holiday) => (
          <div
            key={holiday.id}
            className="p-4 flex items-center justify-between gap-4 table-row-hover"
          >
            <div>
              <p className="font-medium">{holiday.name}</p>
              <p className="text-sm text-muted-foreground">{holiday.date}</p>
            </div>
            <Badge variant="outline" className="text-xs">
              {holiday.type}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};
