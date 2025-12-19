import { Link } from "react-router-dom";
import { Linkedin, Github, Mail, Phone, MapPin, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "News", path: "/news" },
  ],
  services: [
    { name: "AI Solutions", path: "/services" },
    { name: "Automation", path: "/services" },
    { name: "SaaS Development", path: "/services" },
    { name: "WhatsApp Platforms", path: "/products" },
    { name: "Custom Development", path: "/services" },
  ],
  products: [
    { name: "Automation Suite", path: "/products" },
    { name: "Smart Dashboards", path: "/products" },
    { name: "WhatsApp Business", path: "/products" },
    { name: "AI Monitoring", path: "/products" },
  ],
  resources: [
    { name: "Pricing", path: "/pricing" },
    { name: "Industries", path: "/industries" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Documentation", path: "/docs" },
    { name: "Support", path: "/support" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Refund Policy", path: "/refund" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Prime Vista" 
                className="w-12 h-12 object-contain drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]" 
              />
              <span className="text-xl font-bold gradient-text">Prime Vista</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mb-4">
              Engineering intelligent systems for real-world impact. AI • Automation • SaaS • Digital Infrastructure
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <a href="mailto:prakash7418r@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                prakash7418r@gmail.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                India
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 Prime Vista. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center">
            Designed & Developed by <span className="text-primary font-medium">Prime Vista</span>
          </p>
          <p className="text-xs text-muted-foreground">
            <span className="text-primary">AI</span> • <span className="text-accent">Automation</span> • Impact
          </p>
        </div>
      </div>
    </footer>
  );
}
