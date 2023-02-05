const Slide = ({img, p, title}) => {
    return(
        <>
            <div className="slider">
                <div className='img-slider img-container center'>
                    <img src={img} alt="Mujer y economía" />
                </div>
                <article className="container article-slide center">
                    <h2 className="title-light title-slider">{title}</h2>
                    <div className="contrast between">
                        <span className="paragraph-light slider-arrow">&#10094;</span>
                        <p className="paragraph-light p-slider">{p}</p>
                        <span className="paragraph-light slider-arrow">&#10095;</span>
                    </div>
                    <span className="button-dark read-more"><a className="a-light a-slide" href="">Leer más...</a></span>
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