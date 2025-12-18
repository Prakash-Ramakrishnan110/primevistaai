import { Building2, GraduationCap, ShoppingBag, Truck, Heart, Landmark } from "lucide-react";

const clients = [
  { name: "EdTech Startup", icon: GraduationCap },
  { name: "Healthcare Inc", icon: Heart },
  { name: "Retail Corp", icon: ShoppingBag },
  { name: "Logistics Pro", icon: Truck },
  { name: "Government", icon: Landmark },
  { name: "SME Solutions", icon: Building2 },
];

export function ClientLogos() {
  return (
    <section className="py-16 border-y border-border/30 bg-secondary/10">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm mb-8 uppercase tracking-wider">
          Trusted by innovative organizations
        </p>
        
        {/* Row 1 - Left to Right */}
        <div className="overflow-hidden mb-6">
          <div className="flex animate-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mx-8 px-6 py-3 rounded-full bg-card/50 border border-border/30 whitespace-nowrap"
              >
                <client.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Row 2 - Right to Left */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-reverse">
            {[...clients.reverse(), ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center gap-3 mx-8 px-6 py-3 rounded-full bg-card/50 border border-border/30 whitespace-nowrap"
              >
                <client.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-muted-foreground">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
