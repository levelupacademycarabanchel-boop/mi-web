import { useState, useEffect } from "react";
import { X, Phone, MessageCircle, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WA_NUMBER = "34600956440";
const WA_MSG    = encodeURIComponent("Hola, me interesa reservar una plaza para los cursos de verano. ¿Me podéis dar información?");
const WA_LINK   = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;
const STORAGE_KEY = "levelup_summer_banner_dismissed";

export default function FloatingBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mostrar tras 3 s si no ha sido cerrado en esta sesión
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const t = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed bottom-16 md:bottom-0 left-0 right-0 z-30"
        >
          <div className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
            <div className="container mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
              {/* Texto */}
              <div className="flex items-center gap-2 text-white min-w-0">
                <Sun size={20} className="shrink-0 animate-spin" style={{ animationDuration: "6s" }} />
                <p className="font-bold text-sm truncate">
                  ☀️ <strong>Plazas de verano limitadas</strong>
                  <span className="hidden sm:inline"> — ¡Reserva ahora tu plaza!</span>
                </p>
              </div>

              {/* Botones */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="tel:+34600956440"
                  className="flex items-center gap-1.5 bg-white text-orange-600 font-bold text-xs px-3 py-2 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  <Phone size={13} />
                  <span className="hidden sm:inline">600 95 64 40</span>
                  <span className="sm:hidden">Llamar</span>
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 bg-[#25D366] text-white font-bold text-xs px-3 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={13} />
                  WhatsApp
                </a>
                <button
                  onClick={dismiss}
                  aria-label="Cerrar"
                  className="text-white/80 hover:text-white transition-colors p-1"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
