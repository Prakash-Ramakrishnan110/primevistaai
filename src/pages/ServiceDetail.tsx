import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Bot, Workflow, Cloud, Building2, Rocket, 
  ArrowRight, ArrowLeft, CheckCircle2, Users, 
  TrendingUp, Clock, Award
} from "lucide-react";

const servicesData = {
  "ai-intelligent-systems": {
    icon: Bot,
    title: "AI & Intelligent Systems",
    subtitle: "Transform customer interactions and internal operations with AI-powered solutions.",
    description: "Our AI solutions leverage cutting-edge machine learning and natural language processing to create intelligent systems that understand, learn, and adapt to your business needs. From conversational AI to predictive analytics, we build solutions that drive real business outcomes.",
    features: [
      "Custom AI Chatbots & Virtual Assistants",
      "Natural Language Processing (NLP) Systems",
      "Predictive Analytics & Forecasting",
      "Decision Intelligence Engines",
      "Computer Vision Solutions",
      "Recommendation Systems",
    ],
    benefits: [
      { icon: Clock, title: "24/7 Availability", description: "AI systems work around the clock without fatigue" },
      { icon: TrendingUp, title: "Improved Accuracy", description: "Reduce human error with consistent AI-driven decisions" },
      { icon: Users, title: "Scale Effortlessly", description: "Handle thousands of interactions simultaneously" },
    ],
    caseStudies: [
      {
        title: "E-commerce Customer Support Automation",
        client: "Major Online Retailer",
        challenge: "High volume of repetitive customer queries overwhelming support team",
        solution: "Deployed AI chatbot handling 70% of queries automatically",
        results: ["85% reduction in response time", "40% cost savings", "95% customer satisfaction"],
      },
      {
        title: "Predictive Maintenance for Manufacturing",
        client: "Industrial Equipment Manufacturer",
        challenge: "Unexpected equipment failures causing costly downtime",
        solution: "ML-based predictive maintenance system analyzing sensor data",
        results: ["50% reduction in unplanned downtime", "$2M annual savings", "30% extended equipment life"],
      },
    ],
  },
  "automation-workflow-systems": {
    icon: Workflow,
    title: "Automation & Workflow Systems",
    subtitle: "Eliminate manual work and connect your entire tech stack seamlessly.",
    description: "We design and implement intelligent automation workflows that connect your systems, eliminate repetitive tasks, and ensure data flows smoothly across your organization. Our solutions integrate with any platform and scale with your business.",
    features: [
      "WhatsApp Business Automation",
      "Email & CRM Workflow Automation",
      "API Integrations & Data Sync",
      "n8n & Custom Workflow Engines",
      "Document Processing Automation",
      "Multi-channel Communication Automation",
    ],
    benefits: [
      { icon: Clock, title: "Save Hours Daily", description: "Automate repetitive tasks and focus on high-value work" },
      { icon: TrendingUp, title: "Zero Errors", description: "Eliminate manual data entry mistakes" },
      { icon: Award, title: "Faster Response", description: "Instant automated responses to customers" },
    ],
    caseStudies: [
      {
        title: "WhatsApp Sales Automation",
        client: "Real Estate Agency",
        challenge: "Slow response to property inquiries losing potential buyers",
        solution: "Automated WhatsApp bot qualifying leads and scheduling viewings",
        results: ["300% increase in lead response rate", "50% more viewings booked", "2x sales conversion"],
      },
      {
        title: "Order Processing Automation",
        client: "Distribution Company",
        challenge: "Manual order entry causing delays and errors",
        solution: "End-to-end automation from order receipt to fulfillment",
        results: ["90% faster order processing", "99.9% accuracy rate", "60% reduction in operational costs"],
      },
    ],
  },
  "saas-platform-development": {
    icon: Cloud,
    title: "SaaS & Platform Development",
    subtitle: "Build scalable, subscription-ready platforms that serve thousands.",
    description: "We architect and build modern SaaS platforms from the ground up. Our solutions are designed for scale, featuring multi-tenancy, subscription billing, real-time analytics, and the infrastructure needed to support thousands of users.",
    features: [
      "Multi-tenant SaaS Architecture",
      "Subscription & Billing Systems",
      "Real-time Dashboards & Analytics",
      "Admin Panels & User Management",
      "API-first Design",
      "White-label Solutions",
    ],
    benefits: [
      { icon: Users, title: "Serve Millions", description: "Architecture built to scale from day one" },
      { icon: TrendingUp, title: "Recurring Revenue", description: "Subscription models for predictable income" },
      { icon: Award, title: "Enterprise Ready", description: "Security and compliance built-in" },
    ],
    caseStudies: [
      {
        title: "HR Management Platform",
        client: "HR Tech Startup",
        challenge: "Needed to launch MVP quickly while planning for scale",
        solution: "Built multi-tenant SaaS with modular architecture",
        results: ["Launched in 12 weeks", "10,000 users in first year", "Raised Series A funding"],
      },
      {
        title: "Learning Management System",
        client: "EdTech Company",
        challenge: "Legacy system couldn't handle growing user base",
        solution: "Modern cloud-native platform with real-time features",
        results: ["500% improvement in performance", "99.99% uptime", "50,000+ concurrent users"],
      },
    ],
  },
  "government-public-tech": {
    icon: Building2,
    title: "Government & Public Tech",
    subtitle: "Modernize public services with transparent, efficient digital systems.",
    description: "We specialize in building government technology solutions that improve transparency, efficiency, and citizen engagement. Our platforms help public institutions deliver better services while maintaining the highest standards of security and compliance.",
    features: [
      "Education Management Systems",
      "Scholarship & Grant Monitoring",
      "Transparency & Audit Dashboards",
      "Citizen Engagement Platforms",
      "Public Records Management",
      "Compliance & Reporting Systems",
    ],
    benefits: [
      { icon: Users, title: "Better Citizen Service", description: "Faster, more accessible public services" },
      { icon: TrendingUp, title: "Increased Transparency", description: "Real-time visibility into public operations" },
      { icon: Award, title: "Reduced Corruption", description: "Audit trails and accountability built-in" },
    ],
    caseStudies: [
      {
        title: "Scholarship Management System",
        client: "State Education Department",
        challenge: "Manual scholarship processing causing delays and errors",
        solution: "Digital platform for application, verification, and disbursement",
        results: ["80% reduction in processing time", "Zero leakage in fund distribution", "100,000+ students served"],
      },
      {
        title: "Public Grievance Portal",
        client: "Municipal Corporation",
        challenge: "Citizens had no easy way to report issues",
        solution: "Multi-channel grievance platform with tracking",
        results: ["5x increase in citizen engagement", "70% faster resolution", "90% citizen satisfaction"],
      },
    ],
  },
  "startup-mvp-studio": {
    icon: Rocket,
    title: "Startup MVP Studio",
    subtitle: "Go from idea to investor-ready product in weeks, not months.",
    description: "Our MVP Studio is designed for founders who need to move fast. We combine product strategy, design, and development to help you validate your idea, build a working product, and get investor-ready—all in a fraction of the time and cost of traditional development.",
    features: [
      "Rapid Prototyping & Validation",
      "Pitch-Ready Product Development",
      "Technical Architecture Design",
      "Scalability Planning & Roadmap",
      "Investor Deck & Demo Preparation",
      "Go-to-Market Strategy Support",
    ],
    benefits: [
      { icon: Clock, title: "4-8 Week Launch", description: "From concept to working product in weeks" },
      { icon: TrendingUp, title: "Validate Fast", description: "Test your assumptions with real users quickly" },
      { icon: Award, title: "Investor Ready", description: "Products that impress VCs and angels" },
    ],
    caseStudies: [
      {
        title: "Fintech App MVP",
        client: "First-time Founder",
        challenge: "Needed to launch quickly to secure seed funding",
        solution: "Built functional MVP with core features in 6 weeks",
        results: ["Secured $500K seed funding", "1,000 beta users in month one", "Product-market fit validated"],
      },
      {
        title: "Marketplace Platform",
        client: "Serial Entrepreneur",
        challenge: "Complex multi-sided marketplace requiring rapid iteration",
        solution: "Modular MVP with A/B testing capabilities",
        results: ["Launched in 8 weeks", "10,000 transactions in 3 months", "Raised Series A at $5M valuation"],
      },
    ],
  },
};

const ServiceDetail = () => {
  useScrollToTop();
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const service = slug ? servicesData[slug as keyof typeof servicesData] : null;

  if (!service) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const ServiceIcon = service.icon;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate("/services")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
          <div className="max-w-4xl">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <ServiceIcon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">What We Deliver</h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={index} className="glass-card p-8 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <BenefitIcon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Case Studies</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            See how we've helped organizations transform their operations with our solutions.
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            {service.caseStudies.map((study, index) => (
              <div key={index} className="glass-card p-8">
                <div className="flex items-center gap-2 text-sm text-primary mb-4">
                  <Award className="w-4 h-4" />
                  <span className="uppercase tracking-wider font-medium">{study.client}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Challenge</h4>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1">Solution</h4>
                    <p className="text-muted-foreground text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-4">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Results</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.results.map((result, rIndex) => (
                      <span 
                        key={rIndex} 
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <Textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={`Tell us about your ${service.title.toLowerCase()} needs...`}
                />
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
