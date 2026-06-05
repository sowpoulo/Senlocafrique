import { Layout } from "@/components/layout/Layout";
import { ContactCTA } from "@/components/layout/ContactCTA";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Briefcase, Clock } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-20 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">À Propos de Nous</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Votre Partenaire de Confiance à Casablanca
              </h1>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  SEN LOC AFRIQUE s'est imposée comme la référence de la location de véhicules haut de gamme à Casablanca. Notre mission est simple : transformer chaque déplacement en une expérience exceptionnelle.
                </p>
                <p>
                  Que vous soyez en voyage d'affaires, en vacances ou à la recherche d'une solution de mobilité longue durée, nous mettons à votre disposition une flotte diversifiée et rigoureusement entretenue.
                </p>
                <p className="font-serif text-2xl text-foreground italic border-l-2 border-primary pl-6 py-2 mt-8">
                  "L'excellence n'est pas un acte, mais une habitude dans tout ce que nous faisons."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
                <img 
                  src="/images/hero-bg.jpg" 
                  alt="SEN LOC AFRIQUE Team" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-card border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl">
                <div className="text-4xl font-serif font-bold text-primary mb-1">10+</div>
                <div className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Années d'Expertise</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Nos Valeurs Fondamentales</h2>
            <p className="text-muted-foreground text-lg">
              Ces principes guident chacune de nos actions et garantissent la satisfaction totale de nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <HeartHandshake className="w-10 h-10" />,
                title: "Confiance",
                desc: "Une transparence totale sur nos tarifs et nos conditions. Pas de frais cachés, que des promesses tenues."
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "Sécurité",
                desc: "Tous nos véhicules sont soumis à des contrôles techniques rigoureux avant chaque location."
              },
              {
                icon: <Briefcase className="w-10 h-10" />,
                title: "Professionnalisme",
                desc: "Une équipe dévouée et formée pour répondre à vos exigences les plus élevées avec courtoisie."
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: "Disponibilité",
                desc: "Une assistance joignable 24h/24 et 7j/7 pour vous accompagner à chaque étape de votre voyage."
              }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
