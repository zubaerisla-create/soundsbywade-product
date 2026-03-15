import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StarField } from "./StarField";
import { BackToTop } from "./BackToTop";
import { FloatingParticles } from "./FloatingParticles";

export function Layout() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* Animated Starfield Background */}
      <StarField />
      <FloatingParticles />
      
      {/* Cosmic Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9D4DFF]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#3C22FF]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#6CFFF3]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <Header />
      <main className="relative pt-24">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}