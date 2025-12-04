import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const candidates = [
  {
    id: 1,
    name: "Chris Anderson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    position: "Senior Frontend Developer",
    stage: "Interview",
    stageColor: "bg-info",
  },
  {
    id: 2,
    name: "Rachel Green",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    position: "Product Designer",
    stage: "Technical Round",
    stageColor: "bg-warning",
  },
  {
    id: 3,
    name: "Daniel Kim",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
    position: "DevOps Engineer",
    stage: "HR Round",
    stageColor: "bg-chart-4",
  },
  {
    id: 4,
    name: "Emily Chen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    position: "Data Analyst",
    stage: "Offer",
    stageColor: "bg-success",
  },
];

export const RecruitmentPipeline = () => {
  return (
    <div className="dashboard-card">
      <div className="p-6 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Recruitment Pipeline</h3>
        </div>
        <Badge>{candidates.length} active</Badge>
      </div>
      <div className="divide-y divide-border">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="p-4 flex items-center justify-between gap-4 table-row-hover"
          >
            <div className="flex items-center gap-3 min-w-0">
              <Avatar className="w-10 h-10 flex-shrink-0">
                <AvatarImage src={candidate.avatar} />
                <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="font-medium truncate">{candidate.name}</p>
                <p className="text-sm text-muted-foreground truncate">
                  {candidate.position}
                </p>
              </div>
            </div>
            <Badge className={`${candidate.stageColor} text-white`}>
              {candidate.stage}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};
