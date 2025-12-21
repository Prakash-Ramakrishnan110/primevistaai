import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Industries", path: "/industries" },
  { name: "Pricing", path: "/pricing" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-[-8px] bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              <div className="absolute inset-[-4px] bg-gradient-to-r from-accent via-primary to-accent rounded-full blur-md opacity-40 group-hover:opacity-80 transition-all duration-300" style={{ animation: 'spin 8s linear infinite' }} />
              <img 
                src={logo} 
                alt="Prime Vista Logo" 
                className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-[0_0_20px_hsl(var(--primary)/0.9)] group-hover:drop-shadow-[0_0_30px_hsl(var(--accent)/1)]"
                style={{ animation: 'float 4s ease-in-out infinite' }}
              />
            </div>
            <span className="text-2xl md:text-3xl font-bold gradient-text tracking-tight group-hover:tracking-normal transition-all duration-300">Prime Vista</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="hero" size="default" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" size="default" asChild className="mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
