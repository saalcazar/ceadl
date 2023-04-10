import { NavLink } from "react-router-dom"

const Card = ({id, title, excerpt, img}) => {
    return(
        <div className="card center ">
            <div className='img-container img-card-first'>
                <img src={img} alt='' />
            </div>
            <article className='article-card'>
                <h4 className='title-card'>{title}</h4>
                <p className='paragraph p-card'>{excerpt}</p>
                <NavLink className="a-dark a-slide" to={`/posts/${title}`}>Leer más...</NavLink>
            </article>
        </div>
    )
}

export default Card