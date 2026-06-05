import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#050505]">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Prêt à Réserver ?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Contactez-nous dès maintenant pour réserver votre véhicule ou obtenir un devis personnalisé.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://wa.me/212631790330?text=Bonjour%20SEN%20LOC%20AFRIQUE%2C%20je%20souhaite%20obtenir%20un%20devis%20pour%20une%20location%20de%20v%C3%A9hicule."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-8 h-14 text-lg w-full sm:w-auto shadow-lg shadow-primary/20">
              <MessageCircle className="w-5 h-5 mr-2" />
              Réserver via WhatsApp
            </Button>
          </a>
          
          <a href="tel:0521387181">
            <Button variant="outline" size="lg" className="border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground font-bold rounded-full px-8 h-14 text-lg w-full sm:w-auto transition-all">
              <Phone className="w-5 h-5 mr-2" />
              Nous Appeler
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
