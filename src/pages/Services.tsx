import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Bot, Workflow, Cloud, Building2, Rocket, 
  MessageSquare, Mail, Database, BarChart3, 
  Smartphone, Globe, ArrowRight 
} from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const services = [
  {
    icon: Bot,
    title: "AI & Intelligent Systems",
    description: "Transform customer interactions and internal operations with AI-powered solutions.",
    features: [
      "Custom AI Chatbots & Virtual Assistants",
      "Natural Language Processing (NLP) Systems",
      "Predictive Analytics & Forecasting",
      "Decision Intelligence Engines",
    ],
  },
  {
    icon: Workflow,
    title: "Automation & Workflow Systems",
    description: "Eliminate manual work and connect your entire tech stack seamlessly.",
    features: [
      "WhatsApp Business Automation",
      "Email & CRM Workflow Automation",
      "API Integrations & Data Sync",
      "n8n & Custom Workflow Engines",
    ],
  },
  {
    icon: Cloud,
    title: "SaaS & Platform Development",
    description: "Build scalable, subscription-ready platforms that serve thousands.",
    features: [
      "Multi-tenant SaaS Architecture",
      "Subscription & Billing Systems",
      "Real-time Dashboards & Analytics",
      "Admin Panels & User Management",
    ],
  },
  {
    icon: Building2,
    title: "Government & Public Tech",
    description: "Modernize public services with transparent, efficient digital systems.",
    features: [
      "Education Management Systems",
      "Scholarship & Grant Monitoring",
      "Transparency & Audit Dashboards",
      "Citizen Engagement Platforms",
    ],
  },
  {
    icon: Rocket,
    title: "Startup MVP Studio",
    description: "Go from idea to investor-ready product in weeks, not months.",
    features: [
      "Rapid Prototyping & Validation",
      "Pitch-Ready Product Development",
      "Technical Architecture Design",
      "Scalability Planning & Roadmap",
    ],
  },
];

const capabilities = [
  { icon: MessageSquare, label: "AI Chatbots" },
  { icon: Workflow, label: "Workflow Automation" },
  { icon: BarChart3, label: "Predictive Analytics" },
  { icon: Database, label: "Decision Intelligence" },
  { icon: Smartphone, label: "Mobile-First Apps" },
  { icon: Globe, label: "Web Platforms" },
];

const Services = () => {
  useScrollToTop();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">Our Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Technology Solutions <span className="gradient-text">That Deliver</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From AI-powered automation to enterprise platforms, we build systems that scale with your ambitions.
            </p>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <cap.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{cap.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-8 md:p-10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">What We Deliver</h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Operations?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Let's discuss how our solutions can drive efficiency and innovation in your organization.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
