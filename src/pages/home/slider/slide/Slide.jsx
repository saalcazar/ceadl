const Slide = ({img, p, title}) => {
    return(
        <>
            <div className="slider">
                <div className='img-slider img-container center'>
                    <img src={img} alt="Mujer y economía" />
                </div>
                <article className="container article-slide center">
                    <h1 className="title-light title-slider">{title}</h1>
                    <div className="contrast between">
                        <span className="paragraph-light slider-arrow">&#10094;</span>
                        <p className="paragraph-light p-slider">{p}</p>
                        <span className="paragraph-light slider-arrow">&#10095;</span>
                    </div>
                    <button className="button-dark">Leer más...</button>
                    <div className="slider-navigation center">
                        <span className="round-slider"></span>
                        <span className="round-slider"></span>
                        <span className="round-slider"></span>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Slide