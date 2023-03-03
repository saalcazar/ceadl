const Card = ({title, p, img}) => {
    return(
        <div className="card center ">
            <div className='img-container img-card-first'>
                <img src={img} alt='' />
            </div>
            <article className='article-card'>
                <h4 className='title-card'>{title}</h4>
                <p className='paragraph p-card'>{p}</p>
                <a href="" className='a-dark a-card' onClick={() => scroll.scrollToTop()}>Leer más...</a>
            </article>
        </div>
    )
}

export default Card