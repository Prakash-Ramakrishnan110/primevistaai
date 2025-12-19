import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  ChevronRight, 
  CheckCircle2, 
  Workflow, 
  BarChart3, 
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const demoSteps = [
  {
    id: 1,
    title: "Connect Your Systems",
    description: "Integrate with 500+ apps including CRM, ERP, and communication tools in minutes.",
    icon: Workflow,
    details: ["One-click integrations", "API support", "Custom connectors"]
  },
  {
    id: 2,
    title: "Build Automated Workflows",
    description: "Use our no-code builder to create powerful automation sequences.",
    icon: CheckCircle2,
    details: ["Drag-and-drop builder", "AI-powered suggestions", "Conditional logic"]
  },
  {
    id: 3,
    title: "Monitor & Optimize",
    description: "Track performance with real-time dashboards and AI-driven insights.",
    icon: BarChart3,
    details: ["Live analytics", "Performance alerts", "Optimization tips"]
  },
  {
    id: 4,
    title: "Scale & Grow",
    description: "Handle unlimited processes as your business expands seamlessly.",
    icon: MessageSquare,
    details: ["Auto-scaling", "99.9% uptime", "24/7 support"]
  }
];

export function ProductDemo() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    let step = 1;
    const interval = setInterval(() => {
      step++;
      if (step > 4) {
        setIsPlaying(false);
        clearInterval(interval);
        setActiveStep(1);
      } else {
        setActiveStep(step);
      }
    }, 2000);
  };

  const currentStep = demoSteps.find(s => s.id === activeStep)!;

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            Interactive Demo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See <span className="gradient-text">Prime Vista</span> in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience how our platform transforms your business operations
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Demo Visualization */}
            <div className="glass-card p-8 relative overflow-hidden min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <currentStep.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Step {activeStep} of 4</p>
                    <h3 className="text-xl font-bold text-foreground">{currentStep.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  {currentStep.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {currentStep.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  {demoSteps.map((step) => (
                    <div 
                      key={step.id}
                      className={`h-2 flex-1 rounded-full transition-all ${
                        step.id <= activeStep ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Step Navigation */}
            <div className="space-y-4">
              {demoSteps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-4 group ${
                    activeStep === step.id 
                      ? 'glass-card border-primary/50' 
                      : 'hover:bg-secondary/50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeStep === step.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${
                    activeStep === step.id ? 'text-primary rotate-90' : 'text-muted-foreground'
                  }`} />
                </button>
              ))}

              <div className="flex gap-4 pt-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={handlePlay}
                  disabled={isPlaying}
                  className="flex-1"
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isPlaying ? 'Playing...' : 'Auto Play Demo'}
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">
                    Request Live Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
