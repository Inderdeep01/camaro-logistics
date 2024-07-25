import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Separator from './components/Separator'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Separator/>
    </div>
  );
}

export default App;
