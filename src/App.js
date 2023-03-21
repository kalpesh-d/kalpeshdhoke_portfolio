import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/hero';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero/>
        <Experience/>
      </main>
    </>
  );
}

export default App;