import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Target, Eye, Heart, Lightbulb, Shield, Users, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation with Purpose",
    description: "Every solution we build addresses a real problem. No tech for tech's sake.",
  },
  {
    icon: Shield,
    title: "Ethics & Transparency",
    description: "We build with integrity, ensuring our systems are secure, fair, and accountable.",
  },
  {
    icon: TrendingUp,
    title: "Scalability First",
    description: "From day one, we engineer for growth. Our systems scale with your ambitions.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Technology should serve people. We design experiences that feel effortless.",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building India's <span className="gradient-text">Digital Future</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Prime Vista is a technology startup focused on AI-driven automation and scalable digital platforms 
              that power businesses, governments, and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                Prime Vista was born from a simple observation: too many organizations struggle with 
                manual processes, disconnected systems, and outdated technology.
              </p>
              <p className="text-muted-foreground mb-4">
                We set out to change that. As a team of engineers, designers, and problem-solvers, 
                we build intelligent systems that automate the mundane, connect the disconnected, 
                and empower decision-makers with real-time insights.
              </p>
              <p className="text-muted-foreground">
                From startups launching their first MVP to government bodies modernizing public services, 
                we're the technology partner that makes ambitious visions a reality.
              </p>
            </div>
            <div className="glass-card p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Vision</h3>
                  <p className="text-muted-foreground text-sm">
                    To become a trusted AI & automation backbone for India's digital future.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mission</h3>
                  <p className="text-muted-foreground text-sm">
                    To design intelligent systems that eliminate inefficiency and enable smart decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4 uppercase tracking-wider text-sm">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
