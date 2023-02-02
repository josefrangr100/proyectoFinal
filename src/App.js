import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './styles/GridHome.css'
import './styles/Registro.css'
import { Footer } from './layout/Footer/Footer';
import { Header } from './layout/Header/Header';
import { Home } from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carta } from './pages/Carta/Carta';
import { Login } from './pages/Login/Login';
import { PedirComida } from './pages/PedirComida/PedirComida'
import { Reservas } from './pages/Reservas/Reservas';
import { Contacto } from './pages/Contacto/Contacto';
import { About } from './pages/About/About';
import { Registro } from './pages/Registro/Registro';



function App() {

  return (
    <>
      <Header/>

    <div className="main-container"> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/pedir' element={<PedirComida/>}/>
        <Route path='/carta' element={<Carta/>}/>
        <Route path='/reservas' element={<Reservas/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
      
      <Footer/>
    </>
  );
}

export default App;
