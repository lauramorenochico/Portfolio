import ProjectDetail from './ProjectDetail';


const Projects= ({AllProject}) => {
    const dataHtml = AllProject.map((eachProject) => {
        return <ProjectDetail eachProject={eachProject}></ProjectDetail>
    })
    return(
        <section className='container' >
        <div className='foto' id='projects'>
            <h2 className="section__title">PROYECTOS</h2>
            <ul className='project__list'>{dataHtml}</ul>
        </div>
        </section>
    );
}



  //no olvidar exportar
export default Projects;