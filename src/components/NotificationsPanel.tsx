import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertTriangle, CheckCircle, User } from "lucide-react";

const notifications = [
  {
    type: "order",
    icon: Bell,
    iconBg: "bg-primary",
    iconColor: "text-primary-foreground",
    title: "New order received",
    description: "Order #ORD-7896 from Alex Thompson",
    time: "2 minutes ago",
    badge: null
  },
  {
    type: "alert",
    icon: AlertTriangle,
    iconBg: "bg-warning",
    iconColor: "text-warning-foreground",
    title: "Low stock alert",
    description: 'Product "Wireless Earbuds" is running low',
    time: "1 hour ago",
    badge: null
  },
  {
    type: "payment",
    icon: CheckCircle,
    iconBg: "bg-success",
    iconColor: "text-success-foreground",
    title: "Payment received",
    description: "$178.25 payment for order #ORD-7891",
    time: "2 hours ago",
    badge: null
  },
  {
    type: "customer",
    icon: User,
    iconBg: "bg-muted",
    iconColor: "text-muted-foreground",
    title: "New customer registered",
    description: "Robert Wilson created an account",
    time: "4 hours ago",
    badge: null
  },
];

export function NotificationsPanel() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Notifications</CardTitle>
          <Button variant="ghost" size="sm">
            Mark all as read
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${notification.iconBg}`}>
                <notification.icon className={`w-4 h-4 ${notification.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{notification.title}</p>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t">
          <Button variant="ghost" size="sm" className="w-full">
            View all notifications
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}