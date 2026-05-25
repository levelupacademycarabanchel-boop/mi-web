import { motion } from "framer-motion";
import { useState } from "react";
import { getCookieConsent } from "@/components/CookieBanner";
import { Shield, BarChart2, Megaphone, CheckCircle, XCircle } from "lucide-react";

const STORAGE_KEY = "levelup_cookie_consent";

const cookieTypes = [
  {
    icon: <Shield size={18} className="text-primary" />,
    name: "Cookies técnicas / necesarias",
    required: true,
    desc: "Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen. Incluyen, por ejemplo, las cookies de sesión y las que almacenan las preferencias de cookies del usuario.",
    cookies: [
      { nombre: "levelup_cookie_consent", finalidad: "Almacena las preferencias de consentimiento de cookies del usuario.", duracion: "1 año", tipo: "Propia" },
      { nombre: "levelup_summer_banner_dismissed", finalidad: "Recuerda si el usuario ha cerrado el banner de verano.", duracion: "Sesión", tipo: "Propia" },
    ],
  },
  {
    icon: <BarChart2 size={18} className="text-indigo-500" />,
    name: "Cookies analíticas",
    required: false,
    desc: "Son aquellas que permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web con el fin de introducir mejoras.",
    cookies: [
      { nombre: "_ga, _gid", finalidad: "Google Analytics: distingue usuarios y sesiones. Los datos se agregan de forma anónima.", duracion: "2 años / 24 h", tipo: "Tercero (Google)" },
    ],
  },
  {
    icon: <Megaphone size={18} className="text-orange-500" />,
    name: "Cookies de marketing / publicidad",
    required: false,
    desc: "Son aquellas que almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.",
    cookies: [
      { nombre: "Tidio Chat cookies", finalidad: "Cookies del chat en vivo Tidio para identificar sesiones de chat y preferencias del usuario.", duracion: "1 año", tipo: "Tercero (Tidio)" },
    ],
  },
];

export default function Cookies() {
  const [consent, setConsent] = useState(getCookieConsent());

  const openBanner = () => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  };

  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl font-extrabold text-foreground mb-2">Política de Cookies</h1>
          <p className="text-muted-foreground text-sm">Última actualización: mayo 2026 · En cumplimiento del art. 22.2 LSSICE y el RGPD</p>
        </motion.div>

        {/* Estado actual del consentimiento */}
        {consent && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
            <p className="text-sm font-semibold text-green-800 mb-2 flex items-center gap-2">
              <CheckCircle size={16} /> Tu consentimiento está registrado
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-green-700 mb-3">
              <span>🕒 {new Date(consent.timestamp).toLocaleString("es-ES")}</span>
              <span>· Necesarias: ✅</span>
              <span>· Analíticas: {consent.analiticas ? "✅" : "❌"}</span>
              <span>· Marketing: {consent.marketing ? "✅" : "❌"}</span>
            </div>
            <button onClick={openBanner} className="text-xs bg-white border border-green-300 text-green-700 font-semibold px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
              Cambiar preferencias
            </button>
          </motion.div>
        )}

        {/* Qué son las cookies */}
        <div className="bg-white rounded-2xl border border-border p-6 mb-6">
          <h2 className="font-bold text-foreground mb-3 text-lg">1. ¿Qué son las cookies?</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Las cookies son pequeños archivos de texto que los sitios web colocan en el dispositivo del usuario cuando este los visita. Sirven para que el sitio web recuerde información sobre tu visita (como el idioma preferido y otras opciones), lo que puede facilitar tu próxima visita y hacer que el sitio te resulte más útil. Las cookies desempeñan un papel muy importante y mejoran la experiencia de navegación por la web.
          </p>
        </div>

        {/* Tipos de cookies */}
        <div className="space-y-5 mb-8">
          <h2 className="font-bold text-foreground text-lg px-1">2. Cookies utilizadas en este sitio web</h2>
          {cookieTypes.map((type, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-border p-6"
            >
              <div className="flex items-center gap-2 mb-1">
                {type.icon}
                <h3 className="font-bold text-foreground">{type.name}</h3>
                {type.required
                  ? <span className="ml-auto text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5">Siempre activa</span>
                  : <span className="ml-auto text-xs bg-muted text-muted-foreground rounded-full px-2 py-0.5">Opcional</span>
                }
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{type.desc}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left py-2 px-3 font-semibold text-foreground rounded-tl-lg">Nombre</th>
                      <th className="text-left py-2 px-3 font-semibold text-foreground">Finalidad</th>
                      <th className="text-left py-2 px-3 font-semibold text-foreground">Duración</th>
                      <th className="text-left py-2 px-3 font-semibold text-foreground rounded-tr-lg">Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {type.cookies.map((c, j) => (
                      <tr key={j} className="border-t border-border">
                        <td className="py-2 px-3 font-mono text-foreground">{c.nombre}</td>
                        <td className="py-2 px-3 text-muted-foreground">{c.finalidad}</td>
                        <td className="py-2 px-3 text-muted-foreground">{c.duracion}</td>
                        <td className="py-2 px-3 text-muted-foreground">{c.tipo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cómo desactivar */}
        <div className="bg-white rounded-2xl border border-border p-6 mb-6">
          <h2 className="font-bold text-foreground mb-3 text-lg">3. Cómo deshabilitar o eliminar las cookies</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador. A continuación le facilitamos los enlaces de soporte de los navegadores más comunes:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
              { name: "Mozilla Firefox", url: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" },
              { name: "Safari", url: "https://support.apple.com/es-es/guide/safari/sfri11471/mac" },
              { name: "Microsoft Edge", url: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406" },
              { name: "Opera", url: "https://help.opera.com/en/latest/web-preferences/#cookies" },
            ].map((b, i) => (
              <a key={i} href={b.url} target="_blank" rel="noreferrer"
                className="text-xs text-primary underline hover:no-underline font-medium px-3 py-2 bg-primary/5 rounded-lg">
                {b.name} →
              </a>
            ))}
          </div>
        </div>

        {/* Cambiar preferencias */}
        <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 text-center">
          <h2 className="font-bold text-foreground mb-2">Cambiar mis preferencias de cookies</h2>
          <p className="text-sm text-muted-foreground mb-4">Puedes modificar tu consentimiento en cualquier momento.</p>
          <button onClick={openBanner} className="bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
            Abrir panel de configuración
          </button>
        </div>
      </div>
    </main>
  );
}
