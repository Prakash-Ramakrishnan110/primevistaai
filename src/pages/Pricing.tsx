import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Search, Sparkles } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const businessTypes = [
  { id: "startup", name: "Startup", plan: "Starter" },
  { id: "small-business", name: "Small Business", plan: "Starter" },
  { id: "ecommerce", name: "E-commerce Store", plan: "Growth" },
  { id: "healthcare", name: "Healthcare Clinic", plan: "Growth" },
  { id: "education", name: "Educational Institution", plan: "Growth" },
  { id: "restaurant", name: "Restaurant/Food Business", plan: "Starter" },
  { id: "retail", name: "Retail Store", plan: "Growth" },
  { id: "manufacturing", name: "Manufacturing Company", plan: "Enterprise" },
  { id: "logistics", name: "Logistics Company", plan: "Enterprise" },
  { id: "banking", name: "Banking/Finance", plan: "Enterprise" },
  { id: "government", name: "Government Organization", plan: "Enterprise" },
  { id: "enterprise", name: "Large Enterprise", plan: "Enterprise" },
];

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
    color: "from-blue-500 to-cyan-500"
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
    color: "from-primary to-accent"
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
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Pay As You Go",
    description: "Flexible usage-based pricing",
    price: "₹999",
    period: "per automation/month",
    features: [
      "No minimum commitment",
      "Pay only for what you use",
      "Basic integrations",
      "Standard support",
      "Quick setup",
      "Scale up anytime",
    ],
    cta: "Start Free Trial",
    popular: false,
    color: "from-orange-500 to-yellow-500"
  },
];

const Pricing = () => {
  useScrollToTop();
  const [searchQuery, setSearchQuery] = useState("");
  const [recommendedPlan, setRecommendedPlan] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredBusinessTypes = businessTypes.filter(b => 
    b.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectBusiness = (business: typeof businessTypes[0]) => {
    setSearchQuery(business.name);
    setRecommendedPlan(business.plan);
    setShowSuggestions(false);
  };

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
            <p className="text-lg text-muted-foreground mb-8">
              Choose the plan that fits your needs. All plans include our commitment to quality and on-time delivery.
            </p>

            {/* Business Type Search */}
            <div className="max-w-md mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your business type for recommendations..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(true);
                    setRecommendedPlan(null);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  className="pl-12 pr-4 py-6 text-base"
                />
              </div>

              {showSuggestions && searchQuery && filteredBusinessTypes.length > 0 && (
                <div className="absolute top-full mt-2 w-full glass-card rounded-xl overflow-hidden z-50 max-h-60 overflow-y-auto">
                  {filteredBusinessTypes.map((business) => (
                    <button
                      key={business.id}
                      onClick={() => handleSelectBusiness(business)}
                      className="w-full px-4 py-3 text-left hover:bg-primary/10 transition-colors flex items-center justify-between"
                    >
                      <span className="text-foreground">{business.name}</span>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {business.plan} Plan
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {recommendedPlan && (
                <div className="mt-4 p-4 glass-card rounded-xl flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <p className="text-sm text-foreground">
                    Based on your business type, we recommend the <span className="font-bold text-primary">{recommendedPlan}</span> plan
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`glass-card p-6 relative ${
                  plan.popular ? "border-primary/50 ring-2 ring-primary/20" : ""
                } ${recommendedPlan === plan.name ? "ring-2 ring-accent/50 border-accent/50" : ""} hover:border-primary/50 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-medium">
                    Most Popular
                  </div>
                )}
                {recommendedPlan === plan.name && !plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-accent to-emerald-500 text-accent-foreground text-xs font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Recommended
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-1 text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground text-xs mb-4">{plan.description}</p>
                  <div className="mb-1">
                    <span className="text-3xl font-bold gradient-text">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground text-xs">{plan.period}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-xs">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular || recommendedPlan === plan.name ? "hero" : "outline"}
                  className="w-full"
                  size="sm"
                  asChild
                >
                  <Link to="/contact">
                    {plan.cta}
                    <ArrowRight className="w-3 h-3" />
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
          <Button variant="hero" size="lg" asChild>
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
