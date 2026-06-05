import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-[#050505]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">Contactez-nous</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une question ? Un besoin spécifique ? Notre équipe est à votre entière disposition pour vous répondre dans les plus brefs délais.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center border border-white/5 text-primary flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Téléphone</h3>
                    <p className="text-muted-foreground mb-1">Fixe : <a href="tel:0521387181" className="hover:text-primary transition-colors">05 21 38 71 81</a></p>
                    <p className="text-muted-foreground mb-1">Mobile 1 : <a href="tel:+212631790330" className="hover:text-primary transition-colors">+212 6 31 79 03 30</a></p>
                    <p className="text-muted-foreground">Mobile 2 : <a href="tel:+212781163726" className="hover:text-primary transition-colors">+212 7 81 16 37 26</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center border border-[#25D366]/20 text-[#25D366] flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground mb-3">Réponse rapide garantie</p>
                    <a
                      href="https://wa.me/212631790330?text=Bonjour%20SEN%20LOC%20AFRIQUE%2C%20je%20souhaite%20obtenir%20un%20devis."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="border-[#25D366]/50 text-foreground hover:bg-[#25D366] hover:text-white rounded-full">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Démarrer la discussion
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center border border-white/5 text-primary flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      Casablanca, Maroc<br />
                      (Bureau principal)
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-[300px] bg-card border border-white/5 rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
                    <span className="font-serif font-bold text-lg">Casablanca, Maroc</span>
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1000&auto=format&fit=crop" 
                  alt="Map Casablanca" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-card border border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Envoyez-nous un message</h2>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Nom complet</label>
                      <input 
                        type="text" 
                        placeholder="Votre nom" 
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Téléphone</label>
                      <input 
                        type="tel" 
                        placeholder="Votre numéro" 
                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input 
                      type="email" 
                      placeholder="votre@email.com" 
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea 
                      rows={5} 
                      placeholder="Comment pouvons-nous vous aider ?" 
                      className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    ></textarea>
                  </div>

                  <Button className="w-full h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl transition-all shadow-lg shadow-primary/20">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
