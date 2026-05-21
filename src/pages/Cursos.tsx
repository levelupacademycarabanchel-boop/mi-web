import { motion } from "framer-motion";
import { PRECIOS_ANUALES, TALLERES_VERANO, PRECIOS_VERANO } from "@/data/index";
import { CheckCircle, Sun, Calendar, Users, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/index";

export default function Cursos() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Nuestros Cursos
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos cursos de inglés para todos los niveles y edades. Desde infantil hasta C1, con la mejor atención personalizada.
          </p>
        </motion.div>

        {/* Cursos anuales */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-2">📚 Cursos Todo el Año</h2>
          <p className="text-muted-foreground mb-8">Precio mensual por nivel. Clases durante todo el curso académico.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-6">
            {PRECIOS_ANUALES.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-foreground text-lg">{p.nivel}</h3>
                  {p.descuento && (
                    <span className="text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5 font-semibold">
                      -10% referidos
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-5">{p.descripcion}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-primary">{p.precio}€</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-primary rounded-2xl p-6 text-primary-foreground"
            >
              <h3 className="font-bold text-xl mb-2">Clase Particular</h3>
              <p className="text-primary-foreground/80 text-sm mb-5">Atención personalizada 1 a 1</p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">25€</span>
                <span className="text-primary-foreground/70">/hora</span>
              </div>
            </motion.div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex gap-3 items-start max-w-xl">
            <CheckCircle className="text-green-600 mt-0.5 shrink-0" size={20} />
            <p className="text-sm text-green-800">
              <strong>Descuento 10%</strong> al traer amigos o familiares (excepto Infantil y Primaria).
            </p>
          </div>
        </section>

        {/* Cursos verano */}
        <section>
          <div className="flex items-center gap-2 mb-2">
            <Sun className="text-yellow-500" size={28} />
            <h2 className="text-2xl font-bold text-foreground">Cursos Intensivos de Verano</h2>
          </div>
          <p className="text-muted-foreground mb-8">Cursos semanales y mensuales con talleres de inglés. ¡Mejora tu nivel durante el verano!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Alumnos actuales */}
            <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users size={20} className="text-primary" />
                <span className="font-bold text-foreground">Para alumnos actuales</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-border">
                  <span className="text-sm text-muted-foreground flex items-center gap-2"><Calendar size={14} /> Por semana</span>
                  <span className="font-extrabold text-primary text-xl">{PRECIOS_VERANO.antiguos.semana}€</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-border">
                  <span className="text-sm text-muted-foreground flex items-center gap-2"><Zap size={14} /> Mes completo</span>
                  <span className="font-extrabold text-primary text-xl">{PRECIOS_VERANO.antiguos.mes}€</span>
                </div>
              </div>
            </div>

            {/* Alumnos nuevos */}
            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users size={20} className="text-orange-500" />
                <span className="font-bold text-foreground">Para alumnos nuevos</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-border">
                  <span className="text-sm text-muted-foreground flex items-center gap-2"><Calendar size={14} /> Por semana</span>
                  <span className="font-extrabold text-orange-500 text-xl">{PRECIOS_VERANO.nuevos.semana}€</span>
                </div>
                <div className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-border">
                  <span className="text-sm text-muted-foreground flex items-center gap-2"><Zap size={14} /> Mes completo</span>
                  <span className="font-extrabold text-orange-500 text-xl">{PRECIOS_VERANO.nuevos.mes}€</span>
                </div>
              </div>
            </div>
          </div>

          {/* Talleres */}
          <h3 className="font-bold text-foreground mb-4">Talleres incluidos:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {TALLERES_VERANO.map((t, i) => (
              <div key={i} className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 text-sm font-medium text-yellow-800">
                ☀️ {t}
              </div>
            ))}
          </div>

          <Link
            to={ROUTES.VERANO}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Ver programa completo de verano
          </Link>
        </section>

        {/* EXÁMENES OFICIALES */}
        <section className="mt-20">
          <div className="text-center mb-10">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
              Certificaciones oficiales
            </span>
            <h2 className="text-3xl font-extrabold text-foreground mb-3">🎓 Preparación de Exámenes Oficiales</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Te preparamos para obtener las certificaciones de inglés más reconocidas del mundo. Mejora tu CV, accede a universidades internacionales y demuestra tu nivel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Cambridge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl border-2 border-primary/20 p-7 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-extrabold text-foreground mb-1">Cambridge</h3>
              <p className="text-muted-foreground text-sm mb-4">La certificación más reconocida a nivel mundial</p>
              <div className="space-y-2">
                {["KET – A2 Key", "PET – B1 Preliminary", "FCE – B2 First", "CAE – C1 Advanced"].map((ex, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border">
                <span className="text-xs text-green-700 bg-green-100 px-2.5 py-1 rounded-full font-medium">
                  ✓ Válido de por vida
                </span>
              </div>
            </motion.div>

            {/* IELTS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl border-2 border-blue-200 p-7 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-extrabold text-foreground mb-1">IELTS</h3>
              <p className="text-muted-foreground text-sm mb-4">Imprescindible para estudiar o trabajar en el extranjero</p>
              <div className="space-y-2">
                {["IELTS Academic – Universidades", "IELTS General – Trabajo/emigración", "Puntuación 0–9 bandas", "Reconocido en +140 países"].map((ex, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border">
                <span className="text-xs text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full font-medium">
                  ✓ Requisito para visados
                </span>
              </div>
            </motion.div>

            {/* TOEFL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl border-2 border-orange-200 p-7 hover:border-orange-400 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-extrabold text-foreground mb-1">TOEFL</h3>
              <p className="text-muted-foreground text-sm mb-4">El estándar para universidades americanas y canadienses</p>
              <div className="space-y-2">
                {["TOEFL iBT – Internet Based Test", "Puntuación 0–120", "Reconocido en +11.000 centros", "Foco en inglés académico"].map((ex, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border">
                <span className="text-xs text-orange-700 bg-orange-100 px-2.5 py-1 rounded-full font-medium">
                  ✓ Requisito EE.UU. y Canadá
                </span>
              </div>
            </motion.div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-foreground mb-1">¿No sabes qué examen necesitas?</p>
              <p className="text-muted-foreground text-sm">Te asesoramos gratis. Cuéntanos tu objetivo y te recomendamos el camino más corto.</p>
            </div>
            <Link
              to={ROUTES.CONTACTO}
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Consulta gratuita
            </Link>
          </div>
        </section>

        {/* ★ CENTRO EXAMINADOR OFICIAL OXFORD ★ */}
        <section className="mt-20">
          {/* Cabecera */}
          <div className="rounded-3xl bg-gradient-to-br from-primary to-blue-700 text-white p-10 md:p-14 relative overflow-hidden mb-8">
            <div className="absolute right-0 top-0 w-64 h-64 opacity-10 rounded-full bg-white -translate-y-1/3 translate-x-1/3" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 rounded-full px-5 py-2 text-sm font-extrabold mb-6 shadow-md">
                <Award size={17} /> CENTRO EXAMINADOR OFICIAL
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Centro Examinador Oficial de Oxford
              </h2>
              <p className="text-white/85 text-lg max-w-2xl leading-relaxed mb-6">
                Level Up Academy es <strong className="text-white">Centro Examinador Oficial de Oxford University Press</strong>.
                Esto significa que nuestros alumnos pueden realizar sus exámenes oficiales de inglés
                directamente en la academia, sin necesidad de desplazarse a ningún otro centro.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Oxford Test of English", "Oxford Young Learners", "Certificación oficial Oxford", "Exámenes en la propia academia"].map((tag, i) => (
                  <span key={i} className="bg-white/15 border border-white/25 text-white text-sm px-3 py-1.5 rounded-full font-medium">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Qué significa ser centro examinador */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-border p-7 shadow-sm"
            >
              <h3 className="text-lg font-extrabold text-foreground mb-5 flex items-center gap-2">
                <span className="text-2xl">🏛️</span> ¿Qué significa ser Centro Examinador?
              </h3>
              <div className="space-y-4">
                {[
                  { t: "Autorización oficial", d: "Oxford University Press nos ha acreditado como centro autorizado para aplicar, supervisar y certificar los exámenes oficiales de inglés." },
                  { t: "Examinadores formados", d: "Nuestros profesores están formados y certificados específicamente para aplicar los exámenes bajo los estándares internacionales de Oxford." },
                  { t: "Resultados oficiales", d: "Los certificados emitidos tienen plena validez oficial y son reconocidos en empresas, universidades y administraciones de todo el mundo." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="text-primary shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.t}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-border p-7 shadow-sm"
            >
              <h3 className="text-lg font-extrabold text-foreground mb-5 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Ventajas para nuestros alumnos
              </h3>
              <div className="space-y-4">
                {[
                  { t: "Sin desplazamientos", d: "El examen se realiza en nuestra academia. El alumno ya conoce el espacio, se siente cómodo y llega al examen sin estrés adicional." },
                  { t: "Preparación + examen en un mismo sitio", d: "Te preparamos durante el curso con los mismos materiales Oxford y te examinamos al final. Coherencia total entre formación y evaluación." },
                  { t: "Ahorro de tiempo y dinero", d: "No hay que pagar desplazamientos ni buscar centros externos. Todo está en Carabanchel, en tu propia academia." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.t}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Exámenes disponibles */}
          <div className="bg-muted/40 rounded-2xl p-7 mb-8">
            <h3 className="text-lg font-extrabold text-foreground mb-5 text-center">📋 Exámenes Oxford que se realizan en la academia</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { nivel: "A1 – Starter", desc: "Primer contacto con el inglés certificado. Ideal para los más pequeños.", badge: "Infantil / Primaria" },
                { nivel: "A2 – Mover", desc: "Certifica un nivel básico de comunicación en situaciones cotidianas.", badge: "Primaria" },
                { nivel: "B1 – Flyer", desc: "Nivel umbral. Capacidad para desenvolverse en situaciones habituales.", badge: "Secundaria" },
                { nivel: "B2 – First", desc: "Nivel intermedio alto. Muy valorado por empresas y universidades.", badge: "Adultos / Bach." },
                { nivel: "C1 – Advanced", desc: "Dominio sólido del inglés. Requisito en muchos puestos profesionales.", badge: "Adultos" },
                { nivel: "Oxford Test of English", desc: "Examen digital, flexible y adaptativo. Resultados en 5 días.", badge: "Todos los niveles" },
              ].map((ex, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white rounded-xl border border-border p-5 hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-foreground text-sm">{ex.nivel}</h4>
                    <span className="text-xs bg-primary/10 text-primary rounded-full px-2 py-0.5 font-medium shrink-0 ml-2">{ex.badge}</span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{ex.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-extrabold text-foreground text-lg mb-1">🏅 ¿Quieres examinarte con nosotros?</p>
              <p className="text-muted-foreground text-sm">Consulta las próximas convocatorias disponibles y reserva tu plaza para el examen.</p>
            </div>
            <Link
              to={ROUTES.CONTACTO}
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Consultar convocatorias
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
