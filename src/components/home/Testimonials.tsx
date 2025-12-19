import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    company: "TechStart India",
    content: "Prime Vista transformed our entire operations. Their automation suite reduced our processing time by 70% and eliminated manual errors completely.",
    rating: 5,
    avatar: "RK"
  },
  {
    name: "Priya Sharma",
    role: "Operations Head",
    company: "HealthCare Plus",
    content: "The WhatsApp platform they built handles 5000+ patient queries daily. Our response time went from hours to seconds. Absolutely game-changing!",
    rating: 5,
    avatar: "PS"
  },
  {
    name: "Amit Patel",
    role: "Founder",
    company: "AgriTech Solutions",
    content: "Their smart dashboard gives us real-time insights into our supply chain. We've optimized costs by 40% in just 3 months.",
    rating: 5,
    avatar: "AP"
  },
  {
    name: "Neha Gupta",
    role: "Digital Head",
    company: "EduLearn Academy",
    content: "The custom LMS they developed handles 50,000+ students seamlessly. The AI-powered recommendations increased course completion by 60%.",
    rating: 5,
    avatar: "NG"
  },
  {
    name: "Vikram Singh",
    role: "CTO",
    company: "LogiMove Transport",
    content: "Fleet management became effortless with their solution. Real-time tracking and route optimization saved us 25% on fuel costs.",
    rating: 5,
    avatar: "VS"
  },
  {
    name: "Ananya Reddy",
    role: "Managing Director",
    company: "RetailMax",
    content: "Their e-commerce automation handles inventory, orders, and customer support. Our team now focuses on growth, not operations.",
    rating: 5,
    avatar: "AR"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from businesses we've transformed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
