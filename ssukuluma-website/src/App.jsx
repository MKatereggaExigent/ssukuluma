import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Fashion from './components/Fashion';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Fashion />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
