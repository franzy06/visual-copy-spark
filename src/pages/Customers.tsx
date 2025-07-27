import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Search, Plus, Mail, Phone, Star, MapPin } from "lucide-react";

const customers = [
  {
    id: "CUST-001",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    totalOrders: 12,
    totalSpent: "$1,245.50",
    lastOrder: "Jul 25, 2023",
    status: "VIP",
    avatar: "SJ",
    rating: 4.9
  },
  {
    id: "CUST-002",
    name: "Michael Brown",
    email: "mike.brown@email.com",
    phone: "+1 (555) 234-5678",
    location: "Los Angeles, CA",
    totalOrders: 8,
    totalSpent: "$789.30",
    lastOrder: "Jul 24, 2023",
    status: "Regular",
    avatar: "MB",
    rating: 4.6
  },
  {
    id: "CUST-003",
    name: "Emily Wilson",
    email: "emily.wilson@email.com",
    phone: "+1 (555) 345-6789",
    location: "Chicago, IL",
    totalOrders: 15,
    totalSpent: "$2,156.75",
    lastOrder: "Jul 24, 2023",
    status: "VIP",
    avatar: "EW",
    rating: 4.8
  },
  {
    id: "CUST-004",
    name: "David Clark",
    email: "david.clark@email.com",
    phone: "+1 (555) 456-7890",
    location: "Houston, TX",
    totalOrders: 3,
    totalSpent: "$234.60",
    lastOrder: "Jul 23, 2023",
    status: "New",
    avatar: "DC",
    rating: 4.4
  },
  {
    id: "CUST-005",
    name: "Jennifer Lee",
    email: "jennifer.lee@email.com",
    phone: "+1 (555) 567-8901",
    location: "Phoenix, AZ",
    totalOrders: 6,
    totalSpent: "$567.89",
    lastOrder: "Jul 23, 2023",
    status: "Regular",
    avatar: "JL",
    rating: 4.7
  },
  {
    id: "CUST-006",
    name: "Robert Wilson",
    email: "robert.wilson@email.com",
    phone: "+1 (555) 678-9012",
    location: "Philadelphia, PA",
    totalOrders: 1,
    totalSpent: "$89.99",
    lastOrder: "Jul 22, 2023",
    status: "New",
    avatar: "RW",
    rating: 4.2
  }
];

const customerSegments = [
  { name: "VIP Customers", count: 45, percentage: 15, color: "bg-chart-1" },
  { name: "Regular Customers", count: 189, percentage: 63, color: "bg-chart-2" },
  { name: "New Customers", count: 66, percentage: 22, color: "bg-chart-3" }
];

const Customers = () => {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Customers</h1>
            <p className="text-muted-foreground">Manage your customer relationships and view detailed insights.</p>
          </div>

          {/* Customer Stats */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Customers</p>
                    <p className="text-2xl font-bold">2,847</p>
                    <p className="text-sm text-success">+12.5% this month</p>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">VIP Customers</p>
                    <p className="text-2xl font-bold">245</p>
                    <p className="text-sm text-warning">8.6% of total</p>
                  </div>
                  <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-warning-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">New This Month</p>
                    <p className="text-2xl font-bold">156</p>
                    <p className="text-sm text-info">5.5% growth rate</p>
                  </div>
                  <div className="w-12 h-12 bg-info rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-info-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Avg. Order Value</p>
                    <p className="text-2xl font-bold">$156.30</p>
                    <p className="text-sm text-success">+8.2% increase</p>
                  </div>
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-success-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Customer Table */}
            <Card className="col-span-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Customer Directory</CardTitle>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search customers..."
                        className="pl-10 w-64"
                      />
                    </div>
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="vip">VIP</SelectItem>
                        <SelectItem value="regular">Regular</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Customer
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customers.map((customer, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-muted/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-sm font-medium text-primary-foreground">{customer.avatar}</span>
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="font-medium">{customer.name}</h3>
                              <Badge variant={
                                customer.status === "VIP" ? "default" :
                                customer.status === "Regular" ? "secondary" :
                                "outline"
                              }>
                                {customer.status}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Mail className="w-4 h-4" />
                                <span>{customer.email}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Phone className="w-4 h-4" />
                                <span>{customer.phone}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{customer.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-6">
                            <div>
                              <p className="text-sm text-muted-foreground">Total Orders</p>
                              <p className="font-medium">{customer.totalOrders}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Total Spent</p>
                              <p className="font-medium">{customer.totalSpent}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Last Order</p>
                              <p className="font-medium">{customer.lastOrder}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Rating</p>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium">{customer.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Customer Segments */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Customer Segments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customerSegments.map((segment, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{segment.name}</span>
                        <span className="text-sm text-muted-foreground">{segment.count}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${segment.color}`}
                          style={{ width: `${segment.percentage}%` }}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">{segment.percentage}% of total customers</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-medium mb-3">Quick Actions</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Newsletter
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Star className="w-4 h-4 mr-2" />
                      Loyalty Program
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      Customer Survey
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Customers;