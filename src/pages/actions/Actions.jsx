import prevention from './img/prevencion.webp'
import participation from './img/participacion.webp'
import movment from '../about/img/movimiento-social.avif'
import './Actions.css'
const Actions = () => {
    return (
        <section className="main-actions">
            <div className="bg-light">
                <div className="container between action">
                    <div className="img-container center img-action">
                        <img src={prevention} alt="" />
                    </div>
                    <article className="article-prevention paragraph-dark">
                        <h3 className='title-dark'>Prevención</h3>
                        <p className='paragraph p-action'>Definimos la prevención como una acción, o un conjunto de acciones destinadas a disminuir las condiciones que posibiliten la emergencia de un hecho considerado nocivo o indeseable, perjudicial o pernicioso para los intereses individuales o colectivos; o por el contrario, la prevención concebida como una serie de acciones que incrementan las condiciones para la emergencia de un hecho positivo, deseable y benéfico para los intereses individuales o colectivos.</p>
                    </article>
                </div>
            </div>
            <div className="bg-dark">
                <div className='container between actionDos'>
                    <article className='article-prevention'>
                        <h3 className="title-light">Participación ciudadana</h3>
                        <p className="paragraph-light p-action">Consiste en la formación y capacitación de niños, niñas, adolescentes y jóvenes para el ejercicio de una ciudadanía plena; tiene que ver con el acceso a la participación en los procesos de  la gestión pública o la participación en la cogestión de bienes y servicios públicos  que sean del interés y el beneficio de la población con la que trabajamos; implica también la incidencia en instancias estatales locales para la generación o puesta en práctica, por parte del estado, de acciones, servicios o bienes que faciliten los derechos inherentes a la participación y bienestar ciudadano de esta población, lo que se consigue haciendo exigibilidad de Derechos y propuestas de gestión pública.</p>
                    </article>
                    <div className="img-container center img-action">
                        <img src={participation} alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-light">
                <div className="container between action">
                    <div className="img-container center img-action">
                        <img src={movment} alt="" />
                    </div>
                    <article className="article-prevention paragraph-dark">
                        <h3 className='title-dark'>Incidencia política y control social</h3>
                        <p className='paragraph p-action'>La incidencia política y control social es entendido por una parte, como el mecanismo de operatividad de los derechos a partir de acciones de individuos o organizaciones que tienen definida sus identidades y posiciones en sus contextos, entornos familiares, sociales, políticos y comunidades. El elemento de incidencia también es una mecanismo de la participación y control social desde donde se aporta a los procesos de desarrollo económico social, medioambiental y político. Asimismo la incidencia está vinculado a la operatividad de las políticas públicas.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Actions