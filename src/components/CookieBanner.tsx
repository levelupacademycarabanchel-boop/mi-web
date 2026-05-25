import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie, ChevronDown, ChevronUp, Shield, BarChart2, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/index";

const STORAGE_KEY = "levelup_cookie_consent";

interface ConsentRecord {
  timestamp: string;
  version: string;
  necesarias: boolean;
  analiticas: boolean;
  marketing: boolean;
  accepted_all: boolean;
}

export function getCookieConsent(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveConsent(data: Omit<ConsentRecord, "timestamp" | "version">) {
  const record: ConsentRecord = {
    ...data,
    timestamp: new Date().toISOString(),
    version: "1.0",
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  return record;
}

export default function CookieBanner() {
  const [show, setShow]           = useState(false);
  const [panel, setPanel]         = useState(false);
  const [analiticas, setAnaliticas] = useState(false);
  const [marketing, setMarketing]   = useState(false);
  const [expanded, setExpanded]   = useState<string | null>(null);

  useEffect(() => {
    const consent = getCookieConsent();
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    saveConsent({ necesarias: true, analiticas: true, marketing: true, accepted_all: true });
    setShow(false);
  };

  const reject = () => {
    saveConsent({ necesarias: true, analiticas: false, marketing: false, accepted_all: false });
    setShow(false);
  };

  const save = () => {
    saveConsent({ necesarias: true, analiticas, marketing, accepted_all: false });
    setShow(false);
  };

  const categories = [
    {
      id: "necesarias",
      icon: <Shield size={16} />,
      name: "Cookies necesarias",
      desc: "Imprescindibles para el funcionamiento básico del sitio (sesión, preferencias de idioma, consentimiento). No se pueden desactivar.",
      required: true,
      active: true,
    },
    {
      id: "analiticas",
      icon: <BarChart2 size={16} />,
      name: "Cookies analíticas",
      desc: "Nos permiten medir el número de visitas y fuentes de tráfico para mejorar el rendimiento del sitio. Toda la información es anónima.",
      required: false,
      active: analiticas,
      toggle: () => setAnaliticas(v => !v),
    },
    {
      id: "marketing",
      icon: <Megaphone size={16} />,
      name: "Cookies de marketing",
      desc: "Permiten mostrar anuncios relevantes según tus intereses y medir la efectividad de las campañas publicitarias.",
      required: false,
      active: marketing,
      toggle: () => setMarketing(v => !v),
    },
  ];

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Overlay oscuro cuando el panel está abierto */}
          {panel && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-[90]"
              onClick={() => setPanel(false)}
            />
          )}

          {/* Banner principal */}
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="fixed bottom-0 left-0 right-0 z-[95] shadow-2xl"
          >
            {/* Panel de configuración (expandible) */}
            <AnimatePresence>
              {panel && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-white border-t border-border overflow-hidden"
                >
                  <div className="container mx-auto px-4 py-5 max-w-3xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-foreground text-sm">Configurar preferencias de cookies</h3>
                      <button onClick={() => setPanel(false)} className="text-muted-foreground hover:text-foreground">
                        <X size={16} />
                      </button>
                    </div>
                    <div className="space-y-2 mb-4">
                      {categories.map(cat => (
                        <div key={cat.id} className="border border-border rounded-xl overflow-hidden">
                          <button
                            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/30 transition-colors"
                            onClick={() => setExpanded(expanded === cat.id ? null : cat.id)}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-primary">{cat.icon}</span>
                              <span className="font-semibold text-sm text-foreground">{cat.name}</span>
                              {cat.required && (
                                <span className="text-xs bg-muted text-muted-foreground rounded-full px-2 py-0.5">Siempre activa</span>
                              )}
                            </div>
                            <div className="flex items-center gap-3">
                              {!cat.required && (
                                <button
                                  onClick={e => { e.stopPropagation(); cat.toggle?.(); }}
                                  className={`relative w-10 h-5 rounded-full transition-colors ${cat.active ? "bg-primary" : "bg-muted"}`}
                                >
                                  <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${cat.active ? "translate-x-5" : "translate-x-0.5"}`} />
                                </button>
                              )}
                              {expanded === cat.id ? <ChevronUp size={14} className="text-muted-foreground" /> : <ChevronDown size={14} className="text-muted-foreground" />}
                            </div>
                          </button>
                          {expanded === cat.id && (
                            <div className="px-4 pb-3 text-xs text-muted-foreground leading-relaxed bg-muted/20">
                              {cat.desc}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 justify-end">
                      <button onClick={save} className="bg-primary text-primary-foreground font-bold text-xs px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
                        Guardar preferencias
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Barra del banner */}
            <div className="bg-[#1a1a2e] text-white">
              <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <Cookie size={20} className="text-yellow-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-white/85 leading-relaxed">
                    Usamos cookies propias y de terceros para mejorar tu experiencia. Puedes aceptarlas, rechazarlas o configurarlas.{" "}
                    <Link to={ROUTES.COOKIES} className="text-yellow-300 underline hover:no-underline" onClick={() => setShow(false)}>
                      Política de Cookies
                    </Link>{" · "}
                    <Link to={ROUTES.PRIVACIDAD} className="text-yellow-300 underline hover:no-underline" onClick={() => setShow(false)}>
                      Privacidad
                    </Link>
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setPanel(v => !v)}
                    className="text-xs border border-white/30 text-white/80 px-3 py-2 rounded-lg hover:border-white/60 hover:text-white transition-colors flex items-center gap-1"
                  >
                    Configurar {panel ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
                  </button>
                  <button
                    onClick={reject}
                    className="text-xs border border-white/30 text-white/80 px-3 py-2 rounded-lg hover:border-white/60 hover:text-white transition-colors"
                  >
                    Solo necesarias
                  </button>
                  <button
                    onClick={accept}
                    className="text-xs bg-primary text-primary-foreground font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Aceptar todas
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
