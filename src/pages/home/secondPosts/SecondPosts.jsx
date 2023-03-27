import imgUno from '../firstPosts/img/violencia.webp'
import imgDos from '../firstPosts/img/educacion.webp'
import imgTres from '../firstPosts/img/manifestaciones.webp'
import './SecondPosts.css'
import Card from './card/Card'
import { useEffect, useState } from 'react'

const SecondPosts = () => {

    const API_URL = import.meta.env.VITE_API_URL
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch(`${API_URL}getAll?l=100&pg=1`)
        .then((resp) => resp.json())
        .then((data) => {
            setCards(data.data.filter(post => post.tags.includes("SecondPosts")).slice(-3))
        })
        .catch(() => {
            console.log("La petición fallo")
        }) 
    }, [])
    return(
        <section className='main-secondposts center bg-dark'>
            <h2 className='title-light'>Política</h2>
            <div className='between container cards'>
            {
                cards.slice(-3).map(({img, title, content}) => (
                    <Card
                        img={img}
                        title={title}
                        content={content}
                    />
                ))
            }
            </div>
        </section>
    )
}

export default SecondPosts
