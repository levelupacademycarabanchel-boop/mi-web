import { motion } from "framer-motion";
import { PRECIOS_VERANO, TALLERES_VERANO } from "@/data/index";
import { Sun, Calendar, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/index";

const summerImg = "https://images.unsplash.com/photo-1770739879041-22f0dfc37301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80";

export default function Verano() {
  return (
    <main>
      {/* Hero verano */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${summerImg})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 via-yellow-500/80 to-transparent" />
        <div className="relative container mx-auto px-4 py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Sun className="text-white mb-4" size={52} />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              English Summer<br /><span className="text-yellow-200">Courses 2026</span>
            </h1>
            <p className="text-white/90 text-lg max-w-xl">
              Cursos intensivos de inglés, talleres temáticos y actividades en inglés. ¡El verano perfecto para subir de nivel!
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Precios verano */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-foreground mb-3">Precios Cursos de Verano</h2>
          <p className="text-muted-foreground mb-8">Cursos intensivos semanales o por mes completo. Elige la opción que mejor se adapte a ti.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {/* Antiguos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border-2 border-primary bg-primary/5 p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-bold">ALUMNOS ACTUALES</span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1"><Calendar size={14} /> Por semana</p>
                  <p className="text-5xl font-extrabold text-primary">{PRECIOS_VERANO.antiguos.semana}€</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1"><Zap size={14} /> Mes completo</p>
                  <p className="text-5xl font-extrabold text-primary">{PRECIOS_VERANO.antiguos.mes}€</p>
                  <p className="text-xs text-green-600 mt-1 font-medium">✓ Ahorra {PRECIOS_VERANO.antiguos.semana * 4 - PRECIOS_VERANO.antiguos.mes}€ vs. 4 semanas</p>
                </div>
              </div>
            </motion.div>

            {/* Nuevos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl border-2 border-orange-400 bg-orange-50 p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-orange-500 text-white rounded-full px-3 py-1 text-xs font-bold">ALUMNOS NUEVOS</span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1"><Calendar size={14} /> Por semana</p>
                  <p className="text-5xl font-extrabold text-orange-500">{PRECIOS_VERANO.nuevos.semana}€</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1"><Zap size={14} /> Mes completo</p>
                  <p className="text-5xl font-extrabold text-orange-500">{PRECIOS_VERANO.nuevos.mes}€</p>
                  <p className="text-xs text-green-600 mt-1 font-medium">✓ Ahorra {PRECIOS_VERANO.nuevos.semana * 4 - PRECIOS_VERANO.nuevos.mes}€ vs. 4 semanas</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Talleres */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-foreground mb-3">Talleres de Verano</h2>
          <p className="text-muted-foreground mb-8">Aprendizaje dinámico y divertido a través de talleres temáticos completamente en inglés.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TALLERES_VERANO.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-5 flex items-center gap-3"
              >
                <span className="text-2xl">☀️</span>
                <span className="font-semibold text-foreground">{t}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Qué incluye */}
        <section className="mb-16 bg-muted/40 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">¿Qué incluyen los cursos de verano?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Clases de inglés intensivas todos los días",
              "Talleres temáticos en inglés",
              "Materiales incluidos",
              "Profesores titulados y especializados",
              "Grupos reducidos (6 a 8 alumnos)",
              "Certificado de participación",
              "Actividades lúdicas en inglés",
              "Seguimiento del progreso",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle className="text-primary shrink-0" size={18} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-primary rounded-3xl p-10 text-primary-foreground">
          <Sun className="mx-auto mb-4" size={40} />
          <h2 className="text-3xl font-extrabold mb-3">¡Plazas limitadas!</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
            Reserva ya tu plaza para el verano. Las inscripciones están abiertas y los grupos se llenan rápido.
          </p>
          <Link
            to={ROUTES.CONTACTO}
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-yellow-50 transition-all hover:scale-105"
          >
            Inscríbete ahora <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
