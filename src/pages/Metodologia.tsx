import { motion } from "framer-motion";
import { METODOLOGIA } from "@/data/index";
import { BookOpen, Award, Heart } from "lucide-react";

const classImg = "https://images.unsplash.com/photo-1761208662734-fb46f1398551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80";

export default function Metodologia() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Nuestra Metodología</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Apostamos por un aprendizaje comunicativo, dinámico y adaptado a cada alumno.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src={classImg} alt="Clase de inglés" className="rounded-3xl shadow-xl w-full object-cover h-72" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Aprender inglés de verdad</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              En Level Up Academy creemos que el inglés se aprende usándolo. Por eso nuestras clases están diseñadas para que los alumnos hablen, escuchen, lean y escriban desde el primer día.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Combinamos los mejores materiales internacionales con el enfoque práctico de nuestros profesores, creando un ambiente donde aprender es natural y motivador.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {METODOLOGIA.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-4">{m.icono}</div>
              <h3 className="font-bold text-foreground mb-2">{m.titulo}</h3>
              <p className="text-muted-foreground text-sm">{m.descripcion}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <BookOpen size={24} />, title: "Materiales premium", desc: "Usamos los mejores libros y recursos digitales del mercado, actualizados constantemente." },
            { icon: <Award size={24} />, title: "Preparación oficial", desc: "Preparamos para Cambridge (KET, PET, FCE, CAE), IELTS, TOEFL y otros exámenes internacionales." },
            { icon: <Heart size={24} />, title: "Ambiente familiar", desc: "Somos una academia de barrio. Nos importa cada alumno y trabajamos con dedicación y cercanía." },
          ].map((item, i) => (
            <div key={i} className="bg-primary/5 border border-primary/15 rounded-2xl p-6">
              <div className="text-primary mb-3">{item.icon}</div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
