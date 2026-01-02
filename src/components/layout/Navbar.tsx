import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchModal } from "./SearchModal";
import { MegaMenu } from "./MegaMenu";
import { AnnouncementBar } from "./AnnouncementBar";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Products", path: "/products", hasMega: true },
  { name: "Services", path: "/services", hasMega: true },
  { name: "Industries", path: "/industries" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
];

const moreLinks = [
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<"products" | "services" | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setShowMore(false);
    setActiveMega(null);
  }, [location.pathname]);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showMore && !(e.target as Element).closest('.more-dropdown')) {
        setShowMore(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showMore]);

  return (
    <>
      <AnnouncementBar />
      
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background border-b border-border shadow-sm"
            : "bg-background/80 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent">
                <img
                  src={logo}
                  alt="Prime Vista"
                  className="w-6 h-6 object-contain brightness-150 contrast-125"
                />
              </div>
              <span className="text-xl font-semibold text-foreground">
                Prime Vista
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 ml-8">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => {
                    if (link.hasMega) {
                      setActiveMega(link.name.toLowerCase() as "products" | "services");
                    }
                  }}
                  onMouseLeave={() => {
                    if (link.hasMega) {
                      setActiveMega(null);
                    }
                  }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname.startsWith(link.path)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                    {link.hasMega && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeMega === link.name.toLowerCase() ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>
                </div>
              ))}
              
              {/* More Dropdown */}
              <div className="relative more-dropdown">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMore(!showMore);
                  }}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    moreLinks.some(l => location.pathname === l.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  More
                  <ChevronDown className={`w-4 h-4 transition-transform ${showMore ? 'rotate-180' : ''}`} />
                </button>
                
                {showMore && (
                  <div className="absolute top-full left-0 mt-1 w-40 bg-background border border-border rounded-lg shadow-lg py-1 z-50">
                    {moreLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          location.pathname === link.path
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-2 ml-auto">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchOpen(true)}
                className="text-muted-foreground hover:text-foreground gap-2"
              >
                <Search className="w-4 h-4" />
                <span className="text-xs">⌘K</span>
              </Button>
              <Button
                variant="default"
                size="sm"
                asChild
                className="ml-2 px-4"
              >
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </div>

            {/* Tablet Navigation */}
            <div className="hidden md:flex lg:hidden items-center gap-2">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="text-muted-foreground"
              >
                <Search className="w-5 h-5" />
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="text-muted-foreground"
              >
                <Search className="w-5 h-5" />
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menus */}
        <MegaMenu
          type="products"
          isOpen={activeMega === "products"}
          onClose={() => setActiveMega(null)}
        />
        <MegaMenu
          type="services"
          isOpen={activeMega === "services"}
          onClose={() => setActiveMega(null)}
        />

        {/* Mobile/Tablet Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 bg-background border-t border-border ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === "/"
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {moreLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <Button
                variant="default"
                size="sm"
                asChild
                className="w-full"
              >
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
