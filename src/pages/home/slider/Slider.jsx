import { useEffect, useState } from 'react'
import Slide from './slide/Slide'
import "./Slider.css"
import usePetition from '../../../hooks/usePetition'

const Slider = () => {

    const [slider, loading] = usePetition(`posts/getAll?l=100&pg=1`, "Slide")
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % 3);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentSlide, 3])

    const handleSlideChange = (direction) => {
        if (direction === "prev") {
            setCurrentSlide((currentSlide - 1 + slider.length) % slider.length);
        } else if (direction === "next") {
            setCurrentSlide((currentSlide + 1) % slider.length);
        }
    }

    const handleRoundSliderClick = (index) => {
        setCurrentSlide(index);
    }

    if(loading) return (
        <section className='main-slider'>
            <div className="content-slider">
                <div className="loader center">
                    <h2 className='title-load tracking-in-expand'>Loading</h2>
                </div>
            </div>
        </section>
    )   

    return (
        <section className="main-slider">
            {
                slider && (
                    <div className="content-slider center">
                        {
                            slider.map(({id, img, title, excerpt}, index) => (
                                <Slide
                                    key={id}
                                    id={id}
                                    img={img}
                                    title={title}
                                    excerpt={excerpt}
                                    class={index === currentSlide ? 'active' : ''}
                                />
                            ))
                        }
                        <div className="slider-navigation between">
                            {
                                slider.map(({id}, index) => (
                                    <span
                                        key={id}
                                        className={`round-slider ${index === currentSlide ? 'round-active': ''}`}
                                        onClick={() => handleRoundSliderClick(index)}
                                    ></span>
                                ))
                            }
                        </div>
                        <div className='slider-arrows container between'>
                            <span className="slider-arrow arrow-left" id="left-arrow" onClick={() => handleSlideChange("prev")}>&#10094;</span>
                            <span className="slider-arrow arrow-right" id="right-arrow" onClick={() => handleSlideChange("next")}>&#10095;</span>
                        </div>
                    </div>
                )
            }
        </section>
    )
}

export default Slider
