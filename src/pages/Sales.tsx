import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, DollarSign, Target, Users } from "lucide-react";

const salesData = [
  { month: 'Jan', sales: 4000, target: 4500 },
  { month: 'Feb', sales: 3000, target: 4500 },
  { month: 'Mar', sales: 5000, target: 4500 },
  { month: 'Apr', sales: 4500, target: 4500 },
  { month: 'May', sales: 6000, target: 5000 },
  { month: 'Jun', sales: 5500, target: 5000 },
];

const topProducts = [
  { name: "Wireless Headphones", sales: "$12,450", units: 245, change: "+15%" },
  { name: "Smart Watch", sales: "$8,200", units: 164, change: "+8%" },
  { name: "Laptop Stand", sales: "$6,750", units: 135, change: "+22%" },
  { name: "Phone Case", sales: "$4,300", units: 215, change: "-5%" },
  { name: "Bluetooth Speaker", sales: "$3,900", units: 78, change: "+12%" },
];

const salesTeam = [
  { name: "Sarah Johnson", sales: "$45,200", deals: 23, avatar: "SJ" },
  { name: "Mike Chen", sales: "$38,900", deals: 19, avatar: "MC" },
  { name: "Emily Davis", sales: "$32,100", deals: 16, avatar: "ED" },
  { name: "David Wilson", sales: "$28,700", deals: 14, avatar: "DW" },
];

const Sales = () => {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Sales</h1>
            <p className="text-muted-foreground">Monitor your sales performance and track revenue growth.</p>
          </div>

          {/* Sales Metrics */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold">$124,500</p>
                    <p className="text-sm text-success">+12.5% from last month</p>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Sales Target</p>
                    <p className="text-2xl font-bold">$150,000</p>
                    <p className="text-sm text-info">83% completed</p>
                  </div>
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-success-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                    <p className="text-2xl font-bold">3.2%</p>
                    <p className="text-sm text-success">+0.8% improvement</p>
                  </div>
                  <div className="w-12 h-12 bg-info rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-info-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Leads</p>
                    <p className="text-2xl font-bold">142</p>
                    <p className="text-sm text-warning">+23 this week</p>
                  </div>
                  <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-warning-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Sales vs Target Chart */}
            <Card className="col-span-8">
              <CardHeader>
                <CardTitle>Sales vs Target</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Bar dataKey="sales" fill="hsl(var(--primary))" radius={4} />
                      <Bar dataKey="target" fill="hsl(var(--muted))" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Top Products */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.units} units sold</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{product.sales}</p>
                        <Badge variant={product.change.startsWith('+') ? 'default' : 'destructive'} className="text-xs">
                          {product.change}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sales Team Performance */}
            <Card className="col-span-6">
              <CardHeader>
                <CardTitle>Sales Team Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {salesTeam.map((member, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-sm font-medium text-primary-foreground">{member.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{member.name}</p>
                        <p className="text-xs text-muted-foreground">{member.deals} deals closed</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{member.sales}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="col-span-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-20 flex flex-col space-y-2">
                    <DollarSign className="w-6 h-6" />
                    <span>New Sale</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <Users className="w-6 h-6" />
                    <span>Add Lead</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <Target className="w-6 h-6" />
                    <span>Set Target</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col space-y-2">
                    <TrendingUp className="w-6 h-6" />
                    <span>View Reports</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sales;