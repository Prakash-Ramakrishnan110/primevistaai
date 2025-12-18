import { useState } from "react";
import { Bot, Workflow, TrendingUp, Brain, Sparkles } from "lucide-react";

const capabilities = [
  {
    id: "chatbots",
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent conversational agents that understand context and provide human-like responses 24/7.",
    features: ["Natural Language Processing", "Multi-language Support", "Custom Training"],
  },
  {
    id: "workflow",
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline operations with AI-powered workflow automation that learns and adapts.",
    features: ["Process Optimization", "Error Reduction", "Real-time Monitoring"],
  },
  {
    id: "analytics",
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Harness data to predict trends, behaviors, and outcomes with machine learning models.",
    features: ["Trend Forecasting", "Risk Assessment", "Customer Insights"],
  },
  {
    id: "intelligence",
    icon: Brain,
    title: "Decision Intelligence",
    description: "Make smarter decisions with AI-driven insights and recommendations.",
    features: ["Data-Driven Insights", "Automated Recommendations", "Strategy Optimization"],
  },
];

export function AIShowcase() {
  const [activeCapability, setActiveCapability] = useState(capabilities[0]);

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Powered by <span className="gradient-text">Intelligent Systems</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our cutting-edge AI solutions designed to transform your business operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Selection Grid */}
          <div className="grid grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <button
                key={cap.id}
                onClick={() => setActiveCapability(cap)}
                className={`p-6 rounded-xl text-left transition-all duration-300 ${
                  activeCapability.id === cap.id
                    ? "glass-card glow-primary border-primary/50"
                    : "bg-card/30 border border-border/30 hover:border-primary/30"
                }`}
              >
                <cap.icon className={`w-8 h-8 mb-3 ${
                  activeCapability.id === cap.id ? "text-primary" : "text-muted-foreground"
                }`} />
                <h3 className="font-semibold mb-1">{cap.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{cap.description}</p>
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="glass-card p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center glow-primary">
                <activeCapability.icon className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{activeCapability.title}</h3>
                <p className="text-muted-foreground text-sm">AI-Powered Solution</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">{activeCapability.description}</p>
            <div className="space-y-3">
              {activeCapability.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
