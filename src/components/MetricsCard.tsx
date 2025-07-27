import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  iconBg: string;
}

export function MetricsCard({ title, value, change, isPositive, icon, iconBg }: MetricsCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
            <div className="flex items-center mt-2">
              {isPositive ? (
                <TrendingUp className="w-4 h-4 text-success mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 text-destructive mr-1" />
              )}
              <span className={cn(
                "text-sm font-medium",
                isPositive ? "text-success" : "text-destructive"
              )}>
                {change} vs last month
              </span>
            </div>
          </div>
          <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", iconBg)}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}