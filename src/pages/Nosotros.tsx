import { motion } from "framer-motion";
import { CheckCircle, Users, Star, Heart, BookOpen, Award } from "lucide-react";

export default function Nosotros() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Sobre Nosotros</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una academia de inglés familiar y comprometida con el barrio de Carabanchel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Nuestro objetivo es tu progreso real</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En <strong className="text-foreground">Level Up Academy</strong> creemos que aprender inglés es una de las mejores inversiones que puedes hacer. Por eso nos tomamos muy en serio cada alumno, cada clase y cada objetivo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Trabajamos con <strong className="text-foreground">materiales oficiales Oxford</strong> y somos <strong className="text-foreground">Centro Examinador Oficial Oxford</strong>, lo que significa que preparamos y examinamos a nuestros alumnos aquí mismo, sin desplazamientos.
            </p>
            <ul className="space-y-3">
              {[
                "Clases para todas las edades: niños, jóvenes y adultos",
                "Materiales oficiales Oxford University Press",
                "Centro Examinador Oficial Oxford en la propia academia",
                "Horarios flexibles de mañana y tarde",
                "Seguimiento personalizado y contacto con familias",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle className="text-primary mt-0.5 shrink-0" size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { valor: "10+", label: "Años de experiencia" },
              { valor: "500+", label: "Alumnos formados" },
              { valor: "6–8", label: "Alumnos por clase" },
              { valor: "100%", label: "Profesores titulados" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-primary/5 rounded-2xl p-6 border border-primary/10"
              >
                <p className="text-4xl font-extrabold text-primary mb-1">{s.valor}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 rounded-3xl p-10">
          <h2 className="text-2xl font-extrabold text-foreground mb-8 text-center">Nuestros valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <Heart size={26} />, titulo: "Cercanía", desc: "Somos una academia de barrio. Conocemos a cada alumno por su nombre y nos importa su progreso de verdad." },
              { icon: <Award size={26} />, titulo: "Excelencia", desc: "Materiales Oxford, profesores certificados y un estándar de calidad que no negociamos." },
              { icon: <Users size={26} />, titulo: "Comunidad", desc: "Más que una academia, somos una comunidad. Muchos de nuestros alumnos nos llegan por recomendación." },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="text-primary flex justify-center mb-3">{v.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{v.titulo}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
