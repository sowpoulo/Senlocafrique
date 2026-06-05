import { Layout } from "@/components/layout/Layout";
import { ContactCTA } from "@/components/layout/ContactCTA";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cars } from "@/data/cars";
import { Button } from "@/components/ui/button";

function Settings2(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
  );
}

function Droplets(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>
  );
}

const categories = ["Tous", "Citadines", "Berlines", "SUV", "Véhicules Utilitaires", "Véhicules Premium"];

export default function Fleet() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredCars = activeCategory === "Tous" 
    ? cars 
    : cars.filter(car => car.category === activeCategory);

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-[#050505]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">Notre Flotte</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre sélection de véhicules haut de gamme. De la citadine économique au SUV luxueux, trouvez le véhicule parfait pour votre séjour à Casablanca.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-background min-h-[50vh]">
        <div className="container mx-auto px-4">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "bg-card text-foreground border border-white/5 hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCars.map((car) => (
                <motion.div 
                  key={car.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 flex flex-col"
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
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">{car.name}</h3>
                      <div className="text-right">
                        <span className="block text-xl font-bold text-primary">{car.price} MAD</span>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">/ jour</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mb-8 pb-6 border-b border-white/5 mt-auto">
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
            </AnimatePresence>
          </motion.div>

          {filteredCars.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">Aucun véhicule trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </Layout>
  );
}
