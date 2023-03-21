import './css/Projects.css'
import Project1 from '../assets/projects/Little Lemon-Preview.png'; 
import Project2 from '../assets/projects/Calculator-Preview.png'; 
import Project3 from '../assets/projects/Netflix Clone-Preview.png'; 

function Projects() {
    return(
        <div className="projects">
            <div className="head-btn pro">Projects</div>
            <section className='display-project'>
                <div className="projects-language">
                    <div className='projects-label'>
                        <div className="primary-label">React.js</div>
                        <div className="secondary-label">CSS</div>
                    </div>
                    <h1 className='title-project'>Little Lemon</h1>
                    <p className='desc-project'>Developed Little Lemon web app with React using state, props, routing, and responsive design. Used component architecture and CSS media queries for optimal user experience.</p>
                </div>
                <img src={Project1} alt="Little Lemon" className='project-preview'/>
            </section>
            <div className='line'></div>
            <section className='display-project'>
                <div className="projects-language">
                    <div className='projects-label'>
                        <div className="primary-label">React.js</div>
                        <div className="secondary-label">CSS</div>
                    </div>
                    <h1 className='title-project'>Calculator</h1>
                    <p className='desc-project'>Created responsive calculator app with intuitive UI using React's state management. Users can input expressions, clear, delete characters, and calculate results.</p>
                </div>
                <img src={Project2} alt="Little Lemon" className='project-preview'/>
            </section>
            <div className='line'></div>
            <section className='display-project'>
                <div className="projects-language">
                    <div className='projects-label'>
                        <div className="primary-label flix">HTML</div>
                        <div className="secondary-label">CSS</div>
                    </div>
                    <h1 className='title-project'>Netflix Clone</h1>
                    <p className='desc-project'>Created responsive Netflix landing page clone with HTML and CSS. Implemented dynamic layouts and styling using grid systems, flexbox, and media queries for optimal compatibility.</p>
                </div>
                <img src={Project3} alt="Little Lemon" className='project-preview'/>
            </section>
        </div>
    );
}

export default Projects;