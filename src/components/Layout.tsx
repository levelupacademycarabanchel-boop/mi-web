import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "@/lib/index";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WA_NUMBER = "34600956440";
const WA_MSG = encodeURIComponent("Hola, me gustaría obtener más información sobre los cursos de inglés de Level Up Academy.");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const navLinks = [
  { to: ROUTES.HOME, label: "Inicio" },
  { to: ROUTES.METODOLOGIA, label: "Metodología" },
  { to: ROUTES.NOSOTROS, label: "Nosotros" },
  { to: ROUTES.CURSOS, label: "Cursos" },
  { to: ROUTES.VERANO, label: "🌞 Verano" },
  { to: ROUTES.CONTACTO, label: "Contacto" },
  { to: ROUTES.TEST_NIVEL, label: "🧠 Test de Nivel" },
];

/* ─── BANNER MATRÍCULA ─── */
export function MatriculaBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 text-yellow-900 py-2.5 px-4 text-center text-sm font-semibold">
      🎉 <strong>¡Matrícula abierta 2026-2027!</strong> Reserva ya tu plaza.{" "}
      <Link to={ROUTES.CONTACTO} className="underline hover:no-underline font-bold">
        Apúntate aquí →
      </Link>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Cerrar"
      >
        <X size={16} />
      </button>
    </div>
  );
}

/* ─── HEADER ─── */
export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Level Up Academy"
            className="w-12 h-12 object-contain"
          />
          <div>
            <p className="font-bold text-foreground leading-tight text-sm">Level Up Academy</p>
            <p className="text-muted-foreground text-xs">Carabanchel · Madrid</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="tel:+34600956440"
            className="ml-2 flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone size={14} />
            600 95 64 40
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-border bg-white"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─── FOOTER ─── */
export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/logo.png"
              alt="Level Up Academy"
              className="w-9 h-9 object-contain"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
              }}
            />
            <p className="font-bold text-background">Level Up Academy</p>
          </div>
          <p className="text-sm text-background/70">
            Tu academia de inglés de confianza en Carabanchel, Madrid. Clases para todos los niveles y edades.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-background">Cursos</h4>
          <ul className="space-y-1.5 text-sm text-background/70">
            <li>Infantil y Primaria</li>
            <li>Secundaria y Bachillerato</li>
            <li>Adultos (A1 → C1)</li>
            <li>🌞 Cursos de Verano</li>
            <li>Clases Particulares</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-background">Contacto</h4>
          <ul className="space-y-1.5 text-sm text-background/70">
            <li>📍 Calle De La Lonja De La Seda 27, 28054 Madrid</li>
            <li>📞 <a href="tel:+34600956440" className="hover:text-background transition-colors">600 95 64 40</a></li>
            <li>✉️ <a href="mailto:carabanchel@level-up-academy.es" className="hover:text-background transition-colors">carabanchel@level-up-academy.es</a></li>
            <li>🌐 www.level-up-academy.es</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 text-center text-xs text-background/40 py-4">
        © 2026 Level Up Academy · Todos los derechos reservados
      </div>
    </footer>
  );
}

/* ─── WHATSAPP BOTÓN FLOTANTE ─── */
export function WhatsAppButton() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-24 right-5 md:bottom-6 md:right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20c05c] transition-colors group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Texto visible en hover */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap pl-0 group-hover:pl-4 text-sm font-semibold">
        ¡Escríbenos!
      </span>
      <span className="w-14 h-14 flex items-center justify-center shrink-0">
        <MessageCircle size={28} strokeWidth={2} />
      </span>
    </motion.a>
  );
}

/* ─── BARRA FIJA MÓVIL ─── */
export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden border-t border-border bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
      <a
        href="tel:+34600956440"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
      >
        <Phone size={18} />
        Llamar ahora
      </a>
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white font-bold text-sm hover:opacity-90 transition-opacity"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}
