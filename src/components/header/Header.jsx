import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import "./Header.css"
const Header = () => {
    const navigation = useNavigate()
    return(
        <>
            <div className="main-container menu-container bg-dark">
                <div className="container between main-menu">
                    <div className="img-container logo-menu">
                        <NavLink to="/"><img className="logo" src={logo} alt="" /></NavLink>
                    </div>
                    <nav className="nav-menu">
                        <ul className="menu between">
                            <li className="menu-item"><NavLink className='a-light' to="/quienessomos">Quienes somos</NavLink></li>
                            <li className="menu-item"><NavLink className='a-light' to="/acciones">Acciones</NavLink></li>
                            <li className="menu-item"><NavLink className='a-light' to="/proyectos">Proyectos</NavLink></li>
                            <li className="menu-item"><NavLink className='a-light' to="/contacto">Contacto</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header