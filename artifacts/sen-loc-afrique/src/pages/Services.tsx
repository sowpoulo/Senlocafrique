import { Layout } from "@/components/layout/Layout";
import { ContactCTA } from "@/components/layout/ContactCTA";
import { motion } from "framer-motion";
import { Clock, Briefcase, Shield, MapPin, Building2, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Location Courte Durée",
    desc: "Idéal pour vos déplacements ponctuels, week-ends ou vacances à Casablanca. Profitez d'une flexibilité totale de 1 à 30 jours, avec des tarifs dégressifs. Notre large gamme de véhicules récents s'adapte à toutes vos envies."
  },
  {
    icon: <Building2 className="w-12 h-12" />,
    title: "Location Longue Durée",
    desc: "Solutions économiques et avantageuses pour les entreprises et les particuliers (de 1 à 48 mois). Nous gérons l'entretien, l'assurance et l'assistance, vous permettant de vous concentrer sur l'essentiel avec un budget maîtrisé."
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Location avec Chauffeur",
    desc: "Voyagez dans un confort absolu grâce à nos chauffeurs professionnels, discrets et expérimentés. Parfait pour les rendez-vous d'affaires, les mariages, ou simplement pour vous détendre et profiter du trajet."
  },
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: "Véhicules pour Entreprises",
    desc: "Une flotte spécialement dédiée pour répondre aux exigences des professionnels. Nous proposons des offres sur-mesure pour équiper vos collaborateurs avec des véhicules fiables, valorisant l'image de votre société."
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "Transfert Aéroport",
    desc: "Service de transfert VIP depuis et vers l'aéroport international Mohammed V. Un accueil personnalisé vous attend dès votre arrivée pour un trajet sans stress vers votre hôtel ou votre lieu de rendez-vous."
  }
];

export default function Services() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-[#050505]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">Nos Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              L'excellence à chaque kilomètre. Découvrez nos solutions de mobilité pensées pour vous offrir confort, sécurité et prestige.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="bg-card p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-primary/20 transition-all duration-500"
              >
                {/* Decorative background number */}
                <div className="absolute -right-8 -top-8 text-[200px] font-serif font-bold text-white/[0.02] leading-none pointer-events-none group-hover:text-primary/[0.02] transition-colors duration-500">
                  {i + 1}
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 w-20 h-20 bg-background rounded-2xl flex items-center justify-center text-primary shadow-inner border border-white/5">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors uppercase tracking-wider text-sm">
                      Demander un devis
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
