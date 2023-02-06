import imgUno from '../firstPosts/img/violencia.jpg'
import imgDos from '../firstPosts/img/educacion.jpg'
import imgTres from '../firstPosts/img/manifestaciones.jpg/'
import './SecondPosts.css'
import Card from './card/Card'

const SecondPosts = () => {
    return(
        <section className='main-secondposts center bg-dark'>
            <h2 className='title-light'>Política</h2>
            <div className='between container cards'>
                <Card
                    img={imgUno}
                    title='¿Violencia contra la mujer? Rompamos el ciclo'
                    p='La violencia contra las mujeres y las niñas es una de las violaciones más generalizadas de los derechos humanos en el mundo.'
                />
                <Card
                    img={imgDos}
                    title='¿Violencia contra la mujer? Rompamos el ciclo'
                    p='La violencia contra las mujeres y las niñas es una de las violaciones más generalizadas de los derechos humanos en el mundo.'
                />
                <Card
                    img={imgTres}
                    title='¿Violencia contra la mujer? Rompamos el ciclo'
                    p='La violencia contra las mujeres y las niñas es una de las violaciones más generalizadas de los derechos humanos en el mundo.'
                />
            </div>
        </section>
    )
}

export default SecondPosts
