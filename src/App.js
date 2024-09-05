import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Separator from './components/Separator'
import About from './components/About';
import Availability from './components/Availability';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  const angle_1 = -5
  const angle_2 = 3
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Separator angle={angle_1}/>
      <About/>
      <Availability/>
      <Separator angle={angle_2}/>
      <Gallery/>
      <Separator angle={-3}/>
      <Contact/>
    </div>
  );
}

export default App;
