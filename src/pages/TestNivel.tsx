import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, ChevronRight, RotateCcw, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/index";

const WA_NUMBER = "34600956440";

type Level = "A1" | "A2" | "B1" | "B2" | "C1";

interface Question {
  id: number;
  level: Level;
  q: string;
  opts: string[];
  a: string;
}

const ALL_QUESTIONS: Question[] = [
  // ── A1 ──────────────────────────────────────────────────────────────
  { id: 1,  level:"A1", q:"What ___ your name?",                                    opts:["is","are","am","be"],                                  a:"is" },
  { id: 2,  level:"A1", q:"She ___ a teacher.",                                      opts:["am","is","are","has"],                                 a:"is" },
  { id: 3,  level:"A1", q:"___ you from Spain?",                                     opts:["Are","Is","Am","Be"],                                  a:"Are" },
  { id: 4,  level:"A1", q:"How ___ are you?",                                        opts:["old","older","much","many"],                           a:"old" },
  { id: 5,  level:"A1", q:"I ___ two brothers.",                                     opts:["has","have","am","is"],                                a:"have" },
  { id: 6,  level:"A1", q:"They ___ students.",                                      opts:["is","am","are","be"],                                  a:"are" },
  { id: 7,  level:"A1", q:"This ___ my house.",                                      opts:["is","are","am","has"],                                 a:"is" },
  { id: 8,  level:"A1", q:"Do you ___ a pet?",                                       opts:["has","have","had","are"],                              a:"have" },
  { id: 9,  level:"A1", q:"He ___ not like coffee.",                                 opts:["don't","isn't","doesn't","aren't"],                    a:"doesn't" },
  { id: 10, level:"A1", q:"She ___ to school every day.",                            opts:["go","goes","going","gone"],                            a:"goes" },
  // ── A2 ──────────────────────────────────────────────────────────────
  { id: 21, level:"A2", q:"I ___ to London last year.",                              opts:["go","went","gone","goes"],                             a:"went" },
  { id: 22, level:"A2", q:"She ___ a book when I arrived.",                          opts:["reads","read","was reading","is reading"],             a:"was reading" },
  { id: 23, level:"A2", q:"He is ___ than his brother.",                             opts:["tall","taller","tallest","most tall"],                 a:"taller" },
  { id: 24, level:"A2", q:"Can you ___ French?",                                     opts:["speaks","speak","speaking","spoke"],                   a:"speak" },
  { id: 25, level:"A2", q:"There ___ many people at the party.",                     opts:["was","is","are","were"],                               a:"were" },
  { id: 26, level:"A2", q:"This is the ___ film I have ever seen.",                  opts:["bad","worse","worst","most bad"],                      a:"worst" },
  { id: 27, level:"A2", q:"We ___ dinner when he called.",                           opts:["had","have","were having","are having"],               a:"were having" },
  { id: 28, level:"A2", q:"Did you ___ the match?",                                  opts:["watched","watches","watch","watching"],                a:"watch" },
  { id: 29, level:"A2", q:"___ long have you lived here?",                           opts:["What","How","When","Where"],                           a:"How" },
  { id: 30, level:"A2", q:"She is ___ to become a nurse.",                           opts:["go","going","went","gone"],                            a:"going" },
  // ── B1 ──────────────────────────────────────────────────────────────
  { id: 41, level:"B1", q:"If it ___ tomorrow, we'll cancel the trip.",              opts:["rains","rained","will rain","would rain"],             a:"rains" },
  { id: 42, level:"B1", q:"I ___ never been to Japan.",                              opts:["have","has","had","am"],                               a:"have" },
  { id: 43, level:"B1", q:"The letter ___ sent yesterday.",                          opts:["is","was","were","has"],                               a:"was" },
  { id: 44, level:"B1", q:"She ___ here since 2019.",                               opts:["lives","lived","has lived","is living"],               a:"has lived" },
  { id: 45, level:"B1", q:"___ you ever tried sushi?",                              opts:["Did","Have","Do","Were"],                              a:"Have" },
  { id: 46, level:"B1", q:"You ___ smoke in the hospital.",                          opts:["mustn't","don't have to","shouldn't","can't"],         a:"mustn't" },
  { id: 47, level:"B1", q:"By the time we arrived, the concert ___.",               opts:["starts","started","had started","has started"],        a:"had started" },
  { id: 48, level:"B1", q:"He suggested ___ the meeting.",                           opts:["postpone","postponing","to postpone","postponed"],     a:"postponing" },
  { id: 49, level:"B1", q:"She asked me where I ___.",                              opts:["live","lived","am living","have lived"],               a:"lived" },
  { id: 50, level:"B1", q:"I'd rather ___ at home tonight.",                        opts:["stay","staying","to stay","stayed"],                   a:"stay" },
  // ── B2 ──────────────────────────────────────────────────────────────
  { id: 61, level:"B2", q:"If she had studied more, she ___ the exam.",             opts:["would pass","would have passed","had passed","passes"],  a:"would have passed" },
  { id: 62, level:"B2", q:"Not only ___ the test, she also won a prize.",           opts:["she passed","did she pass","had she passed","she had passed"], a:"did she pass" },
  { id: 63, level:"B2", q:"He ___ to have been seen near the crime scene.",         opts:["is said","says","said","was saying"],                  a:"is said" },
  { id: 64, level:"B2", q:"The building ___ by a famous architect in the 1920s.",  opts:["designed","was designed","has designed","is designing"], a:"was designed" },
  { id: 65, level:"B2", q:"___ though it may seem, the plan worked.",              opts:["Strange","Strangely","Stranger","Strangest"],           a:"Strange" },
  { id: 66, level:"B2", q:"She came across ___ very confident in the interview.",   opts:["as","like","such as","so"],                            a:"as" },
  { id: 67, level:"B2", q:"It is high time the company ___ its policy.",            opts:["changes","changed","has changed","will change"],       a:"changed" },
  { id: 68, level:"B2", q:"By this time next year, she ___ her degree.",            opts:["will finish","will have finished","is finishing","finishes"], a:"will have finished" },
  { id: 69, level:"B2", q:"He denied ___ about the problem.",                       opts:["knowing","to know","know","knew"],                     a:"knowing" },
  { id: 70, level:"B2", q:"Provided that you ___ all requirements, you can apply.", opts:["meet","met","have met","will meet"],                   a:"meet" },
  // ── C1 ──────────────────────────────────────────────────────────────
  { id: 81,  level:"C1", q:"The legislation was enacted with a view to ___ corruption.",    opts:["preventing","prevent","be prevented","having prevented"],    a:"preventing" },
  { id: 82,  level:"C1", q:"Not until the report was released ___ the severity of the issue.", opts:["did people realize","people realized","people had realized","had people realized"], a:"did people realize" },
  { id: 83,  level:"C1", q:"Had the government acted sooner, many lives ___ saved.",        opts:["could be","could have been","would be","will have been"],     a:"could have been" },
  { id: 84,  level:"C1", q:"So significant ___ the discovery that it changed the entire field.", opts:["it was","was it","had it been","it had been"],           a:"was it" },
  { id: 85,  level:"C1", q:"His ___ analysis of the situation impressed the entire board.", opts:["incisive","incision","incised","incisively"],                 a:"incisive" },
  { id: 86,  level:"C1", q:"The proposal ___ to have been rejected without proper consideration.", opts:["appears","is appearing","appeared","was appeared"],     a:"appears" },
  { id: 87,  level:"C1", q:"Despite ___ the project on time, the client remained dissatisfied.", opts:["completing","having completed","to complete","complete"], a:"having completed" },
  { id: 88,  level:"C1", q:"No sooner ___ the meeting than arguments broke out.",           opts:["had it started","did it start","it started","it had started"], a:"had it started" },
  { id: 89,  level:"C1", q:"She put forward a ___ argument in favour of the proposal.",    opts:["compelling","compelled","compel","compellingly"],             a:"compelling" },
  { id: 90,  level:"C1", q:"The CEO stepped ___ following the scandal.",                   opts:["down","aside","back","out"],                                  a:"down" },
];

