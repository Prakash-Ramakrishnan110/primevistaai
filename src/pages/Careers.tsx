import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CareerApplicationForm } from "@/components/features/CareerApplicationForm";
import { 
  Code, Brain, Rocket, Palette, 
  CheckCircle, Zap, Users, TrendingUp 
} from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const positions = [
  {
    icon: Code,
    title: "Full Stack Developers",
    type: "Full-time / Contract",
    description: "Build scalable applications using React, Node.js, and cloud technologies.",
  },
  {
    icon: Brain,
    title: "AI / ML Engineers",
    type: "Full-time",
    description: "Design and deploy intelligent systems using modern AI/ML frameworks.",
  },
  {
    icon: Rocket,
    title: "Automation Engineers",
    type: "Full-time / Contract",
    description: "Create workflow automation solutions using n8n, APIs, and custom integrations.",
  },
  {
    icon: Palette,
    title: "UI/UX Designers",
    type: "Full-time / Freelance",
    description: "Craft beautiful, user-centric interfaces for web and mobile applications.",
  },
];

const benefits = [
  { icon: Zap, text: "Work on cutting-edge AI & automation projects" },
  { icon: Users, text: "Collaborate with a passionate, skilled team" },
  { icon: TrendingUp, text: "Grow your skills with continuous learning" },
  { icon: CheckCircle, text: "Flexible work environment" },
];

const Careers = () => {
  useScrollToTop();
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">Careers</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Build the <span className="gradient-text">Future With Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join a team of innovators, problem-solvers, and builders who are shaping the next generation of intelligent systems.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-secondary/50 border border-border/50"
              >
                <benefit.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We're always looking for talented individuals who share our passion for technology and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {positions.map((position, index) => (
              <div
                key={index}
                className="glass-card p-8 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <position.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                    {position.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{position.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setSelectedPosition(position.title)}
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Internships</span> & Training
            </h2>
            <p className="text-muted-foreground mb-8">
              Starting your career? We offer internship programs where you'll work on real projects, 
              learn from experienced mentors, and build skills that matter in the industry.
            </p>
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => setSelectedPosition("Internship")}
            >
              Apply for Internship
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Career Application Form Modal */}
      <CareerApplicationForm
        isOpen={!!selectedPosition}
        onClose={() => setSelectedPosition(null)}
        position={selectedPosition || ""}
      />
    </main>
  );
};

export default Careers;
