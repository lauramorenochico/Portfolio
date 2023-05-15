//importo la imagen que quiero usar
import logo from '../images/logodef.png';

//pasamos las props a la función
const Menu = ({topMenu}) => {
    return(
        <div className="menu" style={{
            opacity: !topMenu ? "0" : "1",
            transition: "all .3s",
            visibility: !topMenu ? "hidden" : "visible"
        }}>
            <a href="#/" className="menu__img"><img className="menu__img" src={logo} alt="logo"/></a>
            <nav>
                <ul className="menu__list">
                    <a href="#aboutMe" className='menu__link'><li className='menu__text'>SOBRE MI </li></a>|
                    <a href="#projects" className='menu__link'><li className='menu__text'>PROYECTOS </li></a>|
                    <a href="#curriculum" className='menu__link'><li className='menu__text'>MI CV </li></a>|
                    <a href="#contact" className='menu__link'><li className='menu__text'>CONTACTO </li></a>|
                    
                </ul>
                
            </nav>
        </div>
    );
};
//no olvidar exportar
export default Menu;