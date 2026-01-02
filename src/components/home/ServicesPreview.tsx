import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, Workflow, Cloud, Building2, Rocket, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI & Intelligent Systems",
    description: "Chatbots, NLP systems, and AI-powered decision engines that understand and respond intelligently.",
    slug: "ai-intelligent-systems",
  },
  {
    icon: Workflow,
    title: "Automation & Workflows",
    description: "WhatsApp automation, CRM integrations, and API-driven workflows that eliminate manual work.",
    slug: "automation-workflow-systems",
  },
  {
    icon: Cloud,
    title: "SaaS & Platforms",
    description: "Multi-tenant SaaS applications, subscription systems, and enterprise-grade dashboards.",
    slug: "saas-platform-development",
  },
  {
    icon: Building2,
    title: "Government & Public Tech",
    description: "Education systems, scholarship monitoring, and transparency dashboards for public sector.",
    slug: "government-public-tech",
  },
  {
    icon: Rocket,
    title: "Startup MVP Studio",
    description: "From idea to pitch-ready MVP. Rapid prototyping for founders who move fast.",
    slug: "startup-mvp-studio",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">What We Build</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Solutions That <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From intelligent automation to full-scale platforms, we engineer systems that grow with your ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.slug}`}
              className="glass-card p-6 md:p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 block"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
          
          {/* CTA Card */}
          <div className="glass-card p-6 md:p-8 flex flex-col items-center justify-center text-center gradient-border bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
              Ready to Build?
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Let's discuss your project and create something extraordinary.
            </p>
            <Button variant="hero" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
