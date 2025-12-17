import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, Heart, ShoppingCart, Truck, 
  Wheat, Building, Briefcase, ArrowRight 
} from "lucide-react";

const industries = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Learning management systems, scholarship tracking, and institutional automation.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Patient management, appointment scheduling, and health data analytics.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Inventory automation, customer engagement, and sales analytics.",
  },
  {
    icon: Truck,
    title: "Logistics & Transport",
    description: "Fleet management, route optimization, and delivery tracking systems.",
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description: "Farm management, supply chain tracking, and market intelligence.",
  },
  {
    icon: Building,
    title: "Government & Smart Cities",
    description: "Citizen services, transparency dashboards, and public infrastructure management.",
  },
  {
    icon: Briefcase,
    title: "SMEs & Startups",
    description: "MVP development, business automation, and growth-ready platforms.",
  },
];

const Industries = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">Industries</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Solutions for <span className="gradient-text">Every Sector</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We understand the unique challenges of different industries and build tailored solutions that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="glass-card p-8 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See <span className="gradient-text">Your Industry</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We work across sectors. Tell us about your challenges and we'll craft a custom solution.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Industries;
