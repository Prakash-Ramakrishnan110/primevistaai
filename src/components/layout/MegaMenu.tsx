import { Link } from "react-router-dom";
import { 
  Cpu, Database, Cloud, Shield, Zap, BarChart3,
  Code, Palette, Megaphone, Users, Headphones, Rocket
} from "lucide-react";

interface MegaMenuProps {
  type: "products" | "services";
  isOpen: boolean;
  onClose: () => void;
}

const productsItems = [
  {
    title: "AI Analytics",
    description: "Intelligent data insights powered by machine learning",
    icon: BarChart3,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Cloud Platform",
    description: "Scalable infrastructure for modern applications",
    icon: Cloud,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Database Solutions",
    description: "High-performance data storage and management",
    icon: Database,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Security Suite",
    description: "Enterprise-grade protection for your assets",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    title: "Edge Computing",
    description: "Low-latency processing at the network edge",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "IoT Hub",
    description: "Connect and manage IoT devices at scale",
    icon: Cpu,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
];

const servicesItems = [
  {
    title: "Custom Development",
    description: "Tailored software solutions for your business",
    icon: Code,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive user experiences",
    icon: Palette,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    title: "Digital Marketing",
    description: "Grow your online presence and reach",
    icon: Megaphone,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    title: "Consulting",
    description: "Expert guidance for digital transformation",
    icon: Users,
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
  {
    title: "Support & Maintenance",
    description: "24/7 technical support and system updates",
    icon: Headphones,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    title: "Startup Accelerator",
    description: "Launch your product faster with our expertise",
    icon: Rocket,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
];

export function MegaMenu({ type, isOpen, onClose }: MegaMenuProps) {
  const items = type === "products" ? productsItems : servicesItems;
  const path = type === "products" ? "/products" : "/services";

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 top-16 z-40"
        onClick={onClose}
      />

      {/* Mega Menu */}
      <div 
        className="absolute top-full left-0 right-0 z-50 bg-background border-b border-border shadow-xl animate-fade-in"
        onMouseLeave={onClose}
      >
        <div className="container mx-auto px-4 lg:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item) => (
              <Link
                key={item.title}
                to={path}
                onClick={onClose}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${item.bgColor} shrink-0`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {type === "products" 
                ? "Explore all our products and solutions"
                : "Discover all our professional services"
              }
            </p>
            <Link
              to={path}
              onClick={onClose}
              className="text-sm font-medium text-primary hover:underline"
            >
              View all {type} →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
