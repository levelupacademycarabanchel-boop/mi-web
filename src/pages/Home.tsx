import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/index";
import { PRECIOS_ANUALES, METODOLOGIA, PRECIOS_VERANO } from "@/data/index";
import { ArrowRight, Star, Users, BookOpen, Sun, CheckCircle, Award, MapPin, Clock, Phone, MessageCircle, Brain } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1758270704226-db897b180243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80";
const classImg = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80";
const summerImg = "https://images.unsplash.com/photo-1770739879041-22f0dfc37301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-3 border border-white/30">
              <span>🇬🇧</span> Academia de inglés en Carabanchel, Madrid
            </div>
            <div className="inline-flex items-center gap-2 bg-yellow-400/90 text-yellow-900 rounded-full px-4 py-1.5 text-sm font-bold mb-6 border border-yellow-300">
              <Award size={15} /> Centro Examinador Oficial Oxford · Exámenes en la academia
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Aprende inglés<br />
              <span className="text-yellow-300">con confianza</span>
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Mejora tu nivel, tu fluidez y tus oportunidades. Clases dinámicas, profesores cualificados y grupos reducidos para todas las edades.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={ROUTES.CURSOS}
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-50 transition-all hover:scale-105 shadow-lg"
              >
                Ver todos los cursos <ArrowRight size={18} />
              </Link>
              <Link
                to={ROUTES.VERANO}
                className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 font-bold px-6 py-3.5 rounded-xl hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg"
              >
                🌞 Cursos de Verano
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { icon: <Users size={20} />, label: "Grupos reducidos", sub: "Entre 6 y 8 alumnos" },
                { icon: <Star size={20} />, label: "Profesores titulados", sub: "Especializados y certificados" },
                { icon: <BookOpen size={20} />, label: "Todos los niveles", sub: "Infantil hasta C1" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="flex items-center gap-2.5 bg-white/15 border border-white/25 rounded-xl px-4 py-2.5 text-white"
                >
                  <div className="text-yellow-300">{s.icon}</div>
                  <div>
                    <p className="font-semibold text-sm">{s.label}</p>
                    <p className="text-xs text-white/70">{s.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ★ CENTRO EXAMINADOR OXFORD ★ */}
      <section className="py-14 bg-gradient-to-r from-primary via-primary to-blue-700 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 rounded-full px-5 py-2 text-sm font-extrabold mb-5 shadow-lg">
              <Award size={18} /> CENTRO EXAMINADOR OFICIAL
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Examínate <span className="text-yellow-300">aquí mismo</span>
            </h2>
            <p className="text-white/85 text-lg max-w-2xl mx-auto">
              Somos Centro Examinador Oficial de <strong className="text-white">Oxford</strong>.
              Tus alumnos no tienen que ir a ningún otro sitio — los exámenes se realizan directamente en nuestra academia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">
            {[
              {
                icon: <MapPin size={26} />,
                titulo: "Sin desplazamientos",
                desc: "El examen se hace aquí, en nuestra academia de Carabanchel. Sin viajes, sin estrés extra.",
              },
              {
                icon: <Award size={26} />,
                titulo: "Certificación Oxford oficial",
                desc: "Títulos reconocidos internacionalmente, con la garantía y el prestigio de Oxford University Press.",
              },
              {
                icon: <Clock size={26} />,
                titulo: "Preparación + examen",
                desc: "Te preparamos durante el curso y te examinamos. Un proceso completo en un mismo lugar.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors"
              >
                <div className="text-yellow-300 flex justify-center mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.titulo}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to={ROUTES.CURSOS}
              className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 font-extrabold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg text-base"
            >
              Ver exámenes disponibles <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              ¿Por qué <span className="text-primary">Level Up Academy?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Nuestra metodología está diseñada para que aprendas inglés de forma efectiva y duradera.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METODOLOGIA.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <div className="text-4xl mb-4">{m.icono}</div>
                <h3 className="font-bold text-foreground mb-2">{m.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS CURSOS TODO EL AÑO */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Cursos por Niveles
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Clases durante todo el curso académico. Precio mensual por nivel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-8">
            {PRECIOS_ANUALES.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-border p-6 hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {p.nivel}
                  </h3>
                  {p.descuento && (
                    <span className="text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5 font-medium">
                      -10% amigos
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-4">{p.descripcion}</p>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-extrabold text-primary">{p.precio}€</span>
                  <span className="text-muted-foreground text-sm mb-1">/mes</span>
                </div>
              </motion.div>
            ))}

            {/* Clases particulares */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-primary rounded-2xl p-6 text-primary-foreground"
            >
              <h3 className="font-bold mb-2">Clases Particulares</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Atención 1 a 1, a tu ritmo
              </p>
              <div className="flex items-end gap-1">
                <span className="text-3xl font-extrabold">25€</span>
                <span className="text-primary-foreground/70 text-sm mb-1">/hora</span>
              </div>
            </motion.div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 flex items-start gap-3 max-w-2xl mx-auto">
            <CheckCircle className="text-green-600 mt-0.5 shrink-0" size={20} />
            <p className="text-sm text-green-800">
              <strong>¡10% de descuento</strong> por traer amigos o familiares a la academia.
              Aplicable a todos los cursos excepto Infantil, Primaria y Clases Particulares.
            </p>
          </div>
        </div>
      </section>

      {/* ★ COMPARATIVA ★ */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">¿Por qué Level Up Academy?</h2>
            <p className="text-muted-foreground">Compara y decide. Los números hablan por sí solos.</p>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto border-separate border-spacing-y-1 text-sm">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium w-1/3"></th>
                  <th className="py-3 px-5 bg-primary text-primary-foreground rounded-t-xl font-bold text-center">Level Up Academy</th>
                  <th className="py-3 px-4 text-muted-foreground font-medium text-center">Academia estándar</th>
                  <th className="py-3 px-4 text-muted-foreground font-medium text-center">Online</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label:"Tamaño del grupo",          lu:"✅ 6-8 alumnos",      std:"❌ 15-20 alumnos",   on:"— Variable" },
                  { label:"Centro Examinador Oxford",  lu:"✅ Sí, aquí mismo",   std:"❌ No disponible",   on:"❌ No disponible" },
                  { label:"Precio mensual",             lu:"✅ Desde 65€/mes",    std:"⚠️ Más elevado",     on:"⚠️ Variable" },
                  { label:"Atención personalizada",     lu:"✅ Total",            std:"⚠️ Limitada",        on:"❌ Ninguna" },
                  { label:"Materiales Oxford oficiales",lu:"✅ Incluidos",        std:"⚠️ Variable",        on:"⚠️ Variable" },
                  { label:"Ubicación Carabanchel",      lu:"✅ Tu barrio",        std:"❌ Lejos de casa",   on:"❌ Solo online" },
                ].map((row, i) => (
                  <tr key={i} className="rounded-xl overflow-hidden">
                    <td className="py-3 px-4 font-medium text-foreground bg-white rounded-l-xl">{row.label}</td>
                    <td className="py-3 px-4 text-center bg-primary/8 font-semibold text-primary">{row.lu}</td>
                    <td className="py-3 px-4 text-center bg-white text-muted-foreground">{row.std}</td>
                    <td className="py-3 px-4 text-center bg-white text-muted-foreground rounded-r-xl">{row.on}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BANNER VERANO */}
      <section className="py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${summerImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/90 to-orange-500/80" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sun className="mx-auto text-white mb-3" size={48} />
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              🌞 Cursos Intensivos de Verano
            </h2>
            <p className="text-white/90 text-lg max-w-xl mx-auto mb-6">
              Cursos semanales y mensuales de inglés intensivo con talleres temáticos. ¡Aprovecha el verano para subir de nivel!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 border border-white/40 rounded-2xl px-6 py-4 text-white">
                <p className="text-sm text-white/80">Alumnos actuales</p>
                <p className="text-2xl font-extrabold">100€<span className="text-sm font-normal">/semana</span></p>
                <p className="text-sm text-white/80">o 300€/mes</p>
              </div>
              <div className="bg-white rounded-2xl px-6 py-4 text-orange-700">
                <p className="text-sm text-orange-500">Alumnos nuevos</p>
                <p className="text-2xl font-extrabold">120€<span className="text-sm font-normal">/semana</span></p>
                <p className="text-sm text-orange-500">o 360€/mes</p>
              </div>
            </div>
            <Link
              to={ROUTES.VERANO}
              className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-xl hover:bg-yellow-50 transition-all hover:scale-105 shadow-lg"
            >
              Ver programa de verano <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SOBRE NOSOTROS preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={classImg}
                alt="Clases de inglés Level Up Academy"
                className="rounded-3xl shadow-xl w-full object-cover h-80"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Tu academia de confianza<br />
                <span className="text-primary">en Carabanchel</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En Level Up Academy llevamos años ayudando a familias y adultos de Carabanchel a alcanzar sus metas en inglés. Trabajamos con materiales <strong className="text-foreground">Oxford</strong>, desde los más pequeños hasta profesionales que necesitan el idioma para su carrera.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Clases para todas las edades: niños, jóvenes y adultos",
                  "Materiales oficiales Oxford University Press",
                  "Preparación oficial Cambridge, IELTS y TOEFL",
                  "Horarios flexibles mañana, tarde y fines de semana",
                  "Seguimiento personalizado y comunicación con familias",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle className="text-primary mt-0.5 shrink-0" size={17} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={ROUTES.NOSOTROS}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Conócenos mejor <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ★ CLASE DE PRUEBA GRATIS ★ */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-border overflow-hidden">
            <div className="bg-primary px-8 py-8 text-center text-primary-foreground">
              <div className="text-5xl mb-3">🎁</div>
              <h2 className="text-2xl font-extrabold mb-2">Primera clase completamente gratis</h2>
              <p className="text-primary-foreground/80 text-sm">Sin compromiso. Sin tarjeta. Solo ven y comprueba tú mismo.</p>
            </div>
            <div className="p-8">
              <div className="space-y-4 mb-6">
                {[
                  { label:"Tu nombre", placeholder:"Ej: María García" },
                  { label:"Teléfono de contacto", placeholder:"Ej: 600 000 000" },
                ].map((f, i) => (
                  <div key={i}>
                    <label className="text-sm font-semibold text-foreground block mb-1">{f.label}</label>
                    <div className="border border-border rounded-xl px-4 py-3 text-muted-foreground text-sm bg-muted/30">{f.placeholder}</div>
                  </div>
                ))}
                <div>
                  <label className="text-sm font-semibold text-foreground block mb-1">Nivel aproximado</label>
                  <div className="border border-border rounded-xl px-4 py-3 text-muted-foreground text-sm bg-muted/30">
                    No lo sé todavía / A1 / A2 / B1 / B2 / C1
                  </div>
                  <Link to={ROUTES.TEST_NIVEL} className="text-xs text-primary font-semibold mt-1 inline-flex items-center gap-1 hover:underline">
                    <Brain size={12} /> ¿No sabes tu nivel? Haz el test gratis →
                  </Link>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center mb-4">
                Mándanos un WhatsApp con tu nombre y nivel y te confirmamos la fecha al momento.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/34600956440?text=${encodeURIComponent("Hola, me gustaría reservar mi primera clase gratuita en Level Up Academy. ¿Cómo lo hacemos?")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-all hover:scale-105"
                >
                  <MessageCircle size={18} /> Reservar por WhatsApp
                </a>
                <a
                  href="tel:+34600956440"
                  className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3.5 rounded-xl hover:opacity-90 transition-all hover:scale-105"
                >
                  <Phone size={18} /> Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA CONTACTO */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground mb-4">
            ¿Listo para subir de nivel?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Contacta con nosotros hoy mismo. Te asesoramos sin compromiso y te ayudamos a encontrar el curso perfecto.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to={ROUTES.CONTACTO}
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-xl hover:bg-yellow-50 transition-all"
            >
              Contactar ahora
            </Link>
            <a
              href="tel:+34600956440"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all"
            >
              📞 600 95 64 40
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
