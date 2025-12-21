import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group z-10">
            <div className="relative">
              <div className="absolute inset-[-6px] bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-md opacity-70 group-hover:opacity-100 animate-pulse transition-all duration-500" />
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 p-2 rounded-xl border-2 border-primary/50 group-hover:border-primary transition-all duration-300 backdrop-blur-sm">
                <img
                  src={logo}
                  alt="Prime Vista Logo"
                  className="w-10 h-10 md:w-11 md:h-11 object-contain brightness-110 contrast-110 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_hsl(var(--primary)/0.8)]"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold gradient-text">
                Prime Vista
              </span>
              <span className="text-[10px] text-primary/80 font-medium tracking-widest uppercase hidden sm:block">
                Innovation Hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 bg-secondary/50 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/30">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-primary-foreground bg-primary shadow-lg shadow-primary/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button
              variant="default"
              size="sm"
              asChild
              className="rounded-full px-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Get Started
              </Link>
            </Button>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center gap-4">
            <div className="flex items-center gap-1">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full transition-all"
              >
                More
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            <ThemeToggle />
            <Button variant="default" size="sm" asChild className="rounded-full">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              className={`relative p-2 rounded-xl transition-all duration-300 ${
                isOpen
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-foreground hover:bg-secondary"
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 pb-6">
          <div className="bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 p-4 shadow-xl">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-secondary/50 text-foreground hover:bg-secondary"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
            <Button
              variant="default"
              size="lg"
              asChild
              className="w-full rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
