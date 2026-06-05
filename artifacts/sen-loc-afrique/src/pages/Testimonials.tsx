import { Layout } from "@/components/layout/Layout";
import { ContactCTA } from "@/components/layout/ContactCTA";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Youssef Alaoui",
    date: "Mars 2024",
    rating: 5,
    text: "Service impeccable du début à la fin. J'ai loué une Mercedes Classe E pour un rendez-vous d'affaires. Le véhicule était dans un état clinique et livré à l'heure exacte. Je recommande vivement SEN LOC AFRIQUE."
  },
  {
    name: "Sophie Dubois",
    date: "Février 2024",
    rating: 5,
    text: "Merveilleuse expérience pour nos vacances au Maroc. L'équipe a été très réactive via WhatsApp et nous a proposé un Dacia Duster parfait pour notre road trip. Aucune mauvaise surprise lors de la restitution."
  },
  {
    name: "Karim Benjelloun",
    date: "Janvier 2024",
    rating: 4,
    text: "Très bon rapport qualité-prix. Le transfert depuis l'aéroport Mohammed V s'est fait en douceur. Chauffeur très courtois et véhicule extrêmement confortable. Seul petit bémol, l'attente de 10 minutes, mais vite oubliée."
  },
  {
    name: "Amine Chraibi",
    date: "Décembre 2023",
    rating: 5,
    text: "Je loue chez eux depuis plus d'un an pour mes déplacements professionnels à Casablanca. La constance dans la qualité du service est remarquable. Les véhicules sont toujours récents et propres."
  },
  {
    name: "Claire Martinez",
    date: "Novembre 2023",
    rating: 5,
    text: "Processus de réservation d'une simplicité enfantine. L'équipe a su me conseiller le meilleur véhicule pour mes besoins urbains (Clio). C'est la première fois que je me sens autant en confiance avec une agence de location."
  },
  {
    name: "Tariq Mansour",
    date: "Octobre 2023",
    rating: 5,
    text: "Le service de location avec chauffeur est digne des plus grands palaces. Ponctualité, discrétion et professionnalisme. SEN LOC AFRIQUE a su répondre à toutes mes exigences de dernière minute."
  }
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star 
          key={star} 
          className={`w-5 h-5 ${star <= rating ? "fill-primary text-primary" : "text-white/20"}`} 
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-[#050505]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">Témoignages</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La satisfaction de nos clients est notre plus belle réussite. Découvrez leurs retours d'expérience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors relative"
              >
                <div className="absolute top-8 right-8 text-6xl text-white/5 font-serif leading-none">"</div>
                <RatingStars rating={testimonial.rating} />
                <p className="text-muted-foreground text-lg italic leading-relaxed mb-8 relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                  <span className="text-sm text-muted-foreground">{testimonial.date}</span>
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
