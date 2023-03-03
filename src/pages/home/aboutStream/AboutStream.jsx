import enVivo from './img/envivo.webp'
import streamer from './img/streamer.webp'
import './AboutStream.css'
import { NavLink } from 'react-router-dom'
const AboutStream = () => {
    return(
        <section className="about-stream-main">
            <div className="container between">
                <div className="about center">
                    <h2 className='title-dark about-title'>¿Quiénes somos?</h2>
                    <p className='paragraph about-p'>En la actualidad el CEADL es una creación colectiva de organizaciones de jóvenes y profesionales interesados en posicionar los Derechos Humanos y Derechos Ambientales a partir de procesos educativos formativos de participación, protagónica, de manera individual y colectiva. Los protagonistas son las organizaciones de juventudes, mujeres, pueblos indígenas. LGBT`s, con quienes consolidamos procesos de institucionalidad democrática desde la sociedad civil.</p>
                </div>
                <div className="stream center">
                    <div className='top-stream center'>
                        <h2 className="title-light title-top">EN VIVO</h2>
                        <div className="img-container img-stream">
                            <img src={enVivo} alt="" />
                        </div>
                        <p className='paragraph-light'>Hoy el curso de “Prevención y denuncia de la violencia intra familiar”</p>
                    </div>
                    <div className="bot-stream between">
                        <div className="img-container img-bot">
                            <img src={streamer} alt="" />
                        </div>
                        <article className='article-bot'>
                            <h3 className='paragraph-light title-bot'>Expone</h3>
                            <p className='paragraph-light'>Maria de los Ángeles</p>
                            <p className='paragraph-light p-light'>Lic. en sociología</p>
                            <p className='paragraph-light p-light'>Experta en temas de genero</p>
                        </article>
                    </div>
                    <span className='button-light btn-stream'>
                        <NavLink to="/stream" className="a-dark a-hover-dark">Ingresar</NavLink>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default AboutStream