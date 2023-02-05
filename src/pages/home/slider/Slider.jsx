import sliderUno from './img/mujeres.jpg'
import Slide from './slide/Slide'
import "./Slider.css"
const Slider = () => {
    return (
        <div className="main-slider">
            <Slide
                img={sliderUno} 
                title="Mujer y economía"
                p="Las mujeres han estado históricamente subrepresentadas en la economía, ya sea en el empleo o en la propiedad de negocios. Sin embargo, en las últimas décadas, se ha hecho un esfuerzo para aumentar la participación de las mujeres en el mundo laboral y económico."
            />
        </div>
    )
}

export default Slider