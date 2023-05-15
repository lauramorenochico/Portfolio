//importo la imagen que quiero usar
import me from '../images/me.jpg';

const About = () => {
  return (
    <div className='about' id='aboutMe'>
       <h2 className="about__title">¿CÓMO LLEGUÉ HASTA AQUÍ?</h2>
      <div className="container">
       <p className='container__text'>
        Hola, mi nombre es Laura y recientemente me he graduado en el bootcamp
        de programación web de Adalab. Pertenezco a la en la Promoción S, en
        honor a una de nuestras ciententíficas más brillantes: Margarita Salas. <br/>
      
        Provengo de un campo muy diferente, ya que estudié filosofía y después
        un master de archivos y documentación, siempre he sido inquieta en
        cuanto al aprendizaje y constantemente estaba realizando cursos o algún
        otro tipo de formación sobre una temática o un área de conocimiento que
        me llamara la atención.<br/>
     
     
        Mi primer contacto con la programación fue durante mi etapa Patrimonio
        Histórico y museos del Ejército del Aire, durante este periodo tuve
        experiencia como cliente y testera para la creación global de un
        programa de gestión de bienes muebles (MILES, basado en DOMUS).<br/>
      
        Tuve curiosidad por conocer la otra cara de ese trabajo, y en la
        programación encontré una conjunción de cosas que me gustan: resolver
        problemas, mejorar experiencias y crear, ya que estudié 3 años de
        ilustración en la escuela ESDIP de Madrid.<br/>
      
        Emocionada por reinventarme una vez más y empaparme de lo que puede
        ofrecerme este sector, me gustan los retos y estoy dispuesta a aprender
        y dar lo mejor de mí en este campo.<br/>
        Puede que en la programación sea una recién llegada pero traigo conmigo
        mucha experiencia que puede enriquecer mi aportación al trabajo:
        reuniones con clientes, trabajo en equipo, aprendizaje de nuevos
        programas informáticos dependiendo del entorno del proyecto, redacciones
        de manuales, digitalizaciones de documentación, proyectos con deadline,
        tutorías de becarios...<br/>
    </p>
    <img src={me} alt="autorretrato" className='container__img'/>
    </div>
    </div>
  );
};

//no olvidar exportar
export default About;
