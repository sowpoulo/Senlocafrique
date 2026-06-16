import { Layout } from "@/components/layout/Layout";
import { ContactCTA } from "@/components/layout/ContactCTA";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Truck, 
  FileCheck, 
  Ship, 
  Headset, 
  Building, 
  Car, 
  Globe,
  Shield,
  Clock,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { Link } from "wouter";

export default function AchatVente() {
  const steps = [
    {
      number: "01",
      title: "Demande & Recherche",
      description: "Vous nous contactez avec vos besoins (budget, type de véhicule, pays de destination). Nous effectuons une recherche personnalisée au Canada, en Chine et en Europe."
    },
    {
      number: "02",
      title: "Sélection & Vérification",
      description: "Nous vous proposons une sélection de véhicules, avec photos, historique et rapport d'inspection. Nous procédons à un contrôle rigoureux avant l'achat."
    },
    {
      number: "03",
      title: "Achat & Formalités",
      description: "Nous achetons le véhicule pour vous et gérons toutes les formalités administratives, douanières et les documents d'exportation."
    },
    {
      number: "04",
      title: "Transport & Suivi",
      description: "Nous organisons le transport maritime, le conteneur, l'assurance et vous fournissons un suivi en temps réel de votre expédition."
    },
    {
      number: "05",
      title: "Livraison & Accompagnement",
      description: "Nous vous accompagnons jusqu'à la livraison dans votre pays de destination. Nous restons disponibles pour toute question post-vente."
    }
  ];

  const vehicules = [
    { label: "Citadines & Berlines", icon: <Car className="w-6 h-6" /> },
    { label: "SUV & 4x4", icon: <Car className="w-6 h-6" /> },
    { label: "Pick-up & Utilitaires", icon: <Truck className="w-6 h-6" /> },
    { label: "Voitures de Luxe", icon: <Car className="w-6 h-6" /> },
    { label: "Hybrides & Électriques", icon: <Car className="w-6 h-6" /> },
    { label: "Minibus & Véhicules Professionnels", icon: <Building className="w-6 h-6" /> }
  ];

  const pays = [
    { pays: "Sénégal", flag: "🇸🇳" },
    { pays: "Maroc", flag: "🇲🇦" },
    { pays: "Gambie", flag: "🇬🇲" },
    { pays: "Mauritanie", flag: "🇲🇷" },
    { pays: "Guinée", flag: "🇬🇳" },
    { pays: "Mali", flag: "🇲🇱" },
    { pays: "Côte d'Ivoire", flag: "🇨🇮" }
  ];

  const avantages = [
    { icon: <Shield className="w-5 h-5" />, text: "Véhicules certifiés et contrôlés" },
    { icon: <Globe className="w-5 h-5" />, text: "Réseau international (Canada, Chine, Europe)" },
    { icon: <Clock className="w-5 h-5" />, text: "Délais de livraison optimisés" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Accompagnement personnalisé 7j/7" }
  ];

  return (
    <Layout>
      <div className="pt-20">
        {/* HERO SECTION */}
        <section className="relative py-24 bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block py-1 px-3 rounded-full border border-primary/30 text-primary text-sm font-medium tracking-widest uppercase mb-6 bg-black/30 backdrop-blur-sm">
                SEN LOC AFRIQUE
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
                Achat &amp; Vente
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Spécialiste de l'importation de véhicules entre le Canada, la Chine, l'Europe et l'Afrique.
                Nous vous accompagnons dans l'achat et la vente de véhicules neufs et d'occasion, avec des services clés en main.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AVANTAGES */}
        <section className="py-8 bg-card border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {avantages.map((a, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-foreground">
                  <span className="text-primary">{a.icon}</span>
                  <span className="text-sm font-medium">{a.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ÉTAPES */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">Processus</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Comment ça marche ?
              </h2>
              <p className="text-muted-foreground text-lg">
                Nous prenons en charge toutes les étapes, de la recherche à la livraison.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-card rounded-2xl border border-white/5 p-6 text-center hover:border-primary/30 transition-colors"
                >
                  <div className="text-4xl font-serif font-bold text-primary/30 mb-4">{step.number}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TYPES DE VÉHICULES */}
        <section className="py-20 bg-[#080808] relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">Notre offre</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Large gamme de véhicules
              </h2>
              <p className="text-muted-foreground text-lg">
                Nous proposons une sélection variée pour répondre à tous les besoins.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {vehicules.map((v, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 text-center border border-white/5 hover:border-primary/30 transition-colors">
                  <div className="text-primary mb-2">{v.icon}</div>
                  <span className="text-sm font-medium text-foreground">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAYS DE DESTINATION */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">Nous exportons vers</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Destinations
              </h2>
              <p className="text-muted-foreground text-lg">
                Nous assurons l'exportation vers plusieurs pays africains.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {pays.map((dest, i) => (
                <div key={i} className="bg-card border border-white/5 rounded-2xl p-4 text-center hover:border-primary/30 transition-colors">
                  <div className="text-3xl mb-2">{dest.flag}</div>
                  <span className="text-sm font-medium text-foreground">{dest.pays}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-card border border-white/5 rounded-3xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Prêt à importer ?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Contactez-nous pour un devis personnalisé et bénéficiez de notre accompagnement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/212631790330?text=Bonjour%20SEN%20LOC%20AFRIQUE%2C%20je%20souhaite%20obtenir%20un%20devis%20pour%20l%27achat%20et%20l%27importation%20d%27un%20v%C3%A9hicule."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-lg">
                    Demander un devis
                  </Button>
                </a>
                <a href="tel:0521387181">
                  <Button variant="outline" size="lg" className="border-white/20 text-foreground hover:bg-white/10 rounded-full px-8 text-lg">
                    Nous Appeler
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ContactCTA />
    </Layout>
  );
}
