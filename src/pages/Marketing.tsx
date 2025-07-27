import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Megaphone, Mail, Users, TrendingUp, Eye, MousePointer, Target, Calendar } from "lucide-react";

const campaignData = [
  { month: 'Jan', emailCampaigns: 12, socialMedia: 8, ppc: 5 },
  { month: 'Feb', emailCampaigns: 15, socialMedia: 12, ppc: 7 },
  { month: 'Mar', emailCampaigns: 18, socialMedia: 15, ppc: 9 },
  { month: 'Apr', emailCampaigns: 22, socialMedia: 18, ppc: 12 },
  { month: 'May', emailCampaigns: 25, socialMedia: 22, ppc: 15 },
  { month: 'Jun', emailCampaigns: 28, socialMedia: 25, ppc: 18 },
];

const channelPerformance = [
  { name: 'Email Marketing', value: 35, color: 'hsl(var(--chart-1))' },
  { name: 'Social Media', value: 30, color: 'hsl(var(--chart-2))' },
  { name: 'PPC Advertising', value: 20, color: 'hsl(var(--chart-3))' },
  { name: 'SEO', value: 15, color: 'hsl(var(--chart-4))' },
];

const campaigns = [
  {
    name: "Summer Sale 2023",
    type: "Email",
    status: "Active",
    startDate: "Jul 1, 2023",
    endDate: "Jul 31, 2023",
    budget: "$2,500",
    spent: "$1,847",
    impressions: "45,230",
    clicks: "2,156",
    conversions: "124",
    roi: "+245%"
  },
  {
    name: "Back to School",
    type: "Social Media",
    status: "Active",
    startDate: "Aug 1, 2023",
    endDate: "Aug 30, 2023",
    budget: "$3,000",
    spent: "$987",
    impressions: "67,890",
    clicks: "3,245",
    conversions: "189",
    roi: "+312%"
  },
  {
    name: "Product Launch",
    type: "PPC",
    status: "Completed",
    startDate: "Jun 15, 2023",
    endDate: "Jun 30, 2023",
    budget: "$1,500",
    spent: "$1,498",
    impressions: "23,450",
    clicks: "1,234",
    conversions: "67",
    roi: "+156%"
  },
  {
    name: "Holiday Preview",
    type: "Email",
    status: "Scheduled",
    startDate: "Sep 1, 2023",
    endDate: "Sep 15, 2023",
    budget: "$1,800",
    spent: "$0",
    impressions: "0",
    clicks: "0",
    conversions: "0",
    roi: "TBD"
  }
];

const Marketing = () => {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Marketing</h1>
            <p className="text-muted-foreground">Manage your marketing campaigns and analyze performance metrics.</p>
          </div>

          {/* Marketing Stats */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Campaigns</p>
                    <p className="text-2xl font-bold">47</p>
                    <p className="text-sm text-success">+8 this month</p>
                  </div>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Megaphone className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Impressions</p>
                    <p className="text-2xl font-bold">245K</p>
                    <p className="text-sm text-info">+12.5% growth</p>
                  </div>
                  <div className="w-12 h-12 bg-info rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-info-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Click-through Rate</p>
                    <p className="text-2xl font-bold">4.8%</p>
                    <p className="text-sm text-success">+0.8% improvement</p>
                  </div>
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                    <MousePointer className="w-6 h-6 text-success-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Average ROI</p>
                    <p className="text-2xl font-bold">238%</p>
                    <p className="text-sm text-warning">Above industry avg</p>
                  </div>
                  <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-warning-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-12 gap-6 mb-6">
            {/* Campaign Performance Chart */}
            <Card className="col-span-8">
              <CardHeader>
                <CardTitle>Campaign Performance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={campaignData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Line type="monotone" dataKey="emailCampaigns" stroke="hsl(var(--chart-1))" strokeWidth={2} />
                      <Line type="monotone" dataKey="socialMedia" stroke="hsl(var(--chart-2))" strokeWidth={2} />
                      <Line type="monotone" dataKey="ppc" stroke="hsl(var(--chart-3))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-center space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-chart-1"></div>
                    <span className="text-sm text-muted-foreground">Email Campaigns</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-chart-2"></div>
                    <span className="text-sm text-muted-foreground">Social Media</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-chart-3"></div>
                    <span className="text-sm text-muted-foreground">PPC Advertising</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Channel Performance */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Channel Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={channelPerformance}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {channelPerformance.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2">
                  {channelPerformance.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm text-muted-foreground">{item.name}</span>
                      </div>
                      <span className="text-sm font-medium">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Active Campaigns */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Active Campaigns</CardTitle>
                <Button>
                  <Calendar className="w-4 h-4 mr-2" />
                  Create Campaign
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaigns.map((campaign, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-muted/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium">{campaign.name}</h3>
                            <Badge variant={campaign.type === "Email" ? "default" : campaign.type === "Social Media" ? "secondary" : "outline"}>
                              {campaign.type}
                            </Badge>
                            <Badge variant={
                              campaign.status === "Active" ? "default" :
                              campaign.status === "Completed" ? "secondary" :
                              "outline"
                            }>
                              {campaign.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {campaign.startDate} - {campaign.endDate}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-6">
                          <div>
                            <p className="text-sm text-muted-foreground">Budget</p>
                            <p className="font-medium">{campaign.budget}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Spent</p>
                            <p className="font-medium">{campaign.spent}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">ROI</p>
                            <p className="font-medium text-success">{campaign.roi}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Impressions</p>
                        <p className="font-bold">{campaign.impressions}</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Clicks</p>
                        <p className="font-bold">{campaign.clicks}</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Conversions</p>
                        <p className="font-bold">{campaign.conversions}</p>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm text-muted-foreground">Budget Used</p>
                        <Progress 
                          value={campaign.status !== "Scheduled" ? (parseInt(campaign.spent.replace(/[$,]/g, '')) / parseInt(campaign.budget.replace(/[$,]/g, ''))) * 100 : 0}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Marketing;