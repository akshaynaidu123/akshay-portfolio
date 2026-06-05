import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Education } from "./components/sections/Education";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";
import { Achievements } from "./components/sections/Achievements";
import { Vision } from "./components/sections/Vision";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

import { LoadingScreen } from "./components/LoadingScreen";
import { MouseGlow } from "./components/MouseGlow";
import { ParticleBackground } from "./components/ParticleBackground";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Global Effects */}
      <LoadingScreen />
      <MouseGlow />
      <ParticleBackground />

      {/* Main Content */}
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Vision />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;