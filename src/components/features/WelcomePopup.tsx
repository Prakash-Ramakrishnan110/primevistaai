import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the popup
    const hasSeenPopup = localStorage.getItem("primevista_welcome_seen");
    if (!hasSeenPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("primevista_welcome_seen", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="relative glass-card p-8 max-w-md w-full animate-scale-up text-center">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary/50 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <img
            src={logo}
            alt="Prime Vista"
            className="w-20 h-20 mx-auto drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium text-primary">Welcome to Prime Vista</span>
        </div>

        <h2 className="text-2xl font-bold mb-3">
          Engineering <span className="gradient-text">Intelligent Systems</span>
        </h2>

        <p className="text-muted-foreground text-sm mb-6">
          Transform your business with AI-powered automation, smart workflows, and scalable digital platforms.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="hero" asChild onClick={handleClose}>
            <Link to="/services">
              Explore Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild onClick={handleClose}>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          AI • Automation • SaaS • Digital Infrastructure
        </p>
      </div>
    </div>
  );
}
