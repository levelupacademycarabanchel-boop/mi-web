import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/index";

export default function Contacto() {
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "", nivel: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await emailjs.send(
      "service_de48uno",
      "template_mycaxwp",
      {
        nombre:   form.nombre,
        email:    form.email,
        telefono: form.telefono,
        nivel:    form.nivel,
        mensaje:  form.mensaje,
      },
      "EleNw51LFz21-7ee2"
    );
    setSent(true);
  };

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Contacto</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            ¿Tienes alguna duda? Escríbenos o llámanos. Te respondemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div>
            <div className="space-y-5 mb-8">
              {[
                { icon: <MapPin size={20} />, label: "Dirección", value: "Calle De La Lonja De La Seda 27, 28054 Madrid" },
                { icon: <Phone size={20} />, label: "Teléfono", value: "600 95 64 40", href: "tel:+34600956440" },
                { icon: <Mail size={20} />, label: "Email", value: "carabanchel@level-up-academy.es", href: "mailto:carabanchel@level-up-academy.es" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 bg-muted/30 rounded-2xl p-4">
                  <div className="bg-primary text-primary-foreground rounded-xl p-2.5">{c.icon}</div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="font-semibold text-foreground hover:text-primary transition-colors">{c.value}</a>
                    ) : (
                      <p className="font-semibold text-foreground">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-4">Horario de atención</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between items-start gap-2">
                  <span className="font-medium text-foreground w-24 shrink-0">Lunes</span>
                  <span className="text-right">17:00 – 20:00</span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <span className="font-medium text-foreground w-24 shrink-0">Martes</span>
                  <span className="text-right">10:00 – 12:00 · 17:00 – 20:00</span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <span className="font-medium text-foreground w-24 shrink-0">Miércoles</span>
                  <span className="text-right">10:00 – 13:00 · 17:00 – 20:00</span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <span className="font-medium text-foreground w-24 shrink-0">Jueves</span>
                  <span className="text-right">10:00 – 12:00 · 17:00 – 20:00</span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <span className="font-medium text-foreground w-24 shrink-0">Viernes</span>
                  <span className="text-right">17:00 – 20:00</span>
                </div>
                <div className="border-t border-primary/10 pt-2 mt-2 flex justify-between items-center">
                  <span className="font-medium text-foreground w-24 shrink-0">Sábado</span>
                  <span className="text-muted-foreground italic">Cerrado</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground w-24 shrink-0">Domingo</span>
                  <span className="text-muted-foreground italic">Cerrado</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 border-t border-primary/10 pt-3">
                * Horario provisional. Sujeto a cambios según temporada.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl border border-border p-8 shadow-sm">
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={52} />
                <h3 className="text-xl font-bold text-foreground mb-2">¡Mensaje enviado!</h3>
                <p className="text-muted-foreground">Te contactaremos en menos de 24 horas.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Nombre *</label>
                    <input required className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Teléfono</label>
                    <input className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={form.telefono} onChange={e => setForm({...form, telefono: e.target.value})} placeholder="600 000 000" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                  <input required type="email" className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Nivel de interés</label>
                  <select className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white" value={form.nivel} onChange={e => setForm({...form, nivel: e.target.value})}>
                    <option value="">Selecciona un nivel</option>
                    <option>Infantil</option>
                    <option>Primaria</option>
                    <option>Secundaria</option>
                    <option>A1 / A2</option>
                    <option>B1 / B2</option>
                    <option>C1</option>
                    <option>Clases Particulares</option>
                    <option>🌞 Curso de Verano</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Mensaje</label>
                  <textarea className="w-full border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" rows={4} value={form.mensaje} onChange={e => setForm({...form, mensaje: e.target.value})} placeholder="Cuéntanos qué necesitas..." />
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-xl border border-border">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={consent}
                    onChange={e => setConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-primary shrink-0 cursor-pointer"
                  />
                  <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                    He leído y acepto la{" "}
                    <Link to={ROUTES.PRIVACIDAD} className="text-primary underline hover:no-underline font-medium">Política de Privacidad</Link>
                    {" "}y consiento el tratamiento de mis datos personales para gestionar mi consulta. Responsable: Level Up Academy (NIF 50649796R).
                  </label>
                </div>
                <button type="submit" disabled={!consent} className="w-full bg-primary text-primary-foreground font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed">
                  <Send size={16} /> Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>

        {/* MAPA GOOGLE MAPS */}
        <div className="mt-12 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-foreground mb-4">📍 Cómo llegar</h2>
          <div className="rounded-3xl overflow-hidden border border-border shadow-sm">
            <iframe
              title="Level Up Academy - Cómo llegar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.5!2d-3.7190!3d40.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle%20De%20La%20Lonja%20De%20La%20Seda%2027%2C%2028054%20Madrid!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3 flex items-center gap-1.5">
            📍 Calle De La Lonja De La Seda 27, 28054 Madrid (Carabanchel) ·
            <a
              href="https://maps.google.com/?q=Calle+De+La+Lonja+De+La+Seda+27,+28054+Madrid"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline hover:no-underline"
            >
              Abrir en Google Maps
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
