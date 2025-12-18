import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Bot, 
  Workflow, 
  Shield, 
  Clock, 
  TrendingUp,
  Users,
  Bell,
  FileText,
  Globe,
  CheckCircle2
} from "lucide-react";

const products = [
  {
    id: "automation-suite",
    title: "Automation Suite",
    subtitle: "Intelligent Process Automation",
    description: "End-to-end automation platform that eliminates manual tasks, reduces errors, and accelerates business processes by up to 80%.",
    icon: Workflow,
    color: "from-primary to-cyan-400",
    features: [
      { icon: Bot, text: "AI-Powered Workflows" },
      { icon: Zap, text: "No-Code Automation Builder" },
      { icon: Clock, text: "Real-Time Process Monitoring" },
      { icon: Shield, text: "Enterprise-Grade Security" },
    ],
    benefits: [
      "Reduce operational costs by 60%",
      "Eliminate data entry errors",
      "24/7 automated operations",
      "Seamless system integrations"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
  },
  {
    id: "smart-dashboards",
    title: "Smart Dashboards",
    subtitle: "Real-Time Business Intelligence",
    description: "Interactive analytics dashboards that transform complex data into actionable insights with AI-powered predictions and recommendations.",
    icon: BarChart3,
    color: "from-teal-400 to-emerald-500",
    features: [
      { icon: TrendingUp, text: "Predictive Analytics" },
      { icon: FileText, text: "Custom Report Builder" },
      { icon: Bell, text: "Smart Alerts & Notifications" },
      { icon: Users, text: "Team Collaboration Tools" },
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify trends before competitors",
      "Unified view of all metrics",
      "Mobile-friendly access anywhere"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  },
  {
    id: "whatsapp-platform",
    title: "WhatsApp Business Platform",
    subtitle: "AI-Powered Customer Engagement",
    description: "Complete WhatsApp automation solution for customer support, marketing campaigns, and transactional messaging at scale.",
    icon: MessageSquare,
    color: "from-green-400 to-emerald-500",
    features: [
      { icon: Bot, text: "Intelligent Chatbots" },
      { icon: Globe, text: "Multi-Language Support" },
      { icon: Users, text: "Bulk Messaging Campaigns" },
      { icon: BarChart3, text: "Analytics & Reporting" },
    ],
    benefits: [
      "Handle 10,000+ conversations daily",
      "90% reduction in response time",
      "Automated order tracking",
      "Seamless CRM integration"
    ],
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop"
  }
];

const additionalSolutions = [
  {
    title: "AI Monitoring System",
    description: "Real-time anomaly detection and predictive maintenance for critical systems.",
    icon: Shield
  },
  {
    title: "Document Processing",
    description: "Intelligent OCR and data extraction from invoices, forms, and documents.",
    icon: FileText
  },
  {
    title: "Customer Analytics",
    description: "Deep insights into customer behavior, preferences, and lifetime value.",
    icon: Users
  },
  {
    title: "Integration Hub",
    description: "Connect 500+ apps and services with pre-built connectors.",
    icon: Globe
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.15),transparent_70%)]" />
        
        <div className="container relative mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            Our Products & Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Intelligent Solutions</span>
            <br />
            <span className="text-foreground">for Modern Businesses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Enterprise-grade platforms designed to automate operations, unlock insights, 
            and transform customer engagement across every touchpoint.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center mb-32 last:mb-0`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${product.color} bg-opacity-10`}>
                  <product.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">{product.subtitle}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  {product.title}
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg glass-card">
                      <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Benefits */}
                <div className="space-y-3 pt-4">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Key Benefits</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="hero" size="lg" asChild className="mt-6">
                  <Link to="/contact">Request Demo</Link>
                </Button>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className={`relative rounded-2xl overflow-hidden glass-card p-2 group`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Solutions */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container relative mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              More Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extend your capabilities with our complementary solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSolutions.map((solution, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative glass-card rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-cyan-500/20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule a personalized demo and see how our solutions can drive measurable results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Schedule Demo</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
