import { Link } from "wouter";
import { Phone, MapPin, Mail, Car } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-flex">
              <Car className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-xl font-serif font-bold text-primary tracking-wider uppercase">
                SEN LOC AFRIQUE
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Location Tous Types de Véhicules. Votre partenaire de confiance pour la location de véhicules de luxe à Casablanca.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-serif font-bold text-lg mb-6 tracking-wide uppercase">Liens Rapides</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/flotte" className="text-muted-foreground hover:text-primary transition-colors">Notre Flotte</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Nos Services</Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-muted-foreground hover:text-primary transition-colors">À Propos</Link>
              </li>
              <li>
                <Link href="/temoignages" className="text-muted-foreground hover:text-primary transition-colors">Témoignages</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-foreground font-serif font-bold text-lg mb-6 tracking-wide uppercase">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Casablanca, Maroc</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:0521387181" className="hover:text-primary transition-colors">05 21 38 71 81</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+212631790330" className="hover:text-primary transition-colors">+212 6 31 79 03 30</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+212781163726" className="hover:text-primary transition-colors">+212 7 81 16 37 26</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-foreground font-serif font-bold text-lg mb-6 tracking-wide uppercase">Horaires</h3>
            <ul className="space-y-4">
              <li className="flex justify-between text-muted-foreground border-b border-white/5 pb-2">
                <span>Lun - Sam</span>
                <span>08:00 - 20:00</span>
              </li>
              <li className="flex justify-between text-muted-foreground border-b border-white/5 pb-2">
                <span>Dimanche</span>
                <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-primary font-medium mt-4">
                <span>Assistance</span>
                <span>24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} SEN LOC AFRIQUE. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mentions Légales</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
