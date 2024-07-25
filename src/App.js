import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Separator from './components/Separator'
import About from './components/About';
import Availability from './components/Availability';

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
    </div>
  );
}

export default App;
