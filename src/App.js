import NavBar from './components/NavBar'
import Home from './pages/Home'
import Menu from './pages/Menu';
import CapaNav from './components/CapaNav';
import Ambiente from './pages/Ambiente';
import EntrarContato from './pages/EntrarContrato';
import Relatos from './pages/Relatos';

function App() {
  return (
    <div className="p-0 m-0 bg-custom-gray h-screen">

      <CapaNav/>
      <NavBar/>
      <Home/>
      <Menu/>
      <Ambiente/>
      <EntrarContato/>
      <Relatos/>
      
      
  
    </div>
  );
}

export default App;
