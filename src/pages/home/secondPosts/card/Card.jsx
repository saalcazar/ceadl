import { NavLink } from "react-router-dom"

const Card = ({id, img, title, excerpt}) => {
    return (
        <div key={id} className="card card-drugs">
            <div className="img-card img-container center">
                <img className='img-card-article' src={img} alt="" />
            </div>
            <NavLink to={`/posts/${title}`}>
                <article className='card-article center'>
                    <h4 className='title-light card-title'>{title}</h4>
                    <p className='paragraph-light p-card'>{excerpt}</p>
                    <p className="a-light a-secondpost">Leer más...</p>
                </article>
            </NavLink>
        </div>
    )
}

export default Card