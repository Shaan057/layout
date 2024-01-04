import './index.css'
import { SiSololearn } from "react-icons/si";

const Header = () =>
    <nav className='navBar'>
        <p> <SiSololearn /> IndigoLearn</p>
        <ul className='nav-items'>
            <li>nav</li>
            <li>nav</li>
            <li>nav</li>
            <li>nav</li>
        </ul>
        <button className='login-button' type='button'>Login/SignUp</button>
    </nav>


export default Header