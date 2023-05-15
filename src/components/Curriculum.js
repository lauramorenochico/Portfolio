


//importo la imagen que quiero usar
import cv from '../images/cv.jpg';

const Curriculum = () => {
  

  return (
    <>
    <h2 id="curriculum" className="downSec__title">MI CURRÍCULUM</h2>
    
    <div className="downSec">
    <img src={cv} alt="currículum" className='downSec__img' />

    <div>
    <p className='downSec__text'>En esta sección puedes descargar mi currículum </p>
    <a href={cv} download className='downSec__btn'>Descargar</a>
    </div>
    </div>
   </>
  );
}


//no olvidar exportar
export default Curriculum;