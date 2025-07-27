import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { name: 'Jan', sales: 2000, revenue: 1800 },
  { name: 'Feb', sales: 2500, revenue: 2200 },
  { name: 'Mar', sales: 2200, revenue: 2000 },
  { name: 'Apr', sales: 2800, revenue: 2600 },
  { name: 'May', sales: 2600, revenue: 2400 },
  { name: 'Jun', sales: 3200, revenue: 2900 },
  { name: 'Jul', sales: 3800, revenue: 3500 },
  { name: 'Aug', sales: 4200, revenue: 3800 },
  { name: 'Sep', sales: 4600, revenue: 4200 },
  { name: 'Oct', sales: 5200, revenue: 4800 },
  { name: 'Nov', sales: 5800, revenue: 5400 },
  { name: 'Dec', sales: 6200, revenue: 5800 },
];

export function SalesTrendsChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Sales Trends</CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Weekly</Button>
            <Button size="sm">Monthly</Button>
            <Button variant="outline" size="sm">Yearly</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="hsl(var(--chart-1))"
                fill="hsl(var(--chart-1))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--chart-2))"
                fill="hsl(var(--chart-2))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-chart-1"></div>
            <span className="text-sm text-muted-foreground">Sales</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-chart-2"></div>
            <span className="text-sm text-muted-foreground">Revenue</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}