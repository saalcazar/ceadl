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
            setCards(data.data.filter(post => post.tags.includes("SecondPost")).slice(-3))
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
                cards.map(({img, title, excerpt}) => (
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

export default SecondPosts
