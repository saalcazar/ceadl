const Card = ({img, title, excerpt}) => {
    return (
        <div className="card">
            <div className="img-card img-container center">
                <img className='img-card-article' src={img} alt="" />
            </div>
            <article className='card-article center'>
                <h4 className='title-light card-title'>{title}</h4>
                <p className='paragraph-light p-card'>{excerpt}</p>
                <a href="" className='a-card a-light'>Leer mas...</a>
            </article>
        </div>
    )
}

export default Card