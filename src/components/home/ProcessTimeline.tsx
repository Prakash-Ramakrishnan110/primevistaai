import { useEffect, useRef, useState } from "react";
import { Search, Palette, Code, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Problem",
    description: "We analyze your challenges and understand your unique requirements.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Our team crafts intuitive solutions and user-centric interfaces.",
  },
  {
    icon: Code,
    title: "Build",
    description: "We develop robust, scalable systems using cutting-edge technology.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Seamless deployment with thorough testing and quality assurance.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Continuous optimization and support as your business grows.",
  },
];

export function ProcessTimeline() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleSteps((prev) => [...new Set([...prev, stepIndex])]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const stepElements = sectionRef.current?.querySelectorAll("[data-index]");
    stepElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that transforms ideas into impactful solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                data-index={index}
                className={`flex items-center gap-8 transition-all duration-700 ${
                  visibleSteps.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`glass-card p-6 inline-block ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-card border-2 flex items-center justify-center transition-all duration-500 ${
                    visibleSteps.includes(index) 
                      ? "border-primary glow-primary" 
                      : "border-border"
                  }`}>
                    <step.icon className={`w-7 h-7 ${
                      visibleSteps.includes(index) ? "text-primary" : "text-muted-foreground"
                    }`} />
                  </div>
                </div>
                
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
