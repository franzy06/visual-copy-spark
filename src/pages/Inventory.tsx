import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Package, TrendingDown, TrendingUp, Plus, Download } from "lucide-react";

const inventoryItems = [
  {
    id: "INV-001",
    product: "Wireless Headphones",
    sku: "WH-001",
    currentStock: 45,
    minStock: 20,
    maxStock: 100,
    reorderPoint: 25,
    location: "Warehouse A",
    supplier: "TechCorp",
    lastUpdated: "2 hours ago",
    status: "Normal"
  },
  {
    id: "INV-002", 
    product: "Smart Watch",
    sku: "SW-002",
    currentStock: 12,
    minStock: 15,
    maxStock: 80,
    reorderPoint: 20,
    location: "Warehouse B",
    supplier: "GadgetPlus",
    lastUpdated: "1 hour ago",
    status: "Low Stock"
  },
  {
    id: "INV-003",
    product: "Laptop Stand",
    sku: "LS-003",
    currentStock: 0,
    minStock: 10,
    maxStock: 50,
    reorderPoint: 15,
    location: "Warehouse A",
    supplier: "OfficeSupply",
    lastUpdated: "30 minutes ago",
    status: "Out of Stock"
  },
  {
    id: "INV-004",
    product: "Phone Charger",
    sku: "PC-004",
    currentStock: 89,
    minStock: 30,
    maxStock: 150,
    reorderPoint: 40,
    location: "Warehouse C",
    supplier: "TechCorp",
    lastUpdated: "3 hours ago",
    status: "Normal"
  },
  {
    id: "INV-005",
    product: "Bluetooth Speaker",
    sku: "BS-005",
    currentStock: 8,
    minStock: 12,
    maxStock: 60,
    reorderPoint: 18,
    location: "Warehouse B",
    supplier: "AudioTech",
    lastUpdated: "45 minutes ago",
    status: "Critical"
  }
];

const stockMovements = [
  { type: "In", product: "Wireless Headphones", quantity: "+25", date: "Today, 2:30 PM", reason: "Purchase Order" },
  { type: "Out", product: "Phone Charger", quantity: "-15", date: "Today, 1:45 PM", reason: "Sale" },
  { type: "In", product: "Smart Watch", quantity: "+10", date: "Today, 11:20 AM", reason: "Return" },
  { type: "Out", product: "Laptop Stand", quantity: "-8", date: "Yesterday, 4:15 PM", reason: "Sale" },
  { type: "In", product: "Bluetooth Speaker", quantity: "+30", date: "Yesterday, 10:00 AM", reason: "Purchase Order" }
];

const Inventory = () => {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Inventory</h1>
            <p className="text-muted-foreground">Track and manage your stock levels across all locations.</p>
          </div>

          {/* Inventory Stats */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Items</p>
                    <p className="text-2xl font-bold">1,247</p>
                    <p className="text-sm text-success">Across 3 warehouses</p>
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
                    <p className="text-sm font-medium text-muted-foreground">Low Stock Items</p>
                    <p className="text-2xl font-bold">23</p>
                    <p className="text-sm text-warning">Requires attention</p>
                  </div>
                  <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-warning-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Out of Stock</p>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-sm text-destructive">Immediate action needed</p>
                  </div>
                  <div className="w-12 h-12 bg-destructive rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-destructive-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Value</p>
                    <p className="text-2xl font-bold">$284K</p>
                    <p className="text-sm text-info">Current inventory value</p>
                  </div>
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-success-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Inventory Table */}
            <Card className="col-span-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Inventory Levels</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Item
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inventoryItems.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-muted/50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div>
                            <p className="font-medium">{item.product}</p>
                            <p className="text-sm text-muted-foreground">SKU: {item.sku} • {item.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Current Stock</p>
                            <p className="font-bold text-lg">{item.currentStock}</p>
                          </div>
                          <Badge variant={
                            item.status === "Normal" ? "default" :
                            item.status === "Low Stock" ? "secondary" :
                            item.status === "Critical" ? "destructive" :
                            "destructive"
                          }>
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Stock Level</span>
                          <span>{item.currentStock} / {item.maxStock}</span>
                        </div>
                        <Progress 
                          value={(item.currentStock / item.maxStock) * 100} 
                          className="h-2"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Min: {item.minStock}</span>
                          <span>Reorder: {item.reorderPoint}</span>
                          <span>Max: {item.maxStock}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stock Movements */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Stock Movements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {stockMovements.map((movement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                        movement.type === 'In' ? 'bg-success text-success-foreground' : 'bg-info text-info-foreground'
                      }`}>
                        {movement.type === 'In' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{movement.product}</p>
                        <p className="text-sm text-muted-foreground">{movement.reason}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className={`text-sm font-medium ${
                            movement.type === 'In' ? 'text-success' : 'text-info'
                          }`}>
                            {movement.quantity}
                          </span>
                          <span className="text-xs text-muted-foreground">{movement.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Inventory;