const LEVELS: Level[] = ["A1","A2","B1","B2","C1"];

const LEVEL_INFO: Record<Level, { color: string; bg: string; emoji: string; desc: string; next: string }> = {
  A1: { color:"text-green-700",  bg:"bg-green-50 border-green-200",  emoji:"🌱", desc:"Nivel básico. Entiendes y usas expresiones cotidianas simples.", next:"Perfecto para empezar desde cero o refrescar lo básico." },
  A2: { color:"text-blue-700",   bg:"bg-blue-50 border-blue-200",    emoji:"📘", desc:"Nivel elemental. Te comunicas en situaciones habituales y sencillas.", next:"Listo para consolidar y avanzar hacia el B1." },
  B1: { color:"text-indigo-700", bg:"bg-indigo-50 border-indigo-200",emoji:"🎯", desc:"Nivel intermedio. Te desenvuelves en la mayoría de situaciones.", next:"Estás a un paso del B2, ¡un gran salto para el mercado laboral!" },
  B2: { color:"text-purple-700", bg:"bg-purple-50 border-purple-200",emoji:"🚀", desc:"Nivel avanzado. Te expresas con fluidez y espontaneidad.", next:"Muy valorado por empresas y universidades. Plantéate el C1." },
  C1: { color:"text-orange-700", bg:"bg-orange-50 border-orange-200",emoji:"🏆", desc:"Nivel experto. Usas el inglés de forma flexible y eficaz.", next:"Nivel de dominio casi nativo. ¡Enhorabuena!" },
};

