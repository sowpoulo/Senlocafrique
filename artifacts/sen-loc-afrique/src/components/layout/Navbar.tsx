import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/flotte", label: "Notre Flotte" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/achat-vente", label: "Achat & Vente" },
  { href: "/temoignages", label: "Témoignages" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md py-3 shadow-lg shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Car className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xl md:text-2xl font-serif font-bold text-primary tracking-wider uppercase">
            SEN LOC AFRIQUE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/212631790330?text=Bonjour%20SEN%20LOC%20AFRIQUE%2C%20je%20souhaite%20obtenir%20un%20devis%20pour%20une%20location%20de%20v%C3%A9hicule."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full px-6">
              Réserver
            </Button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground/80 hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 text-lg font-medium border-b border-white/5 ${
                location === link.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/212631790330?text=Bonjour%20SEN%20LOC%20AFRIQUE%2C%20je%20souhaite%20obtenir%20un%20devis%20pour%20une%20location%20de%20v%C3%A9hicule."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full py-6 text-lg">
              Réserver Maintenant
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
