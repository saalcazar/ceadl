const Card = ({title, p, img}) => {
    return(
        <div className="card">
            <div className='img-container img-card'>
                <img src={img} alt='' />
                <article className='article-card'>
                    <h4 className='title-card'>{title}</h4>
                    <p className='paragraph p-card'>{p}</p>
                    <a href="" className='a-dark a-card'>Leer más...</a>
                </article>
            </div>
        </div>
    )
}

export default Card