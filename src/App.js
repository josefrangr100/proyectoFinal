import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './styles/GridHome.css'
import { Footer } from './layout/Footer/Footer';
import { Header } from './layout/Header/Header';
import { Home } from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carta } from './pages/Carta/Carta';
import { Login } from './pages/Login/Login';
import { PedirComida } from './pages/PedirComida/PedirComida'
import { Registrarse } from './pages/Registrarse/Registrarse';

function App() {
  return (
    <>
      <Header/>

    <div className="main-container"> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registro' element={<Registrarse/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/pedir' element={<PedirComida/>}/>
        <Route path='/carta' element={<Carta/>}/>
      </Routes>
    </div>
      
      <Footer/>
    </>
  );
}

export default App;
