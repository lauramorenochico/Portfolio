
//import { Link } from "react-router-dom";
import getSrc from "../services/getSrc";


 const ProjectDetail =({eachProject}) => {
const srcImage = getSrc(eachProject.image);
    return (
       <div className='project'>
        <section className='project__sec1'>
         <img src={srcImage}  alt="imagen del projecto" className='project__sec1--img' height="230"
        style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}></img>
          
       
        <h4 className='project__title'><b>{eachProject.title.toUpperCase()}</b><a href={eachProject.link} Target="_blank"><i class="fa-solid fa-arrow-up-right-from-square project__icons"></i></a></h4>
        
                           
        <p className= 'project__subt'>{eachProject.subtitle.toUpperCase()}</p>
        {/*<p className= 'project__des'>{eachProject.description}</p>*/}
      

      </section>

      {/*<section className="project__btn">
      <Link className="project__btn--link" to="./Projects">
        ← 
      </Link>
    </section> */}
      </div>
    
    )
    
/*<div className='project'>
            <a href={eachProject.demo} className='project__article' Target="_blank">
            <img src={eachProject.image} alt="" className='project__image'/>
            <img src={eachProject.overImage} alt=""></img>
            </a>
            <div className="project__row">
                <h4 className='project__title'>{eachProject.name.toUpperCase()}</h4>
                <div className="project__container">
                    <a href={eachProject.repo} Target="_blank"><i className="fa-brands fa-square-github project__icons"></i></a>
                    <a href={eachProject.demo} Target="_blank"><i class="fa-solid fa-arrow-up-right-from-square project__icons"></i></a>
                </div>
            </div>
            <div className="project__position">
                {technologies}
            </div>
        </div>
    )
}*/

  };
 
  //no olvidar exportar
export default ProjectDetail;