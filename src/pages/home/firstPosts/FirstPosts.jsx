import imgUno from './img/violencia.webp'
import imgDos from './img/educacion.webp'
import imgTres from './img/manifestaciones.webp'
import "./FirstPosts.css"
import Card from './card/Card'
import { useEffect, useState } from 'react'


const FirstPosts = () => {

    const API_URL = import.meta.env.VITE_API_URL
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch(`${API_URL}getAll?l=100&pg=1`)
        .then((resp) => resp.json())
        .then((data) => {
            setCards(data.data.filter(post => post.tags.includes("FirstPost")).slice(-3))
        })
        .catch(() => {
            console.log("La petición fallo")
        }) 
    }, [])


    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
        setTimeout(() => card.classList.add('appear'), index * 100);
        });
        }, []);
    return(
        <section className='main-firstPost center'>
            <h2 className='title-dark'>Derechos humanos</h2>
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

export default FirstPosts