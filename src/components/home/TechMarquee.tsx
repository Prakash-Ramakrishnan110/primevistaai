const technologies = [
  "React", "Node.js", "TypeScript", "Python", "Firebase", "Supabase", 
  "n8n", "OpenAI", "AWS", "Docker", "PostgreSQL", "MongoDB",
  "Next.js", "TailwindCSS", "GraphQL", "Redis"
];

export function TechMarquee() {
  return (
    <section className="py-16 border-y border-border/50 bg-card/20 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Technologies We Master
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee */}
        <div className="flex animate-marquee">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 px-6 py-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
