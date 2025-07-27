import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricsCard } from "@/components/MetricsCard";
import { SalesTrendsChart } from "@/components/SalesTrendsChart";
import { CustomerDemographics } from "@/components/CustomerDemographics";
import { RecentOrders } from "@/components/RecentOrders";
import { NotificationsPanel } from "@/components/NotificationsPanel";
import { DollarSign, TrendingUp, Package, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, John! Here's what's happening with your store today.</p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-12 gap-6">
            {/* Metrics Cards */}
            <div className="col-span-9">
              <div className="grid grid-cols-4 gap-6 mb-6">
                <MetricsCard
                  title="Total Sales"
                  value="$24,299"
                  change="12.5%"
                  isPositive={true}
                  icon={<DollarSign className="w-6 h-6 text-primary-foreground" />}
                  iconBg="bg-primary"
                />
                <MetricsCard
                  title="Monthly Revenue"
                  value="$8,350"
                  change="8.2%"
                  isPositive={true}
                  icon={<TrendingUp className="w-6 h-6 text-success-foreground" />}
                  iconBg="bg-success"
                />
                <MetricsCard
                  title="Total Orders"
                  value="1,286"
                  change="3.1%"
                  isPositive={true}
                  icon={<Package className="w-6 h-6 text-info-foreground" />}
                  iconBg="bg-info"
                />
                <MetricsCard
                  title="Active Users"
                  value="5,347"
                  change="18.7%"
                  isPositive={true}
                  icon={<Users className="w-6 h-6 text-warning-foreground" />}
                  iconBg="bg-warning"
                />
              </div>

              {/* Charts and Recent Orders */}
              <div className="grid grid-cols-3 gap-6 mb-6">
                <SalesTrendsChart />
                <CustomerDemographics />
              </div>

              <div className="grid grid-cols-3 gap-6">
                <RecentOrders />
              </div>
            </div>

            {/* Notifications Panel */}
            <div className="col-span-3">
              <NotificationsPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;