type Phase = "intro" | "quiz" | "result";

export default function TestNivel() {
  const [phase, setPhase]       = useState<Phase>("intro");
  const [idx, setIdx]           = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [answers, setAnswers]   = useState<Record<number, string>>({});

  const current = ALL_QUESTIONS[idx];
  const total   = ALL_QUESTIONS.length;

  const handleSelect = (opt: string) => {
    if (confirmed) return;
    setSelected(opt);
  };

  const handleConfirm = () => {
    if (!selected) return;
    setAnswers(prev => ({ ...prev, [current.id]: selected }));
    setConfirmed(true);
  };

  const handleNext = () => {
    if (idx + 1 >= total) {
      setPhase("result");
    } else {
      setIdx(i => i + 1);
      setSelected(null);
      setConfirmed(false);
    }
  };

  const restart = () => {
    setPhase("intro"); setIdx(0);
    setSelected(null); setConfirmed(false); setAnswers({});
  };

  // Calcular resultados
  const calcResult = () => {
    const scores: Record<Level, { correct: number; total: number }> = {
      A1:{correct:0,total:10}, A2:{correct:0,total:10},
      B1:{correct:0,total:10}, B2:{correct:0,total:10}, C1:{correct:0,total:10},
    };
    ALL_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.a) scores[q.level].correct++;
    });
    // Nivel = el más alto donde sacan ≥ 60%
    let detected: Level = "A1";
    for (const lvl of LEVELS) {
      if (scores[lvl].correct / scores[lvl].total >= 0.60) detected = lvl;
    }
    return { detected, scores };
  };

  // ── INTRO ─────────────────────────────────────────────────────────
  if (phase === "intro") return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}}>
          <div className="text-7xl mb-4">🧠</div>
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Test de Nivel de Inglés</h1>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            Descubre tu nivel real: <strong>A1, A2, B1, B2 o C1</strong>.<br />
            50 preguntas de gramática y vocabulario, 10 por nivel. Elige la opción correcta en cada caso.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {LEVELS.map(l => (
              <div key={l} className={`rounded-xl border p-3 text-center ${LEVEL_INFO[l].bg}`}>
                <p className="text-xl">{LEVEL_INFO[l].emoji}</p>
                <p className={`font-bold text-sm ${LEVEL_INFO[l].color}`}>{l}</p>
                <p className="text-xs text-muted-foreground mt-0.5">10 preg.</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setPhase("quiz")}
            className="bg-primary text-primary-foreground font-bold px-10 py-4 rounded-2xl text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            ¡Empezar el test!
          </button>
          <p className="text-xs text-muted-foreground mt-4">Sin registro · Resultado inmediato · Gratis</p>
        </motion.div>
      </div>
    </main>
  );

  // ── QUIZ ──────────────────────────────────────────────────────────
  if (phase === "quiz") {
    const levelIdx   = LEVELS.indexOf(current.level);
    const inLevel    = idx - levelIdx * 10 + 1;      // 1..10 dentro del nivel
    const isCorrect  = confirmed && selected === current.a;
    const isWrong    = confirmed && selected !== current.a;

    return (
      <main className="min-h-screen py-10 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Progress global */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className={`font-bold text-sm px-3 py-1 rounded-full border ${LEVEL_INFO[current.level].bg} ${LEVEL_INFO[current.level].color}`}>
                {LEVEL_INFO[current.level].emoji} Nivel {current.level} — Pregunta {inLevel}/10
              </span>
              <span className="text-xs text-muted-foreground">{idx + 1} / {total}</span>
            </div>
            {/* Barra global */}
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                animate={{ width: `${((idx + 1) / total) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {/* Secciones por nivel */}
            <div className="flex gap-1 mt-1">
              {LEVELS.map((l, li) => (
                <div
                  key={l}
                  className={`flex-1 h-1 rounded-full transition-colors ${
                    li < levelIdx ? "bg-primary" :
                    li === levelIdx ? "bg-primary/40" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Tarjeta pregunta */}
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl shadow-lg p-8 border border-border"
            >
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Completa la frase</p>
              <h2 className="text-xl font-bold text-foreground mb-6 leading-relaxed">{current.q}</h2>

              <div className="space-y-3 mb-6">
                {current.opts.map(opt => {
                  let cls = "w-full text-left px-5 py-3.5 rounded-xl border-2 font-medium transition-all ";
                  if (!confirmed) {
                    cls += selected === opt
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50 hover:bg-muted/50 cursor-pointer";
                  } else {
                    if (opt === current.a) cls += "border-green-500 bg-green-50 text-green-700";
                    else if (opt === selected && opt !== current.a) cls += "border-red-400 bg-red-50 text-red-600";
                    else cls += "border-border text-muted-foreground opacity-50";
                  }
                  return (
                    <button key={opt} className={cls} onClick={() => handleSelect(opt)}>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              {confirmed && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 text-sm font-semibold mb-4 ${isCorrect ? "text-green-600" : "text-red-500"}`}
                >
                  {isCorrect
                    ? <><CheckCircle size={18} /> ¡Correcto!</>
                    : <><XCircle size={18} /> La respuesta correcta es: <span className="font-bold">"{current.a}"</span></>
                  }
                </motion.div>
              )}

              <div className="flex gap-3">
                {!confirmed ? (
                  <button
                    onClick={handleConfirm}
                    disabled={!selected}
                    className="flex-1 bg-primary text-primary-foreground font-bold py-3 rounded-xl disabled:opacity-40 hover:opacity-90 transition-all"
                  >
                    Confirmar
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold py-3 rounded-xl hover:opacity-90 transition-all"
                  >
                    {idx + 1 >= total ? "Ver resultado" : "Siguiente"}
                    <ChevronRight size={18} />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    );
  }

  // ── RESULTADO ─────────────────────────────────────────────────────
  const { detected, scores } = calcResult();
  const info = LEVEL_INFO[detected];
  const totalCorrect = Object.values(scores).reduce((s, v) => s + v.correct, 0);

  const waMsg = encodeURIComponent(
    `Hola, acabo de hacer el test de nivel y mi resultado es ${detected}. Me gustaría reservar una clase de prueba gratuita.`
  );

  return (
    <main className="min-h-screen py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}}>
          {/* Resultado principal */}
          <div className={`rounded-3xl border-2 p-8 text-center mb-6 ${info.bg}`}>
            <div className="text-6xl mb-3">{info.emoji}</div>
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Tu nivel es</p>
            <h1 className={`text-7xl font-extrabold mb-3 ${info.color}`}>{detected}</h1>
            <p className={`text-base font-semibold mb-2 ${info.color}`}>{info.desc}</p>
            <p className="text-sm text-muted-foreground">{info.next}</p>
            <div className="mt-4 inline-block bg-white/70 rounded-xl px-5 py-2 text-sm font-bold text-foreground">
              {totalCorrect} / {total} respuestas correctas
            </div>
          </div>

          {/* Desglose por nivel */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-6 mb-6">
            <h3 className="font-bold text-foreground mb-4">Desglose por nivel</h3>
            <div className="space-y-3">
              {LEVELS.map(l => {
                const pct = Math.round((scores[l].correct / scores[l].total) * 100);
                return (
                  <div key={l}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className={`font-semibold ${LEVEL_INFO[l].color}`}>{LEVEL_INFO[l].emoji} {l}</span>
                      <span className="text-muted-foreground">{scores[l].correct}/{scores[l].total} · {pct}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${pct >= 60 ? "bg-green-500" : "bg-red-400"}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-6 text-primary-foreground text-center mb-4">
            <p className="font-bold text-lg mb-1">¿Quieres una clase de prueba gratuita?</p>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Cuéntanos tu resultado y te preparamos una clase personalizada para tu nivel {detected}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waMsg}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href="tel:+34600956440"
                className="flex items-center justify-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-yellow-50 transition-all"
              >
                <Phone size={18} /> Llamar ahora
              </a>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={restart}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <RotateCcw size={15} /> Repetir el test
            </button>
            <Link to={ROUTES.HOME} className="ml-auto text-sm text-primary font-semibold hover:underline">
              Volver al inicio →
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
