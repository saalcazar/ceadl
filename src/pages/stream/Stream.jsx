import './Stream.css'
const Stream = () => {
    const videoId = '-zyT8_8CG44';
    const srcUrl = `https://www.youtube.com/embed/${videoId}`;
    return(
        <section className="main-stream">
            <div className="container between stream">
                <div className='streaming'>
                    <iframe
                        title="video de YouTube"
                        width="560"
                        height="315"
                        src={srcUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className='video-stream'
                    ></iframe>
                    <article className='article-stream'>
                        <p className='paragraph-light'>
                        El objetivo de este curso es proporcionar información y herramientas para prevenir y denunciar la violencia intrafamiliar. La violencia intrafamiliar incluye cualquier forma de abuso o agresión cometido por un miembro de la familia o pareja hacia otro.

                        Algunos de los temas que se abordarán en este curso incluyen:
                        </p>
                        <ul className='paragraph-light list-stream'>
                            <li>Definición de la violencia intrafamiliar</li>
                            <li>Tipos de violencia intrafamiliar, incluyendo física, psicológica, sexual y económica</li>
                            <li>Factores que contribuyen a la violencia intrafamiliar</li>
                            <li>Cómo prevenir la violencia intrafamiliar</li>
                            <li>Cómo denunciar la violencia intrafamiliar, incluyendo los recursos disponibles y cómo acceder a ellos</li>
                            <li>Cómo apoyar a víctimas de la violencia intrafamiliar</li>
                        </ul>

                    </article>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}
export default Stream