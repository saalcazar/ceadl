import { useEffect, useState } from 'react'
import Slide from './slide/Slide'
import "./Slider.css"

const Slider = () => {

    const API_URL = import.meta.env.VITE_API_URL
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`${API_URL}getAll?l=100&pg=1`)
        .then((resp) => resp.json())
        .then((data) => {
            setPosts(data.data.filter(post => post.tags.includes("Slide")).slice(-3))
        })
        .catch(() => {
            console.log("La petición fallo")
        }) 
    }, [])

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % 3);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentSlide, posts.length])

    return (
        <section className="main-slider">
            <div className="content-slider">
                {
                    posts.map(({id, img, title, content}) => (
                        <Slide
                            key={id}
                            id={id}
                            img={img}
                            title={title}
                            content={content}
                            class = 'active'
                        />
                    ))[currentSlide]
                }
            </div>
        </section>
    )
}

export default Slider
