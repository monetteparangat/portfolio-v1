import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
    </div>
  );
}

export default App;
