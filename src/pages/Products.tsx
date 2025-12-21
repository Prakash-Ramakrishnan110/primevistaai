import { useState } from "react";
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
  CheckCircle2,
  Play,
  ArrowRight,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { ScrollReveal } from "@/components/features/ScrollReveal";
import { ParticleBackground } from "@/components/features/ParticleBackground";
import { CountUpNumber } from "@/components/features/CountUpNumber";

const products = [
  {
    id: "automation-suite",
    title: "Automation Suite",
    subtitle: "Intelligent Process Automation",
    description: "End-to-end automation platform that eliminates manual tasks, reduces errors, and accelerates business processes by up to 80%.",
    icon: Workflow,
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    features: [
      { icon: Bot, text: "AI-Powered Workflows", desc: "Smart automation that learns and adapts" },
      { icon: Zap, text: "No-Code Builder", desc: "Build workflows without coding" },
      { icon: Clock, text: "Real-Time Monitoring", desc: "Track every process live" },
      { icon: Shield, text: "Enterprise Security", desc: "Bank-grade encryption" },
    ],
    stats: [
      { value: "80%", label: "Time Saved" },
      { value: "99.9%", label: "Accuracy" },
      { value: "500+", label: "Integrations" },
    ],
    useCases: ["Invoice Processing", "HR Onboarding", "Order Management", "Data Entry"],
  },
  {
    id: "smart-dashboards",
    title: "Smart Dashboards",
    subtitle: "Real-Time Business Intelligence",
    description: "Interactive analytics dashboards that transform complex data into actionable insights with AI-powered predictions.",
    icon: BarChart3,
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    features: [
      { icon: TrendingUp, text: "Predictive Analytics", desc: "AI forecasting for better decisions" },
      { icon: FileText, text: "Custom Reports", desc: "Build reports your way" },
      { icon: Bell, text: "Smart Alerts", desc: "Get notified on key changes" },
      { icon: Users, text: "Team Collaboration", desc: "Share insights seamlessly" },
    ],
    stats: [
      { value: "10x", label: "Faster Insights" },
      { value: "40%", label: "Cost Reduction" },
      { value: "Real-time", label: "Data Sync" },
    ],
    useCases: ["Sales Analytics", "Operations KPIs", "Financial Reports", "Marketing ROI"],
  },
  {
    id: "whatsapp-platform",
    title: "WhatsApp Business Platform",
    subtitle: "AI-Powered Customer Engagement",
    description: "Complete WhatsApp automation solution for customer support, marketing campaigns, and transactional messaging at scale.",
    icon: MessageSquare,
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    features: [
      { icon: Bot, text: "AI Chatbots", desc: "24/7 intelligent responses" },
      { icon: Globe, text: "Multi-Language", desc: "Support 50+ languages" },
      { icon: Users, text: "Bulk Campaigns", desc: "Reach thousands instantly" },
      { icon: BarChart3, text: "Deep Analytics", desc: "Track every conversation" },
    ],
    stats: [
      { value: "10K+", label: "Daily Chats" },
      { value: "90%", label: "Faster Response" },
      { value: "24/7", label: "Availability" },
    ],
    useCases: ["Customer Support", "Order Updates", "Appointment Booking", "Lead Generation"],
  },
];

const additionalSolutions = [
  {
    title: "AI Monitoring System",
    description: "Real-time anomaly detection and predictive maintenance for critical systems.",
    icon: Shield,
    color: "text-red-500"
  },
  {
    title: "Document Processing",
    description: "Intelligent OCR and data extraction from invoices, forms, and documents.",
    icon: FileText,
    color: "text-blue-500"
  },
  {
    title: "Customer Analytics",
    description: "Deep insights into customer behavior, preferences, and lifetime value.",
    icon: Users,
    color: "text-purple-500"
  },
  {
    title: "Integration Hub",
    description: "Connect 500+ apps and services with pre-built connectors.",
    icon: Globe,
    color: "text-orange-500"
  }
];

export default function Products() {
  useScrollToTop();
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container relative mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Our Products & Solutions</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Intelligent Solutions</span>
              <br />
              <span className="text-foreground">for Modern Businesses</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Enterprise-grade platforms designed to automate operations, unlock insights, 
              and transform customer engagement across every touchpoint.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  <Play className="w-4 h-4 mr-2" />
                  Request Demo
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-8 sticky top-16 md:top-20 z-40 nav-blur border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeProduct === index
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                }`}
              >
                <product.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{product.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Product Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`${activeProduct === index ? 'block' : 'hidden'}`}
            >
              {/* Product Header */}
              <div className="max-w-4xl mx-auto text-center mb-16">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${product.gradient} mb-6`}>
                  <product.icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-primary font-medium mb-2">{product.subtitle}</p>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">{product.title}</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {product.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
                {product.stats.map((stat, i) => (
                  <div key={i} className="glass-card p-6 text-center">
                    <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {product.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="glass-card p-6 group hover:border-primary/50 transition-all"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.text}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Use Cases */}
              <div className="glass-card p-8 max-w-3xl mx-auto">
                <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Popular Use Cases</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {product.useCases.map((useCase, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Products Overview */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete <span className="gradient-text">Product Suite</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All our products work seamlessly together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => {
                  setActiveProduct(index);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                className="glass-card p-8 text-left group hover:border-primary/50 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  Learn more
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              More Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extend your capabilities with our complementary solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {additionalSolutions.map((solution, index) => (
              <div 
                key={index}
                className="glass-card p-6 group hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <solution.icon className={`w-6 h-6 ${solution.color}`} />
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
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
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
                  <Link to="/contact">
                    Schedule Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
