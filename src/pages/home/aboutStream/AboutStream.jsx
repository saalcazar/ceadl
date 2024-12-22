import enVivo from './img/envivo.webp'
import streamer from './img/streamer.webp'
import './AboutStream.css'
import { NavLink } from 'react-router-dom'
const AboutStream = () => {
    return(
        <section className="about-stream-main">
            <div className="container between about-stream">
                <div className="about center">
                    <h2 className='title-dark about-title'>¿Quiénes somos?</h2>
                    <p className='paragraph about-p'>En la actualidad el CEADL es una creación colectiva de organizaciones de jóvenes y profesionales interesados en posicionar los Derechos Humanos y Derechos Ambientales a partir de procesos educativos formativos de participación, protagónica, de manera individual y colectiva. Los protagonistas son las organizaciones de juventudes, mujeres, pueblos indígenas. LGBT`s, con quienes consolidamos procesos de institucionalidad democrática desde la sociedad civil.</p>
                </div>
                <div className="stream center">
                    <div className='top-stream center'>
                        <h2 className="title-light title-top">Producción</h2>
                        <div className="img-container img-stream">
                            <iframe src="https://www.youtube.com/embed/3kuZ-mOEku4?si=0J9UX4PbzY-yUCjO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe src="https://www.youtube.com/embed/52PPYIKhLyY?si=gLNMJbvxIZRiRlcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe src="https://www.youtube.com/embed/GqAYS_t6IKA?si=qUY3E_hjMSxfb1Dc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default AboutStream