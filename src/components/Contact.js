
const Contact = () => {
  return (

    <>
    <h2 className="title">CONTACTO</h2>
    <div className='contact' id='contact'>

    <div className='contact__section1'>
      <p className='contact__text'>Si tienes alguna duda o pregunta contacta conmigo cuando lo desees, puedes hacerlo a través de mis redes sociales o mandándome un email. Responderé lo más pronto posible</p>
    </div>

      <div className='contact__section2'>
        <div className="contact__section2--container">
          <i class="fa-brands fa-github-alt"></i><a href="https://github.com/lauramorenochico" className="contact__rrss">github.com/lauramorenochico</a>
        </div>
        <div className="contact__section2--container">
          <i class="fa-brands fa-linkedin-in"></i><a href="https://www.linkedin.com/in/laura-moreno-chico-33aa03a2/" className="contact__rrss">linkedin.com/in/laura-moreno-chico-33aa03a2/</a>
        </div>

        <div className="contact__section2--container">
         <i class="fa-solid fa-reply"></i><a href="mailto:laura.moreno.chico@gmail.com" className="contact__rrss">laura.moreno.chico@gmail.com</a>
        </div>
      </div>
    </div>



     
    {/*<div class="form">
      <article class="form__description">
        <p class="form__description-big">O si lo prefieres, rellena este formulario para ponerte en contacto conmigo.</p>
        <p class="form__description-small">Todos los campos marcados con <span class="asterisk">*</span> son obligatorios.</p>
        </article>
    </div>

    
      <div className="container">
        <form action="mailto:laura.moreno.chico@gmail.com" className="form">
            <label for="fullName">
            Nombre completo
            <span className="asterisk">*</span>
            </label>
            <input className="box" id="fullName" type="text" name="fullName" placeholder="Nombre..." required></input>
            <fieldset className="form-grid">
                <label className="label-email" for="email">
                    Email
                    <span className="asterisk">*</span>
                </label>
            <input className="box box-email" id="email" type="email" name="email" placeholder="nombre.apellidos@mail.com" required/>
            </fieldset>
            <label for="comments">
                Mensaje
                <span className="asterisk">*</span>
            </label>
            <textarea className="box__big" id="comments" name="comments" rows="6" cols="10" placeholder="¿Qué necesitas?" required></textarea>
                
        
            <input className="button" type="submit"></input>
        </form>
  </div>*/}
    </>

  );
};

//no olvidar exportar
export default Contact;