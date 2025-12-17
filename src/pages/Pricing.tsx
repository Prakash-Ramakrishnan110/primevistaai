import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for startups & small businesses",
    price: "₹49,999",
    period: "starting from",
    features: [
      "Basic automation workflows",
      "Single platform dashboard",
      "Email & WhatsApp integration",
      "Up to 1,000 monthly automations",
      "Email support",
      "30-day delivery",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "For scaling SMEs & businesses",
    price: "₹1,49,999",
    period: "starting from",
    features: [
      "Advanced AI-powered workflows",
      "Multi-platform integrations",
      "Custom dashboard & analytics",
      "Up to 10,000 monthly automations",
      "Priority support",
      "API access",
      "45-day delivery",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations & government",
    price: "Custom",
    period: "tailored pricing",
    features: [
      "Full-scale automation suite",
      "Unlimited integrations",
      "Custom AI/ML solutions",
      "Unlimited automations",
      "Dedicated support team",
      "Security & compliance audit",
      "SLA guarantees",
      "On-premise deployment option",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">Pricing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs. All plans include our commitment to quality and on-time delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`glass-card p-8 relative ${
                  plan.popular ? "border-primary/50 scale-105" : ""
                } hover:border-primary/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground text-xs">{plan.period}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a <span className="gradient-text">Custom Solution</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Every project is unique. Let's discuss your specific requirements and build a tailored proposal.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Contact for Custom Pricing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Pricing;
