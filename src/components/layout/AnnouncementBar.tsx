import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-2.5 text-sm">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="font-medium">
            🎉 New: AI-Powered Analytics Dashboard is live!
          </span>
          <Link
            to="/products"
            className="underline underline-offset-2 hover:no-underline font-semibold ml-1"
          >
            Learn more →
          </Link>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-primary-foreground/10 rounded-full transition-colors"
        aria-label="Close announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
