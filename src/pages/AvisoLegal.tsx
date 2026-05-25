import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Datos identificativos del titular",
    content: `En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa que el presente sitio web es titularidad de:

• Denominación: Level Up Academy
• NIF: 50649796R
• Domicilio fiscal: Calle General Ricardos 145 A2, Madrid
• Teléfono: 600 95 64 40
• Email: carabanchel@level-up-academy.es
• Web: www.level-up-academy.es`,
  },
  {
    title: "2. Objeto y ámbito de aplicación",
    content: `El presente Aviso Legal regula el acceso y uso del sitio web www.level-up-academy.es (en adelante, "el Sitio Web"), incluyendo los contenidos y servicios ofrecidos a través del mismo. El acceso al Sitio Web implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.

Level Up Academy se reserva el derecho a modificar, en cualquier momento, la presentación y configuración del Sitio Web, así como el presente Aviso Legal. El usuario es responsable de consultar el Aviso Legal vigente cada vez que acceda al Sitio Web.`,
  },
  {
    title: "3. Condiciones de acceso y uso",
    content: `El acceso al Sitio Web es gratuito. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Level Up Academy ofrece, y a no emplearlos para:

• Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.
• Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico o que atente contra los derechos humanos.
• Provocar daños en los sistemas físicos y lógicos del Sitio Web o de terceros.
• Introducir o difundir virus informáticos o cualquier otro sistema físico o lógico que sea susceptible de provocar daños en los sistemas.`,
  },
  {
    title: "4. Propiedad intelectual e industrial",
    content: `Todos los contenidos del Sitio Web, incluyendo, a título enunciativo pero no limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de Level Up Academy o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del Sitio Web.

Queda prohibida la reproducción, distribución, comunicación pública y transformación de los contenidos sin autorización previa y por escrito de Level Up Academy.`,
  },
  {
    title: "5. Exclusión de garantías y responsabilidad",
    content: `Level Up Academy no garantiza la disponibilidad y continuidad del funcionamiento del Sitio Web. Asimismo, Level Up Academy no será responsable por los daños y perjuicios que puedan derivarse de:

• La falta de disponibilidad o accesibilidad al Sitio Web.
• La interrupción en el funcionamiento del Sitio Web o fallos informáticos, averías telefónicas, desconexiones, retrasos o bloqueos causados por deficiencias o sobrecargas en las líneas telefónicas, en el sistema de Internet o en otros sistemas electrónicos.
• La presencia de virus o de otros elementos lesivos en los contenidos que puedan producir alteraciones en los sistemas informáticos del usuario.`,
  },
  {
    title: "6. Hiperenlaces",
    content: `El Sitio Web puede contener enlaces a sitios web de terceros. Level Up Academy no tiene control sobre esos sitios y páginas web, no es responsable ni de los contenidos ni de las condiciones de privacidad y uso de los mismos. Los hiperenlaces se facilitan con fines informativos y no implican ningún tipo de relación entre Level Up Academy y los titulares de los sitios enlazados, ni garantiza ni se responsabiliza de la licitud, fiabilidad, utilidad, veracidad y actualidad de los contenidos de dichos sitios.`,
  },
  {
    title: "7. Legislación aplicable y jurisdicción",
    content: `El presente Aviso Legal se rige en todos y cada uno de sus extremos por la ley española. Level Up Academy y el usuario, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, se someten a los Juzgados y Tribunales del domicilio del usuario para cualquier controversia que pudiera derivarse del acceso o uso del Sitio Web. En el caso de que el usuario tenga su domicilio fuera de España, Level Up Academy y el usuario se someten, con renuncia expresa a cualquier otro fuero, a los juzgados y tribunales de Madrid.`,
  },
];

export default function AvisoLegal() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl font-extrabold text-foreground mb-2">Aviso Legal</h1>
          <p className="text-muted-foreground text-sm">Última actualización: mayo 2026</p>
        </motion.div>
        <div className="space-y-8">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-border p-6"
            >
              <h2 className="font-bold text-foreground mb-3 text-lg">{s.title}</h2>
              <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{s.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
