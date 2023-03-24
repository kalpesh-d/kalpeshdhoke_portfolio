import './css/Projects.css'
import Project1 from '../assets/projects/Little Lemon-Preview.png'; 
import Project2 from '../assets/projects/Calculator-Preview.png'; 
import Project3 from '../assets/projects/Netflix Clone-Preview.png'; 

function Projects() {
    return(
        <div id="projects">
            <div className="head-btn pro">Projects</div>
            <section className='display-project'>
                <div className="projects-language">
                    <div className='projects-label'>
                        <div className="primary-label">React.js</div>
                        <div className="secondary-label">CSS</div>
                    </div>
                    <h1 className='title-project'><a href='https://little-lemon-l70.pages.dev/' target='_blank' rel="noreferrer">Little Lemon</a></h1>
                    <p className='desc-project'>Developed Little Lemon web app with React using state, props, routing, and responsive design. Used component architecture and CSS media queries for optimal user experience.</p>
                </div>
                <a href='https://little-lemon-l70.pages.dev/' target='_blank' rel="noreferrer"><img src={Project1} alt="Little Lemon" className='project-preview'/></a>
            </section>
            <div className='line'></div>
            <section className='display-project'>
                <div className="projects-language">
                    <div className='projects-label'>
                        <div className="primary-label">React.js</div>
                        <div className="secondary-label">CSS</div>
                    </div>
                    <h1 className='title-project'><a href='https://kd-calculator.netlify.app/' target='_blank' rel="noreferrer">Calculator</a></h1>
                    <p className='desc-project'>Created responsive calculator app with intuitive UI using React's state management. Users can input expressions, clear, delete characters, and calculate results.</p>
                </div>
                <a href='https://kd-calculator.netlify.app/' target='_blank' rel="noreferrer"><img src={Project2} alt="Little Lemon" className='project-preview'/></a>
            </section>
            <div className='line'></div>
            <section className='display-project'>
                <div className="projects-language">
                    <div className='projects-label'>
                        <div className="primary-label flix">HTML</div>
                        <div className="secondary-label">CSS</div>
                    </div>
                    <h1 className='title-project'><a href='https://github.com/kalpesh-d/Netflix-Clone' rel="noreferrer" target='_blank'>Netflix Clone</a></h1>
                    <p className='desc-project'>Created responsive Netflix landing page clone with HTML and CSS. Implemented dynamic layouts and styling using grid systems, flexbox, and media queries for optimal compatibility.</p>
                </div>
                <a href='https://github.com/kalpesh-d/Netflix-Clone' rel="noreferrer" target='_blank'><img src={Project3} alt="Little Lemon" className='project-preview'/></a>
            </section>
        </div>
    );
}

export default Projects;