import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const orders = [
  {
    id: "#ORD-7895",
    customer: "Sarah Johnson",
    date: "Jul 25, 2023",
    amount: "$125.00",
    status: "Delivered",
    statusColor: "bg-success text-success-foreground"
  },
  {
    id: "#ORD-7894",
    customer: "Michael Brown",
    date: "Jul 24, 2023",
    amount: "$89.50",
    status: "Processing",
    statusColor: "bg-info text-info-foreground"
  },
  {
    id: "#ORD-7893",
    customer: "Emily Wilson",
    date: "Jul 24, 2023",
    amount: "$245.99",
    status: "Processing",
    statusColor: "bg-info text-info-foreground"
  },
  {
    id: "#ORD-7892",
    customer: "David Clark",
    date: "Jul 23, 2023",
    amount: "$32.50",
    status: "Delivered",
    statusColor: "bg-success text-success-foreground"
  },
  {
    id: "#ORD-7891",
    customer: "Jennifer Lee",
    date: "Jul 23, 2023",
    amount: "$178.25",
    status: "Pending",
    statusColor: "bg-warning text-warning-foreground"
  },
];

export function RecentOrders() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Orders</CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
            <div>ORDER ID</div>
            <div>CUSTOMER</div>
            <div>DATE</div>
            <div>AMOUNT</div>
            <div>STATUS</div>
          </div>
          
          {/* Table Rows */}
          {orders.map((order, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 text-sm py-2">
              <div className="font-medium text-primary">{order.id}</div>
              <div>{order.customer}</div>
              <div className="text-muted-foreground">{order.date}</div>
              <div className="font-medium">{order.amount}</div>
              <div>
                <Badge className={order.statusColor}>
                  {order.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}