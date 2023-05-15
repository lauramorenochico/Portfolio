/* SECCIÓN DE IMPORT */
//estilos
import '../styles/App.scss';
//react
import { useState, useEffect } from 'react';

//componentes
import About from './About';
import Landing from './Landing';
import Menu from './Menu';
import Footer from './Footer';
import Projects from './Projects';
import Cv from './Curriculum';
import AllProject from '../data/data.json';
import Contact from './Contact';


/* SECCIÓN DEL COMPONENTE */




function App() {

//quiero que el menú no se vea en la landing
const [topMenu, setTopMenu] = useState(false);

const handleMenuShown = () => {
    setTopMenu(true)
  }
 //para agregar un evento de desplazamiento en la ventana y controlar cuándo se debe mostrar o ocultar un menú    
 useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
//recordatorio, la matriz vacía [] como segundo argumento en useEffect indica que la función solo se ejecutará una vez
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      setTopMenu(true);
    } else {
      setTopMenu(false);
    }
  };

//lo que nos devuelve
return (
    <div className="App">
        
      <Landing 
      handleMenuShown={handleMenuShown} 
      topMenu={topMenu}/>
      <Menu topMenu={topMenu}/> 
      <About/>
      <Projects AllProject = {AllProject}/>
      <Cv/>
      <Contact />
      
    <Footer />
    </div>
    
  );
};

export default App;