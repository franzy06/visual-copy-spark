import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Boxes, 
  Users, 
  Megaphone, 
  BarChart3,
  Settings,
  User,
  Link as LinkIcon
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ShoppingCart, label: "Sales", active: false },
  { icon: Package, label: "Orders", active: false },
  { icon: Boxes, label: "Products", active: false },
  { icon: Boxes, label: "Inventory", active: false },
  { icon: Users, label: "Customers", active: false },
  { icon: Megaphone, label: "Marketing", active: false },
  { icon: BarChart3, label: "Reports", active: false },
];

const settingsItems = [
  { icon: Settings, label: "Store Settings", active: false },
  { icon: User, label: "Account", active: false },
  { icon: LinkIcon, label: "Integrations", active: false },
];

export function DashboardSidebar({ className }: SidebarProps) {
  return (
    <div className={cn("w-64 bg-sidebar border-r border-sidebar-border h-full flex flex-col", className)}>
      {/* Logo */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">EcomDash</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  item.active
                    ? "bg-primary text-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Settings Section */}
        <div className="mt-8">
          <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Settings
          </p>
          <ul className="space-y-1">
            {settingsItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    item.active
                      ? "bg-primary text-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}