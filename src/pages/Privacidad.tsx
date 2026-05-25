import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Responsable del tratamiento",
    content: `• Denominación: Level Up Academy
• NIF: 50649796R
• Domicilio: Calle General Ricardos 145 A2, Madrid
• Teléfono: 600 95 64 40
• Email: carabanchel@level-up-academy.es

Puede contactar con nosotros a través de los datos anteriores para cualquier cuestión relacionada con el tratamiento de sus datos personales.`,
  },
  {
    title: "2. Finalidades y base legitimadora del tratamiento",
    content: `Los datos personales recabados a través del formulario de contacto del Sitio Web serán tratados para las siguientes finalidades:

• Gestión de consultas y solicitudes de información: Base legitimadora: consentimiento del interesado (art. 6.1.a RGPD).
• Envío de información sobre nuestros servicios educativos, cursos y actividades: Base legitimadora: consentimiento del interesado (art. 6.1.a RGPD).
• Gestión de la relación contractual con alumnos matriculados: Base legitimadora: ejecución de un contrato (art. 6.1.b RGPD).
• Cumplimiento de obligaciones legales: Base legitimadora: cumplimiento de una obligación legal (art. 6.1.c RGPD).`,
  },
  {
    title: "3. Datos tratados",
    content: `Los datos personales que podemos tratar son los siguientes:
    
• Datos identificativos: nombre y apellidos.
• Datos de contacto: teléfono, dirección de correo electrónico.
• Datos académicos: nivel de inglés u otra información que facilite voluntariamente.
• Datos de comunicación: contenido de los mensajes enviados a través del formulario de contacto.

No tratamos categorías especiales de datos (datos sensibles). El suministro de datos personales requiere una edad mínima de 16 años. En el caso de menores de 16 años, se requerirá el consentimiento de sus padres o tutores legales.`,
  },
  {
    title: "4. Destinatarios",
    content: `Los datos no serán cedidos a terceros salvo en los siguientes supuestos:

• Cuando exista una obligación legal que lo requiera.
• A proveedores de servicios necesarios para la prestación del servicio (ej. proveedor de hosting, plataforma de gestión de formularios Formspree, Inc. con base en EE.UU. con garantías adecuadas conforme al RGPD).

Level Up Academy no realiza transferencias internacionales de datos a países que no ofrezcan un nivel adecuado de protección, salvo cuando sea estrictamente necesario y con las garantías adecuadas.`,
  },
  {
    title: "5. Plazo de conservación",
    content: `Los datos personales serán conservados durante el tiempo necesario para la finalidad para la que se recabaron:

• Datos de consultas/contacto: durante el tiempo necesario para atender la solicitud y, posteriormente, durante los plazos de prescripción legal aplicables (generalmente 5 años).
• Datos de alumnos matriculados: durante la vigencia de la relación contractual y, posteriormente, durante los plazos legales de conservación (hasta 10 años para obligaciones mercantiles y fiscales).
• Datos de comunicaciones comerciales: hasta que el interesado retire su consentimiento.`,
  },
  {
    title: "6. Derechos de los interesados",
    content: `Puede ejercer en cualquier momento los siguientes derechos:

• Derecho de acceso: Conocer qué datos personales tratamos sobre usted.
• Derecho de rectificación: Solicitar la corrección de datos inexactos.
• Derecho de supresión ("derecho al olvido"): Solicitar la eliminación de sus datos.
• Derecho de limitación: Solicitar que limitemos el tratamiento de sus datos.
• Derecho de portabilidad: Recibir sus datos en formato estructurado.
• Derecho de oposición: Oponerse al tratamiento de sus datos.
• Derecho a retirar el consentimiento en cualquier momento.

Para ejercer estos derechos, diríjase por escrito a: carabanchel@level-up-academy.es, indicando su nombre, apellidos, DNI/NIE y el derecho que desea ejercer.

Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).`,
  },
  {
    title: "7. Medidas de seguridad",
    content: `Level Up Academy ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos, todo ello de conformidad con lo previsto en el Reglamento General de Protección de Datos (RGPD) y en la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).`,
  },
  {
    title: "8. Modificaciones de la política de privacidad",
    content: `Level Up Academy se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales. En dichos supuestos, anunciará en esta página los cambios introducidos con razonable antelación a su puesta en práctica. Le recomendamos que consulte esta página periódicamente.`,
  },
];

export default function Privacidad() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl font-extrabold text-foreground mb-2">Política de Privacidad</h1>
          <p className="text-muted-foreground text-sm">Última actualización: mayo 2026 · En cumplimiento del RGPD (UE) 2016/679 y la LOPDGDD 3/2018</p>
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
