import { Link } from "react-router-dom";
import { Bot, Workflow, Cloud, Building2, Rocket } from "lucide-react";

interface MegaMenuProps {
  type: "products" | "services";
  isOpen: boolean;
  onClose: () => void;
}

// Your actual company services with correct slugs
const servicesItems = [
  {
    title: "AI & Intelligent Systems",
    description: "Chatbots, NLP systems, and AI-powered decision engines",
    icon: Bot,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    slug: "ai-intelligent-systems",
  },
  {
    title: "Automation & Workflows",
    description: "WhatsApp automation, CRM integrations, API workflows",
    icon: Workflow,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    slug: "automation-workflow-systems",
  },
  {
    title: "SaaS & Platform Development",
    description: "Multi-tenant SaaS applications and dashboards",
    icon: Cloud,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    slug: "saas-platform-development",
  },
  {
    title: "Government & Public Tech",
    description: "Education systems and transparency dashboards",
    icon: Building2,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    slug: "government-public-tech",
  },
  {
    title: "Startup MVP Studio",
    description: "Rapid prototyping and pitch-ready MVPs",
    icon: Rocket,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    slug: "startup-mvp-studio",
  },
];

// Products based on your services
const productsItems = [
  {
    title: "AI Chatbot Platform",
    description: "Custom AI chatbots for customer support",
    icon: Bot,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    slug: "ai-chatbot",
  },
  {
    title: "Workflow Automation Hub",
    description: "n8n-powered automation solutions",
    icon: Workflow,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    slug: "workflow-hub",
  },
  {
    title: "SaaS Starter Kit",
    description: "Multi-tenant subscription platform template",
    icon: Cloud,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    slug: "saas-kit",
  },
  {
    title: "GovTech Suite",
    description: "Public sector digital transformation tools",
    icon: Building2,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    slug: "govtech-suite",
  },
  {
    title: "MVP Launchpad",
    description: "Rapid prototyping toolkit for startups",
    icon: Rocket,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    slug: "mvp-launchpad",
  },
];

export function MegaMenu({ type, isOpen, onClose }: MegaMenuProps) {
  const items = type === "products" ? productsItems : servicesItems;
  const basePath = type === "products" ? "/products" : "/services";

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {items.map((item) => (
              <Link
                key={item.title}
                to={type === "services" ? `/services/${item.slug}` : `${basePath}#${item.slug}`}
                onClick={onClose}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${item.bgColor} shrink-0`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
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
              to={basePath}
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
