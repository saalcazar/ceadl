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
            setCards(data.data.filter(post => post.tags.includes("FirstPost")).slice(-3).reverse())
        })
        .catch(() => {
            console.log("La petición fallo")
        }) 
    }, [])


    // useEffect(() => {
    //     const cards = document.querySelectorAll('.card');
    //     cards.forEach((card, index) => {
    //     setTimeout(() => card.classList.add('appear'), index * 100);
    //     });
    //     }, []);
    return(
        <section className='main-firstPost center'>
            <h2 className='title-dark'>Derechos humanos</h2>
            <div className='between container cards'>
            {
                cards.map(({img, title, excerpt, content}) => (
                    <Card
                        img={img}
                        title={title}
                        excerpt={excerpt}
                    />
                ))
            }
            </div>
        </section>
    )
}

export default FirstPosts