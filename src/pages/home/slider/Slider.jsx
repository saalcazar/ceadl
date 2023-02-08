import { useEffect, useState } from 'react'
import Slide from './slide/Slide'
import "./Slider.css"

const slide = [
    {
        id: 0,
        img: '../../../../../src/pages/home/slider/img/mujeres.jpg', 
        title :"Mujer y economía",
        p:"Las mujeres han estado históricamente subrepresentadas en la economía, ya sea en el empleo o en la propiedad de negocios. Sin embargo, en las últimas décadas, se ha hecho un esfuerzo para aumentar la participación de las mujeres en el mundo laboral y económico."
    },

    {
        id: 1,
        img: '../../../../../src/pages/home/slider/img/violencia.jpg', 
        title: "Violencia de género",
        p: "Las mujeres han estado históricamente subrepresentadas en la economía, ya sea en el empleo o en la propiedad de negocios. Sin embargo, en las últimas décadas, se ha hecho un esfuerzo para aumentar la participación de las mujeres en el mundo laboral y económico."
    },
    {
        id: 2,
        img: '../../../../../src/pages/home/slider/img/lgbt.jpg', 
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
                            classSlider={`slider active`}
                        />
                    ))[currentSlide]
                }
            </div>
        </section>
    )
}

export default Slider
