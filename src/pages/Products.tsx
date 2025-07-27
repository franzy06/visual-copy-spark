import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, Search, Plus, Eye, Edit, Trash2, Star } from "lucide-react";

const products = [
  {
    id: "PRD-001",
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: "$89.99",
    stock: 45,
    sold: 234,
    rating: 4.8,
    status: "Active",
    image: "🎧"
  },
  {
    id: "PRD-002",
    name: "Smart Fitness Watch",
    category: "Wearables",
    price: "$199.99",
    stock: 23,
    sold: 156,
    rating: 4.6,
    status: "Active",
    image: "⌚"
  },
  {
    id: "PRD-003",
    name: "Ergonomic Laptop Stand",
    category: "Accessories",
    price: "$49.99",
    stock: 67,
    sold: 189,
    rating: 4.9,
    status: "Active",
    image: "💻"
  },
  {
    id: "PRD-004",
    name: "Wireless Phone Charger",
    category: "Electronics",
    price: "$29.99",
    stock: 12,
    sold: 298,
    rating: 4.4,
    status: "Low Stock",
    image: "🔌"
  },
  {
    id: "PRD-005",
    name: "Premium Phone Case",
    category: "Accessories",
    price: "$24.99",
    stock: 0,
    sold: 445,
    rating: 4.7,
    status: "Out of Stock",
    image: "📱"
  },
  {
    id: "PRD-006",
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: "$79.99",
    stock: 34,
    sold: 167,
    rating: 4.5,
    status: "Active",
    image: "🔊"
  },
  {
    id: "PRD-007",
    name: "Gaming Mouse Pad",
    category: "Gaming",
    price: "$19.99",
    stock: 89,
    sold: 123,
    rating: 4.3,
    status: "Active",
    image: "🖱️"
  },
  {
    id: "PRD-008",
    name: "USB-C Hub",
    category: "Accessories",
    price: "$39.99",
    stock: 56,
    sold: 201,
    rating: 4.6,
    status: "Active",
    image: "🔌"
  }
];

const Products = () => {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Products</h1>
            <p className="text-muted-foreground">Manage your product catalog and inventory.</p>
          </div>

          {/* Product Stats */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Products</p>
                    <p className="text-2xl font-bold">1,247</p>
                    <p className="text-sm text-success">+12 new this month</p>
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
                    <p className="text-sm font-medium text-muted-foreground">Active Products</p>
                    <p className="text-2xl font-bold">1,156</p>
                    <p className="text-sm text-info">92.7% of total</p>
                  </div>
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-success-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Low Stock</p>
                    <p className="text-2xl font-bold">23</p>
                    <p className="text-sm text-warning">Needs attention</p>
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
                    <p className="text-sm font-medium text-muted-foreground">Out of Stock</p>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-sm text-destructive">Requires restock</p>
                  </div>
                  <div className="w-12 h-12 bg-destructive rounded-lg flex items-center justify-center">
                    <Package className="w-6 h-6 text-destructive-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Product Catalog</CardTitle>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search products..."
                      className="pl-10 w-64"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="wearables">Wearables</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="gaming">Gaming</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Product
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">PRODUCT</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">CATEGORY</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">PRICE</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">STOCK</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">SOLD</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">RATING</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">STATUS</th>
                      <th className="text-left py-3 px-4 font-medium text-muted-foreground">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-lg">
                              {product.image}
                            </div>
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-sm text-muted-foreground">{product.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">{product.category}</td>
                        <td className="py-3 px-4 font-medium">{product.price}</td>
                        <td className="py-3 px-4">
                          <span className={
                            product.stock === 0 ? "text-destructive" : 
                            product.stock < 20 ? "text-warning" : 
                            "text-success"
                          }>
                            {product.stock}
                          </span>
                        </td>
                        <td className="py-3 px-4">{product.sold}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{product.rating}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant={
                            product.status === "Active" ? "default" :
                            product.status === "Low Stock" ? "secondary" :
                            "destructive"
                          }>
                            {product.status}
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

export default Products;