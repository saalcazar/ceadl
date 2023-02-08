import { useEffect, useState } from "react";

const Slide = (props) => {

    return(
        <>
            <div key={props.id} className={props.classSlider}>
                <div className='img-slider img-container center'>
                    <img src={props.img} alt={props.img} />
                </div>
                <article className="container article-slide center">
                    <h2 className="title-light title-slider">{props.title}</h2>
                    <div className="contrast between">
                        <span className="paragraph-light slider-arrow" id="left-arrow">&#10094;</span>
                        <p className="paragraph-light p-slider">{props.p}</p>
                        <span className="paragraph-light slider-arrow" id="right-arrow">&#10095;</span>
                    </div>
                    <span className="button-dark read-more"><a className="a-light a-slide" href="">Leer más...</a></span>
                    <div className="slider-navigation center">
                        <span className="round-slider round-active"></span>
                        <span className="round-slider"></span>
                        <span className="round-slider"></span>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Slide