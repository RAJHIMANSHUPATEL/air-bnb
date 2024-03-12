import Airbnb from './images/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={Airbnb} alt=""  className='nav-logo'/>
        </nav>
    );
}