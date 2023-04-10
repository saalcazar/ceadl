import { NavLink } from "react-router-dom"

const Card = ({id, img, title, excerpt}) => {
    return (
        <div key={id} className="card">
            <div className="img-card img-container center">
                <img className='img-card-article' src={img} alt="" />
            </div>
            <article className='card-article center'>
                <h4 className='title-light card-title'>{title}</h4>
                <p className='paragraph-light p-card'>{excerpt}</p>
                <NavLink className="a-light a-slide" to={`/posts/${title}`}>Leer más...</NavLink>
            </article>
        </div>
    )
}

export default Card