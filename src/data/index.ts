export const PRECIOS_ANUALES = [
  { nivel: "Infantil", precio: 65, descripcion: "3–6 años", descuento: false },
  { nivel: "Primaria", precio: 70, descripcion: "6–12 años", descuento: false },
  { nivel: "Secundaria", precio: 80, descripcion: "12–18 años", descuento: true },
  { nivel: "A1 / A2", precio: 80, descripcion: "Nivel básico adultos", descuento: true },
  { nivel: "B1 / B2", precio: 80, descripcion: "Nivel intermedio adultos", descuento: true },
  { nivel: "B2 Viernes", precio: 90, descripcion: "Clase viernes intensiva", descuento: true },
  { nivel: "C1", precio: 90, descripcion: "Nivel avanzado", descuento: true },
];

export const PRECIOS_VERANO = {
  antiguos: { semana: 100, mes: 300 },
  nuevos: { semana: 120, mes: 360 },
};

export const METODOLOGIA = [
  {
    titulo: "Grupos Reducidos",
    descripcion: "Entre 6 y 8 alumnos por clase para una atención personalizada y mayor participación.",
    icono: "👥",
  },
  {
    titulo: "Profesores Cualificados",
    descripcion: "Nativos y bilingües con amplia experiencia docente y materiales Oxford University Press.",
    icono: "🎓",
  },
  {
    titulo: "Clases Dinámicas",
    descripcion: "Metodología comunicativa basada en situaciones reales, conversación y práctica activa.",
    icono: "💬",
  },
  {
    titulo: "Seguimiento Continuo",
    descripcion: "Evaluaciones periódicas y comunicación constante con familias para asegurar el progreso.",
    icono: "📈",
  },
];

export const TALLERES_VERANO = [
  "English Through Stories",
  "Conversation Club",
  "Cambridge Exam Prep",
  "Business English",
  "English for Teenagers",
  "Kids' Fun English",
];
