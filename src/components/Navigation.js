import Logo from '../assets/Kalpesh logo.svg';
import '../components/css/Navigation.css';

function Navigation() {
    return (
        <div className="navigation">
            <img src={Logo} alt="Kalpesh" className='logo'/>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    );
}

export default Navigation;