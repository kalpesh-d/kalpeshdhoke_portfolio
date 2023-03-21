import './css/About.css';
import about from '../assets/About illustration.svg'; 

function About() {
    return(
        <div className='about'>
            <div className='head-btn abo'>About</div>
            <section className='display-about'>
                <img src={about} alt="kalpesh" className='about-img'/>
                <div className='about-paras'>
                    <p className='about-para'>I graduated from Gujarat university with a bachelor's degree in computer applications. I have 10 months of experience in graphic design which helps me to understand colors, typography, composition, and visual components better. </p>
                    <p className='about-para'>I have specialized education in the program "CS50 & Meta Front-End Developer". My main aim to improve my skills by reading articles, watching tutorials and then applying this knowledge to my work</p>
                    <button>Download Resume</button>
                </div>
            </section>
        </div>
    );
}

export default About;