import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import youtube from './img/youtube.svg'
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
                        <p className="paragraph-light p-address">Calle José Ballivian, Av. Julio Cesar Valdez, zona Villa Bolívar C</p>
                        <p className="paragraph-light p-address">Teléfono:</p>
                        <p className="paragraph-light p-address">(+591) 2 2830305</p>
                        <p className="paragraph-light p-address">Correo electrónico:</p>
                        <p className="paragraph-light">ceadl@ceadl.org.bo</p>
                    </div>
                    <div className='social'>
                        <a href="https://www.facebook.com/ceadl" target='_blank'><img src={facebook} alt="" className='social-footer'/></a>
                        <a href="https://twitter.com/ceadl" target='_blank'><img src={twitter} alt="" className='social-footer'/></a>
                        <a href="https://www.youtube.com/@canalceadl" target='_blank'><img src={youtube} alt="" className='social-footer'/></a>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="footer-two">
                    <h3 className="title-mid title-two">FACEBOOK</h3>
                    <div class="fb-page" data-href="https://www.facebook.com/ceadl" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/ceadl" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ceadl">CEADL Bolivia</a></blockquote></div>
                </div>
                <div className="separator"></div>
                <div className='footer-three'>
                <nav className="nav-menu-footer">
                    <ul className="menu-footer">
                        <li className="item-footer-menu">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-point"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /></svg>
                            <NavLink className='a-light' to="/quienessomos">Quienes somos</NavLink>
                        </li>
                        <li className="item-footer-menu">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-point"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /></svg>
                            <NavLink className='a-light' to="/acciones">Líneas estratégicas</NavLink>
                        </li>
                        <li className="item-footer-menu">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-point"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /></svg>
                            <NavLink className='a-light' to="/proyectos">Proyectos</NavLink>
                        </li>
                        <li className="item-footer-menu">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-point"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /></svg>
                            <NavLink className='a-light' to="/contacto">Contacto</NavLink>
                        </li>
                        <li className="item-footer-menu">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="22"  height="22"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-point"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /></svg>
                            <NavLink className='a-light' to="/posts">Blog</NavLink>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
            <div className='ddrr center'>
                <p className='paragraph-light p-copi'>Todos los derechos reservados 2022 CEADL - Diseñado por <a href="https://saalcazar.org" target='_blank' className='a-dark p-copi'>saalcazar</a></p>
            </div>
        </footer>
    )
}

export default Footer