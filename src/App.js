import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero/>
        <Experience/>
        <Projects/>
      </main>
      <About/>
    </>
  );
}

export default App;