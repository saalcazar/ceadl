import mujeres from '../home/slider/img/mujeres.avif'
import facebook from '../../components/footer/img/facebook.svg'
import twitter from '../../components/footer/img/twitter.svg'
import instagram from '../../components/footer/img/instagram.svg'
import author from '../home/aboutStream/img/streamer.webp'
import './SinglePost.css'

const SinglePost = () => {
    return(
        <>
        <div className="img-container img-post center">
            <img src={mujeres} alt="" />
        </div>
        <div className="container center">
            <article className='article-post'>
                <h1 className='title-dark title-post'>Mujer y economía</h1>
                <div className='meta-post between'>
                    <div className='social-post center'>
                        <img src={facebook} alt="" className='icon-post' />
                        <img src={twitter} alt="" className='icon-post' />
                        <img src={instagram} alt="" className='icon-post' />
                    </div>
                    <p className='paragraph'>Publicado el: <span className='title-mid'>30 de enero de 2022</span></p>
                </div>
                <div className="content-post">
                    <p className='paragraph p-article'>El papel de la mujer en la economía es crucial. A lo largo de la historia, la participación de la mujer en el mercado laboral ha ido aumentando y está transformando la forma en que la economía funciona. Aunque todavía hay desafíos y barreras a superar, las mujeres están ganando terreno y están contribuyendo en igualdad de condiciones a la economía global.</p>
                    <p className='paragraph p-article'>La inclusión de las mujeres en el mercado laboral tiene un impacto positivo en el crecimiento económico y la productividad. Según un estudio del Banco Mundial, el aumento de la participación laboral femenina se traduce en un aumento del PIB per cápita. Además, las empresas que tienen una cultura inclusiva y una mayor diversidad de género tienen mejores resultados financieros y una mayor innovación.</p>
                    <p className='paragraph p-article'>Sin embargo, todavía existen obstáculos para que las mujeres accedan y progresen en el mercado laboral. La brecha salarial entre hombres y mujeres sigue siendo un problema persistente, y las mujeres suelen tener menos oportunidades de ascenso y mayores responsabilidades familiares. Es importante tomar medidas para abordar estos desafíos y fomentar la igualdad de oportunidades para las mujeres en la economía.</p>
                    <p className='paragraph p-article'>Otro factor clave es el acceso a financiamiento y recursos para las mujeres empresarias. A menudo, las mujeres tienen más dificultades para obtener préstamos y inversiones, lo que limita su capacidad para crecer y expandir sus negocios. Es necesario asegurarse de que las mujeres tengan acceso a los recursos y el apoyo necesarios para emprender y prosperar en la economía.</p>
                    <p className='paragraph p-article'>En conclusión, la mujer es una parte fundamental de la economía y su participación y éxito tienen un impacto significativo en el crecimiento económico y la productividad. Aunque aún queda mucho por hacer para alcanzar la igualdad de género en el mercado laboral, la tendencia es positiva y es importante seguir avanzando en la inclusión y el apoyo a las mujeres en la economía.</p>
                </div>
            </article>
        </div>
        <div className="author container center">
            <div className="img-container img-author center">
                <img src={author} alt="" />
            </div>
            <div>
                <h3>Autor</h3>
                <p>María de los ángeles</p>
                <p>Lic. sociología</p>
                <p>Experta en temas de género</p>
            </div>
        </div>
        <div className='comments container center'>
            <h3 className='title-light'>Deja tu comentario</h3>
        </div>
        </>
    )
}

export default SinglePost