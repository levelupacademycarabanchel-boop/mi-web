import { HashRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "@/lib/index";
import { Header, Footer, WhatsAppButton, MobileCallBar } from "@/components/Layout";
import FloatingBanner from "@/components/FloatingBanner";
import CookieBanner from "@/components/CookieBanner";
import Home from "@/pages/Home";
import Metodologia from "@/pages/Metodologia";
import Nosotros from "@/pages/Nosotros";
import Cursos from "@/pages/Cursos";
import Verano from "@/pages/Verano";
import Contacto from "@/pages/Contacto";
import TestNivel from "@/pages/TestNivel";
import AvisoLegal from "@/pages/AvisoLegal";
import Privacidad from "@/pages/Privacidad";
import Cookies from "@/pages/Cookies";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <div className="flex-1 pb-16 md:pb-0">
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.METODOLOGIA} element={<Metodologia />} />
            <Route path={ROUTES.NOSOTROS} element={<Nosotros />} />
            <Route path={ROUTES.CURSOS} element={<Cursos />} />
            <Route path={ROUTES.VERANO} element={<Verano />} />
            <Route path={ROUTES.CONTACTO} element={<Contacto />} />
            <Route path={ROUTES.TEST_NIVEL} element={<TestNivel />} />
            <Route path={ROUTES.AVISO_LEGAL} element={<AvisoLegal />} />
            <Route path={ROUTES.PRIVACIDAD} element={<Privacidad />} />
            <Route path={ROUTES.COOKIES} element={<Cookies />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
        <MobileCallBar />
        <FloatingBanner />
        <CookieBanner />
      </div>
    </HashRouter>
  );
}
