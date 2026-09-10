import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueStrip from './components/ValueStrip';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AppShowcase from './components/AppShowcase';
import UseCases from './components/UseCases';
import Experience from './components/Experience';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-primaryText font-sans overflow-x-hidden selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <ValueStrip />
        <About />
        <Features />
        <HowItWorks />
        <AppShowcase />
        <UseCases />
        <Experience />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
