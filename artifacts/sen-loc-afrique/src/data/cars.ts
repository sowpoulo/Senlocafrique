import { Car } from "lucide-react";

export interface CarItem {
  id: string;
  name: string;
  category: "Citadines" | "Berlines" | "SUV" | "Véhicules Utilitaires" | "Véhicules Premium";
  price: number;
  transmission: "Manuelle" | "Automatique";
  fuel: "Essence" | "Diesel" | "Hybride";
  image: string;
}

export const cars: CarItem[] = [
  {
    id: "dacia-sandero",
    name: "Dacia Sandero",
    category: "Citadines",
    price: 250,
    transmission: "Manuelle",
    fuel: "Essence",
    image: "/images/cars/dacia-sandero.jpg",
  },
  {
    id: "renault-clio",
    name: "Renault Clio",
    category: "Citadines",
    price: 280,
    transmission: "Manuelle",
    fuel: "Essence",
    image: "/images/cars/renault-clio.jpg",
  },
  {
    id: "peugeot-208",
    name: "Peugeot 208",
    category: "Citadines",
    price: 300,
    transmission: "Automatique",
    fuel: "Essence",
    image: "/images/cars/peugeot-208.jpg",
  },
  {
    id: "dacia-logan",
    name: "Dacia Logan",
    category: "Berlines",
    price: 320,
    transmission: "Manuelle",
    fuel: "Diesel",
    image: "/images/cars/dacia-logan.jpg",
  },
  {
    id: "renault-megane",
    name: "Renault Megane",
    category: "Berlines",
    price: 380,
    transmission: "Automatique",
    fuel: "Essence",
    image: "/images/cars/renault-megane.jpg",
  },
  {
    id: "vw-golf",
    name: "Volkswagen Golf",
    category: "Berlines",
    price: 400,
    transmission: "Automatique",
    fuel: "Essence",
    image: "/images/cars/vw-golf.jpg",
  },
  {
    id: "dacia-duster",
    name: "Dacia Duster",
    category: "SUV",
    price: 420,
    transmission: "Manuelle",
    fuel: "Diesel",
    image: "/images/cars/dacia-duster.jpg",
  },
  {
    id: "hyundai-tucson",
    name: "Hyundai Tucson",
    category: "SUV",
    price: 500,
    transmission: "Automatique",
    fuel: "Essence",
    image: "/images/cars/hyundai-tucson.jpg",
  },
  {
    id: "toyota-rav4",
    name: "Toyota RAV4",
    category: "SUV",
    price: 550,
    transmission: "Automatique",
    fuel: "Hybride",
    image: "/images/cars/toyota-rav4.jpg",
  },
  {
    id: "renault-kangoo",
    name: "Renault Kangoo",
    category: "Véhicules Utilitaires",
    price: 350,
    transmission: "Manuelle",
    fuel: "Diesel",
    image: "/images/cars/dacia-duster.jpg", // fallback
  },
  {
    id: "peugeot-partner",
    name: "Peugeot Partner",
    category: "Véhicules Utilitaires",
    price: 370,
    transmission: "Manuelle",
    fuel: "Diesel",
    image: "/images/cars/dacia-sandero.jpg", // fallback
  },
  {
    id: "citroen-berlingo",
    name: "Citroen Berlingo",
    category: "Véhicules Utilitaires",
    price: 360,
    transmission: "Manuelle",
    fuel: "Diesel",
    image: "/images/cars/dacia-sandero.jpg", // fallback
  },
  {
    id: "mercedes-classe-e",
    name: "Mercedes Classe E",
    category: "Véhicules Premium",
    price: 800,
    transmission: "Automatique",
    fuel: "Diesel",
    image: "/images/cars/renault-megane.jpg", // fallback
  },
  {
    id: "bmw-serie-5",
    name: "BMW Série 5",
    category: "Véhicules Premium",
    price: 900,
    transmission: "Automatique",
    fuel: "Essence",
    image: "/images/cars/vw-golf.jpg", // fallback
  },
  {
    id: "audi-a6",
    name: "Audi A6",
    category: "Véhicules Premium",
    price: 850,
    transmission: "Automatique",
    fuel: "Diesel",
    image: "/images/cars/renault-clio.jpg", // fallback
  }
];
