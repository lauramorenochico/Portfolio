//importo la imagen que quiero usar
import marga from '../images/marga.jpg';


//pasamos las props a la función
const Landing = ({handleMenuShown, topMenu}) => {
    return(
    <div className="landing" id='/' style={{
            opacity:topMenu ? "0" : "1",
            transition: "all .3s",
            marginTop: topMenu && "-99vh"}}>
    <div className='landing__box'>
        <h1 className='landing__box--title'> Portfolio de Laura Moreno</h1>
        <img src={marga} alt="Margarita Salas" className='landing__box--img'/>
    </div>

    <div className='landing__link' onClick={handleMenuShown}>
    <div class="landing__link--field">
	<div class="landing__link--mouse"></div>
    </div>
    </div>
</div>
    );
};

//no olvidar exportar
export default Landing;

