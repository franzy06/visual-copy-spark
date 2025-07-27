import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, Search, Filter, Eye, Edit, Trash2 } from "lucide-react";

const orders = [
  {
    id: "#ORD-7895",
    customer: "Sarah Johnson",
    email: "sarah.j@email.com",
    date: "Jul 25, 2023",
    amount: "$125.00",
    status: "Delivered",
    statusColor: "bg-success text-success-foreground",
    items: 3,
    payment: "Paid"
  },
  {
    id: "#ORD-7894",
    customer: "Michael Brown",
    email: "mike.brown@email.com",
    date: "Jul 24, 2023",
    amount: "$89.50",
    status: "Processing",
    statusColor: "bg-info text-info-foreground",
    items: 2,
    payment: "Paid"
  },
  {
    id: "#ORD-7893",
    customer: "Emily Wilson",
    email: "emily.w@email.com",
    date: "Jul 24, 2023",
    amount: "$245.99",
    status: "Processing",
    statusColor: "bg-info text-info-foreground",
    items: 5,
    payment: "Paid"
  },
  {
    id: "#ORD-7892",
    customer: "David Clark",
    email: "d.clark@email.com",
    date: "Jul 23, 2023",
    amount: "$32.50",
    status: "Delivered",
    statusColor: "bg-success text-success-foreground",
    items: 1,
    payment: "Paid"
  },
  {
    id: "#ORD-7891",
    customer: "Jennifer Lee",
    email: "jen.lee@email.com",
    date: "Jul 23, 2023",
    amount: "$178.25",
    status: "Pending",
    statusColor: "bg-warning text-warning-foreground",
    items: 4,
    payment: "Pending"
  },
  {
    id: "#ORD-7890",
    customer: "Robert Wilson",
    email: "robert.w@email.com",
    date: "Jul 22, 2023",
    amount: "$67.80",
    status: "Shipped",
    statusColor: "bg-primary text-primary-foreground",
    items: 2,
    payment: "Paid"
  },
  {
    id: "#ORD-7889",
    customer: "Lisa Anderson",
    email: "lisa.a@email.com",
    date: "Jul 22, 2023",
    amount: "$156.40",
    status: "Cancelled",
    statusColor: "bg-destructive text-destructive-foreground",
    items: 3,
    payment: "Refunded"
  },
  {
    id: "#ORD-7888",
    customer: "John Martinez",
    email: "j.martinez@email.com",
    date: "Jul 21, 2023",
    amount: "$94.25",
    status: "Processing",
    statusColor: "bg-info text-info-foreground",
    items: 2,
    payment: "Paid"
  }
];

const Orders = () => {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Orders</h1>
            <p className="text-muted-foreground">Manage and track all your customer orders.</p>
          </div>

          {/* Order Stats */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                    <p className="text-2xl font-bold">1,247</p>
                    <p className="text-sm text-success">+8.2% from last month</p>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Pending Orders</p>
                    <p className="text-2xl font-bold">23</p>
                    <p className="text-sm text-warning">Requires attention</p>
                  </div>
                  <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-warning-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Processing</p>
                    <p className="text-2xl font-bold">15</p>
                    <p className="text-sm text-info">Being prepared</p>
                  </div>
                  <div className="w-12 h-12 bg-info rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-info-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Delivered</p>
                    <p className="text-2xl font-bold">1,156</p>
                    <p className="text-sm text-success">92.7% completion rate</p>
                  </div>
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-success-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Orders Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>All Orders</CardTitle>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search orders..."
                      className="pl-10 w-64"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="delivered">Delivered</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">ORDER ID</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">CUSTOMER</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">DATE</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">AMOUNT</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">ITEMS</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">PAYMENT</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">STATUS</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <span className="font-medium text-primary">{order.id}</span>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium">{order.customer}</p>
                            <p className="text-sm text-muted-foreground">{order.email}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">{order.date}</td>
                        <td className="py-3 px-4 font-medium">{order.amount}</td>
                        <td className="py-3 px-4">{order.items}</td>
                        <td className="py-3 px-4">
                          <Badge variant={order.payment === 'Paid' ? 'default' : order.payment === 'Pending' ? 'secondary' : 'outline'}>
                            {order.payment}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge className={order.statusColor}>
                            {order.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Orders;