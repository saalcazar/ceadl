import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-tres.svg'
import "./Header.css"
const Header = () => {
    return(
        <header className="menu-container bg-gradient">
            <div className="container between main-menu">
                <div className="img-container logo-menu rotate-vertical-center">
                    <NavLink to="/"><img className="logo" src={logo} alt="" /></NavLink>
                </div>
                <nav className="nav-menu">
                    <ul className="menu between">
                        <li className="menu-item tracking-in-expand"><NavLink className='a-light a-hover-dark' to="/quienessomos">Quienes somos</NavLink></li>
                        <li className="menu-item tracking-in-expand"><NavLink className='a-light a-hover-dark' to="/acciones">Acciones</NavLink></li>
                        <li className="menu-item tracking-in-expand"><NavLink className='a-light a-hover-dark' to="/proyectos">Proyectos</NavLink></li>
                        <li className="menu-item tracking-in-expand"><NavLink className='a-light a-hover-dark' to="/contacto">Contacto</NavLink></li>
                        {/* <li className="menu-item"><NavLink className='a-light a-hover-dark' to="/posts">Blog</NavLink></li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header