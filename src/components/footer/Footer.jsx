import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import youtube from './img/youtube.svg'
import tdh from './img/tdh_logo_black.svg'
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
                        <p className="paragraph-light p-address">(+591) 2 2829525</p>
                        <p className="paragraph-light p-address">Correo electrónico:</p>
                        <p className="paragraph-light">direccion@ceadl.org.bo</p>
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
                <div className="footer-three">
                    <h3 className="title-mid title-three">Financiadores</h3>
                    <div className="logo-uno img-container">
                        <img src='https://www.educo.org/Content/images/logo_educarcura.svg' alt="" />
                    </div>
                    <div className="logo-uno img-container">
                        <img src='https://es.mmf.li/wp-content/uploads/2015/06/img_logo.png' alt="" />
                    </div>
                    <div className="logo-dos">
                        <img src={tdh} alt="" />
                    </div>
                </div>
            </div>
            <div className='ddrr center'>
                <p className='paragraph-light p-copi'>Todos los derechos reservados 2022 CEADL - Diseñado por <a href="https://saalcazar.org" target='_blank' className='a-dark p-copi'>saalcazar</a></p>
            </div>
        </footer>
    )
}

export default Footer