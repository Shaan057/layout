import './index.css'
import { SiSololearn } from "react-icons/si";

const Header = () =>
    <nav className='navBar'>
        <p className='logo'> <SiSololearn /> IndigoLearn</p>
        <ul className='nav-items'>
            <li>nav</li>
            <li>nav</li>
            <li>nav</li>
            <li>nav</li>
        </ul>
        <button className='login-button' type='button'>Login</button>
    </nav>


export default Header