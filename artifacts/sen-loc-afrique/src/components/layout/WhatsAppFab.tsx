import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/212631790330?text=Bonjour%20SEN%20LOC%20AFRIQUE%2C%20je%20souhaite%20obtenir%20un%20devis%20pour%20une%20location%20de%20v%C3%A9hicule."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-black/50 hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
