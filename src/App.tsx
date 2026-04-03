import { Hero } from "./components/Hero";
import { Formations } from "./components/Formations";
import { Team } from "./components/Team";
import { Statistics } from "./components/Statistics";
import { Testimonials } from "./components/Testimonials";
import { Events } from "./components/Events";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-violet-600 rounded-full opacity-20 blur-[120px]" />
      </div>

      {/* Content */}
      <Nav />
      <div className="relative z-10 pt-16">
        <Hero />
        <Formations />
        <Team />
        <Statistics />
        <Testimonials />
        <Events />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
