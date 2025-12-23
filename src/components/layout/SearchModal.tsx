import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight, Bot, Workflow, Cloud, Building2, Rocket, FileText, Users, DollarSign, Briefcase, Mail } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchItems = [
  { 
    title: "AI & Intelligent Systems", 
    description: "Chatbots, NLP, Decision Intelligence", 
    path: "/services#ai-systems", 
    icon: Bot,
    category: "Services" 
  },
  { 
    title: "Automation & Workflows", 
    description: "WhatsApp, CRM, API Integrations", 
    path: "/services#automation", 
    icon: Workflow,
    category: "Services" 
  },
  { 
    title: "SaaS & Platform Development", 
    description: "Multi-tenant, Subscription Systems", 
    path: "/services#saas", 
    icon: Cloud,
    category: "Services" 
  },
  { 
    title: "Government & Public Tech", 
    description: "Education, Transparency Dashboards", 
    path: "/services#govtech", 
    icon: Building2,
    category: "Services" 
  },
  { 
    title: "Startup MVP Studio", 
    description: "Rapid Prototyping, Pitch-Ready MVPs", 
    path: "/services#startup", 
    icon: Rocket,
    category: "Services" 
  },
  { 
    title: "About Us", 
    description: "Our story, mission and team", 
    path: "/about", 
    icon: Users,
    category: "Company" 
  },
  { 
    title: "Pricing", 
    description: "Plans and pricing options", 
    path: "/pricing", 
    icon: DollarSign,
    category: "Company" 
  },
  { 
    title: "Careers", 
    description: "Join our team", 
    path: "/careers", 
    icon: Briefcase,
    category: "Company" 
  },
  { 
    title: "Contact", 
    description: "Get in touch with us", 
    path: "/contact", 
    icon: Mail,
    category: "Company" 
  },
  { 
    title: "Industries", 
    description: "Industries we serve", 
    path: "/industries", 
    icon: FileText,
    category: "Company" 
  },
];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const filteredItems = searchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  // Reset selected index when filtered items change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current && filteredItems.length > 0) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex, filteredItems.length]);

  const handleSelect = useCallback((path: string) => {
    navigate(path);
    onClose();
  }, [navigate, onClose]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev < filteredItems.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => 
          prev > 0 ? prev - 1 : filteredItems.length - 1
        );
        break;
      case "Enter":
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleSelect(filteredItems[selectedIndex].path);
        }
        break;
      case "Escape":
        e.preventDefault();
        onClose();
        break;
    }
  }, [filteredItems, selectedIndex, handleSelect, onClose]);

  if (!isOpen) return null;

  // Group items by category
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof filteredItems>);

  let globalIndex = 0;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-[101] animate-fade-in">
        <div className="bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
            <Search className="w-5 h-5 text-muted-foreground shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search services, pages..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Results */}
          <div ref={resultsRef} className="max-h-[60vh] overflow-y-auto p-2">
            {filteredItems.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground">
                <Search className="w-10 h-10 mx-auto mb-3 opacity-50" />
                <p>No results found for "{query}"</p>
              </div>
            ) : (
              Object.entries(groupedItems).map(([category, items]) => (
                <div key={category} className="mb-4">
                  <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {category}
                  </p>
                  {items.map((item) => {
                    const currentIndex = globalIndex++;
                    const isSelected = currentIndex === selectedIndex;
                    return (
                      <button
                        key={item.path}
                        onClick={() => handleSelect(item.path)}
                        onMouseEnter={() => setSelectedIndex(currentIndex)}
                        className={`w-full flex items-center gap-4 px-3 py-3 rounded-lg transition-colors text-left group ${
                          isSelected 
                            ? "bg-primary/10 text-foreground" 
                            : "hover:bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? "bg-primary/20" : "bg-muted"
                        }`}>
                          <item.icon className={`w-5 h-5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-medium truncate ${isSelected ? "text-foreground" : ""}`}>
                            {item.title}
                          </p>
                          <p className="text-sm text-muted-foreground truncate">
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                          isSelected ? "translate-x-1 text-primary" : "opacity-0 group-hover:opacity-100"
                        }`} />
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-muted/30">
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono">↑</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono">↓</kbd>
                <span className="ml-1">Navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono">Enter</kbd>
                <span className="ml-1">Select</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border font-mono">Esc</kbd>
                <span className="ml-1">Close</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
