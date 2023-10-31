import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import youtube from './img/youtube.svg'
import instagram from './img/instagram.svg'
import tdh from './img/tdh_logo_black.svg'
import ministerio from './img/ministerio.svg'
import './Footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return(
        <footer className="footer-main">
            <div className='footer container between'>
                <div className="footer-one center">
                    <h3 className='title-mid title-one'>Contáctanos</h3>
                    <div className="address">
                        <p className="paragraph-light p-address">El Alto:</p>
                        <p className="paragraph-light p-address">Calle 4 Nro 42 esq. Av. 6 de marzo Zona 12 de octubre</p>
                        <p className="paragraph-light p-address">Teléfono:</p>
                        <p className="paragraph-light p-address">(+591) 2 2829525</p>
                        <p className="paragraph-light p-address">Correo electrónico:</p>
                        <p className="paragraph-light">direccion@ceadl.org.bo</p>
                    </div>
                    <div className='social between'>
                        <a href=""><img src={facebook} alt="" className='social-footer'/></a>
                        <a href=""><img src={twitter} alt="" className='social-footer'/></a>
                        <a href=""><img src={youtube} alt="" className='social-footer'/></a>
                        <a href=""><img src={instagram} alt="" className='social-footer'/></a>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="footer-two">
                    <h3 className="title-mid title-two">Transparecia</h3>
                    <ul className='footer-list'>
                        <li><NavLink className='a-light a-footer' to="/estructura">Estructura</NavLink></li>
                    </ul>
                </div>
                <div className="separator"></div>
                <div className="footer-three">
                    <h3 className="title-mid title-three">Financiadores</h3>
                    <div className="logo-uno img-container">
                        <img src={ministerio} alt="" />
                    </div>
                    <div className="logo-dos">
                        <img src={tdh} alt="" />
                    </div>
                </div>
            </div>
            <div className='ddrr center'>
                <p className='paragraph-light'>Todos los derechos reservados 2022 CEADL - Diseñado por <a href="" className='a-dark'>saalcazar</a></p>
            </div>
        </footer>
    )
}

export default Footer