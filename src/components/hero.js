import './css/Hero.css'
import KalpeshAi from '../assets/Kalpesh illustration.svg';

function Hero() {
    return(
        <div className='hero' id='home'>
            <div className="hero-text">
                <h1 className='head1'>Hello!<br/>I'm Kalpesh</h1>
                <h2 className='head2'>Front-End Developer<br/>& Designer</h2>
                <p className='hero-para'>I'm front end developer, available for work, new projects, collaborations, and freelance opportunities, I also know the principles of design.</p>
            </div>
            <img src={KalpeshAi} alt="hero" className='hero-img'/>
        </div>
    );
}

export default Hero;