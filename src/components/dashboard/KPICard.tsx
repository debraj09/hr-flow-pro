import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "destructive" | "info";
  className?: string;
}

export const KPICard = ({
  title,
  value,
  change,
  icon: Icon,
  variant = "default",
  className,
}: KPICardProps) => {
  const variantClasses = {
    default: "kpi-card",
    success: "kpi-card kpi-card-success",
    warning: "kpi-card kpi-card-warning",
    destructive: "kpi-card kpi-card-destructive",
    info: "kpi-card kpi-card-info",
  };

  const iconBgClasses = {
    default: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    destructive: "bg-destructive/10 text-destructive",
    info: "bg-info/10 text-info",
  };

  return (
    <div className={cn(variantClasses[variant], "animate-fade-in", className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {change && (
            <div className="flex items-center gap-1">
              <span
                className={cn(
                  "stat-badge",
                  change.type === "increase" ? "stat-badge-success" : "stat-badge-destructive"
                )}
              >
                {change.type === "increase" ? "↑" : "↓"} {Math.abs(change.value)}%
              </span>
              <span className="text-xs text-muted-foreground">vs last month</span>
            </div>
          )}
        </div>
        <div className={cn("p-3 rounded-xl", iconBgClasses[variant])}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
