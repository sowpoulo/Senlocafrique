import { Layout } from "@/components/layout/Layout";
import { ContactCTA } from "@/components/layout/ContactCTA";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Star, Shield, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { cars } from "@/data/cars";

export default function Home() {
  const featuredCars = cars.slice(0, 3); // Just pick 3 for preview

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background z-10" />
          <img 
            src="/images/hero-bg.jpg" 
            alt="Luxury car at night in Casablanca" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
            style={{ filter: "brightness(0.7) contrast(1.2)" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="inline-block py-1 px-3 rounded-full border border-primary/30 text-primary text-sm font-medium tracking-widest uppercase mb-6 bg-black/30 backdrop-blur-sm">
              SEN LOC AFRIQUE
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              Location de Voitures <br />
              <span className="text-primary italic font-normal">à Casablanca</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-10 font-light max-w-2xl mx-auto drop-shadow-lg">
              Des véhicules fiables et adaptés à tous vos besoins. L'excellence au service de votre mobilité.
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
                <Button variant="outline" size="lg" className="border-white/30 bg-black/20 backdrop-blur-sm text-white hover:bg-white hover:text-black font-bold rounded-full px-8 h-14 text-lg w-full sm:w-auto transition-all">
                  <Phone className="w-5 h-5 mr-2" />
                  Nous Appeler
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">Découvrir</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* STATS BAR */}
      <section className="bg-card border-y border-white/5 relative z-30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 divide-x divide-white/5">
            {[
              { label: "Clients Satisfaits", value: "500+" },
              { label: "Véhicules", value: "50+" },
              { label: "Ans d'Expérience", value: "10+" },
              { label: "Disponible", value: "24/7" },
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">Notre Sélection</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Une Flotte d'Excellence</h2>
            </div>
            <Link href="/flotte">
              <Button variant="outline" className="border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-8">
                Voir tous les véhicules
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, i) => (
              <motion.div 
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    onError={(e) => { e.currentTarget.src = "/images/hero-bg.jpg" }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {car.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">{car.name}</h3>
                    <div className="text-right">
                      <span className="block text-xl font-bold text-primary">{car.price} MAD</span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">/ jour</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mb-8 pb-6 border-b border-white/5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Settings2 className="w-4 h-4 text-primary" />
                      {car.transmission}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Droplets className="w-4 h-4 text-primary" />
                      {car.fuel}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/212631790330?text=Bonjour%20SEN%20LOC%20AFRIQUE%2C%20je%20souhaite%20r%C3%A9server%20le%20v%C3%A9hicule%20${encodeURIComponent(car.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full bg-white/5 text-foreground hover:bg-primary hover:text-primary-foreground border border-white/10 rounded-xl transition-all duration-300">
                      Réserver ce véhicule
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="py-24 bg-[#080808] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">Notre Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Des Services Sur Mesure</h2>
            <p className="text-muted-foreground text-lg">Plus qu'une simple location, nous offrons une expérience de mobilité complète pour répondre à toutes vos exigences.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Courte & Longue Durée",
                desc: "Des solutions flexibles adaptées à la durée de votre séjour ou de vos besoins professionnels."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Location avec Chauffeur",
                desc: "Profitez du trajet en toute sérénité avec nos chauffeurs professionnels et discrets."
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Transfert Aéroport",
                desc: "Un accueil personnalisé à l'aéroport Mohammed V pour un transfert vers votre destination."
              }
            ].map((service, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="link" className="text-primary hover:text-primary/80 text-lg group">
                Découvrir tous nos services 
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}

// Helper icons
function Settings2(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" {...props}><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
  );
}
function Droplets(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" {...props}><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>
  );
}
