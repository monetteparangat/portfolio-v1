import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Projects />
    </div>
  );
}

export default App;
