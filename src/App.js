import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero/>
        <Experience/>
        <Projects/>
        <About/>
      </main>
      <footer>
        <Contact/>
      </footer>
    </>
  );
}

export default App;