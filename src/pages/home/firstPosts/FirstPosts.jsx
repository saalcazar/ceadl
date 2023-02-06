import imgUno from './img/violencia.jpg'
import imgDos from './img/educacion.jpg'
import imgTres from './img/manifestaciones.jpg'
import "./FirstPosts.css"
import Card from './card/Card'

const FirstPosts = () => {
    return(
        <section className='main-firstPost center'>
            <h2 className='title-dark'>Derechos humanos</h2>
            <div className='between container cards'>
                <Card
                    img={imgUno}
                    title='¿Violencia contra la mujer? Rompamos el ciclo'
                    p='La violencia contra las mujeres y las niñas es una de las violaciones más generalizadas de los derechos humanos en el mundo.'
                />
                <Card 
                    img={imgDos}
                    title='¿Violencia contra la mujer?
                    Rompamos el ciclo'
                    p='Los niños tienen derecho a la educación. Es uno de los 10 Derechos fundamentales de los niños en la Declaración de los Derechos del Niño en 1959.'
                />
                <Card
                    img={imgTres}
                    title='¿Violencia contra la mujer?
                    Rompamos el ciclo'
                    p='La violencia contra las mujeres y las niñas es una de las violaciones más generalizadas de los derechos humanos en el mundo.'
                />
            </div>
        </section>
    )
}

export default FirstPosts