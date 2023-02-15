import banner from './img/El-Alto.webp'
import vision from './img/indigenas.webp'
import mission from './img/jóvenes.webp'
import './About.css'

const About = () => {
    return(
        <>
        <section className="history center bg-light">
            <div className="back-title img-container center">
                <img src={banner} alt="" />
            </div>
            <div className='container title-container'>
                <h2 className="title-light">Historia</h2>
            </div>
            <div className="history-container container center">
                <p className="p-dark p-about">El CEADL se fundó el 17 de junio de 1997, sin embargo, inicia formalmente sus actividades el 3 de enero de 2000. La cuna del CEADL es la ciudad de El Alto, más precisamente la zona Villa Dolores.</p>
                <p className="p-dark p-about">La ausencia de programas locales que pudieran responder a las necesidades, demandas y objetivos de las y los jóvenes de la ciudad de El Alto, referidos a mejorar su participación en los procesos sociopolíticos así como también su participación sea reconocida por el conjunto de la sociedad alteña, son los móviles que motivaron la fundación del CEADL a partir de la insistencia de adolescentes y jóvenes de los cuáles hoy son educadores en la institución. Es decir, su historia radica en que el CEADL busca que las y los jóvenes tengan reconocimiento en tanto son sujetos históricos sociales en la construcción del desarrollo del Estado.</p>
                <p className="p-dark p-about">En ese sentido, el CEADL nace como una organización de defensa y promoción de los Derechos Humanos, particularmente promoviendo la actoría, el afianzamiento de las y los jóvenes del país para la operacionalización de los Derechos. Con el tiempo el CEADL se convirtió en un espacio de realización de ciudadanía plena, pasando de esa manera de ser una institución de defensa, promoción y formación en Derechos Humanos, a una organización de promoción y práctica de la ciudadanía y el poder local con presencia en varios municipios de Bolivia. Para ello se constituyó el municipio como espacio territorial de trabajo, incorporando las líneas de acción de Participación, Prevención e Incidencia política en temáticas de violencia, consumo de drogas, trata de personas y violencia sexual comercial.</p>
                <p className="p-dark p-about">En la actualidad el CEADL, es una creación colectiva de grupos de jóvenes y profesionales interesados en posicionar los Derechos Humanos y Derechos Ambientales a partir de procesos educativos formativos de participación, protagónica, de manera individual y colectiva. Nuestros aliados son las organizaciones de juventudes, mujeres, pueblos indígenas, LGBTs con quienes consolidados procesos de institucionalidad democrática desde la sociedad civil.</p>
            </div>
        </section>
        <section className="vision-mission bg-dark">
            <div className="vision container between">
                <div className="img-container img-vision">
                    <img src={vision} alt="" />
                </div>
                <h2 className='title-light title-vision'>Visión</h2>
                <p className="paragraph-light p-vm">
                    Personas individuales y organizaciones de la sociedad civil, con énfasis en las juventudes, mujeres y pueblos indígenas, participan de forma organizada, democrática y equitativa en diversos espacios sociopolíticos para la reivindicación y el ejercicio pleno de sus Derechos Humanos y Ciudadanos.
                </p>
            </div>
            <div className="mission container between">
                <p className="paragraph-light p-vm">
                    Fortalecemos personas y organizaciones sociales en sus capacidades participativas y de incidencia para construir una cultura e institucionalidad democrática en el Estado y la sociedad civil, precautelando el ejercicio pleno de los Derechos Humanos y Ciudadanos a nivel local y nacional, en el marco de los Objetivos de Desarrollo Sostenible.
                </p>
                <div className="img-container img-mission">
                    <img src={mission} alt="" />
                </div>
                <h2 className="title-light title-mission">Misión</h2>
            </div>
        </section>
        <section className="values center bg-light">
            <article className='container center article-values'>
                <h2 className='title-dark'>Valores institucionales</h2>
                <p className='value-p center'><span className='value-mid'>✔ Responsabilidad</span><span className='value-dark'>✔ Horizontalidad</span></p>
                <p className='value-p center'><span className='value-dark'>✔ Diversidad</span><span className='value-mid'>✔ Tolerancia</span></p>
            </article>
        </section>
        <section className="goals bg-dark">
            <div className='container center'>
                <div className="goal-list center">
                    <h3 className='title-light'>Objetivos Estratégicos</h3>
                    <ul className='g-list'>
                        <li className='goal-item'>La ONG CEADL, legalmente constituida, está percibida como una institución de defensa de los Derechos Humanos y la democracia, confiable e innovadora que logra resultados con personal calificado y una estructura institucional consolidada.</li>
                        <li className='goal-item'>La población objetivo de nuestro trabajo formada y capacitada para el ejercicio pleno de sus derechos económicos, sociales, políticos y culturales.</li>
                        <li className='goal-item'>Líderes, lideresas y organizaciones sociales influyen en la toma de decisiones estratégicas y Políticas Públicas en el nivel local y nacional, sobre temas de interés de la población.</li>
                        <li className='goal-item'>El CEADL genera procesos comunicacionales entorno a medio ambiente, recursos naturales en el marco de derechos de la madre tierra y ejercicio pleno de Derechos Humanos y ciudadanos orientados al cumplimiento de ODS.</li>
                    </ul>
                </div>
                <div className="goal-img">
                </div>
            </div>
        </section>
        <section className="target center">
            <div className='container between'>
                <h3 className='title-light'>Población Meta</h3>
                <div className='contrast p-target'>
                    <p className='paragraph-light'>La población con la que trabaja el CEADL, considera como aliados estratégicos a las y los adolescentes, jóvenes, mujeres y poblaciones indígenas originarios, que individual o colectivamente, están en un escenario de exigibilidad de derechos, generación de propuestas, que tienen apertura a intercambio de percepciones en escenarios de dialogo y generación de conocimientos.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default About