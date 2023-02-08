import imgUno from './img/mujeres.jpg'
import imgDos from './img/violencia.jpg'
import imgTres from './img/lgbt.jpg'
import { useEffect, useState } from 'react'
import Slide from './slide/Slide'
import "./Slider.css"

const slide = [
    {
        id: 0,
        img: `${imgUno}`, 
        title :"Mujer y economía",
        p:"Las mujeres han estado históricamente subrepresentadas en la economía, ya sea en el empleo o en la propiedad de negocios. Sin embargo, en las últimas décadas, se ha hecho un esfuerzo para aumentar la participación de las mujeres en el mundo laboral y económico."
    },

    {
        id: 1,
        img: `${imgDos}`, 
        title: "Violencia de género",
        p: "Las mujeres han estado históricamente subrepresentadas en la economía, ya sea en el empleo o en la propiedad de negocios. Sin embargo, en las últimas décadas, se ha hecho un esfuerzo para aumentar la participación de las mujeres en el mundo laboral y económico."
    },
    {
        id: 2,
        img: `${imgTres}`, 
        title: "Por el derecho a la inclución",
        p: "Las mujeres han estado históricamente subrepresentadas en la economía, ya sea en el empleo o en la propiedad de negocios. Sin embargo, en las últimas décadas, se ha hecho un esfuerzo para aumentar la participación de las mujeres en el mundo laboral y económico."
    }

]

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slide.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentSlide, slide.length])

    return (
        <section className="main-slider">
            <div className="content-slider">
                {
                    slide.map(({id, img, title, p}) => (
                        <Slide
                            key={id}
                            id={id}
                            img={img}
                            title={title}
                            p={p}
                        />
                    ))[currentSlide]
                }
            </div>
        </section>
    )
}

export default Slider
