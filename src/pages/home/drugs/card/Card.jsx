import { NavLink } from "react-router-dom"

const Card = ({id, title, excerpt, img}) => {
    return(
        <div className="card card-drugs">
            <div className='img-container img-card-first'>
                <img src={img} alt='' />
            </div>
            <NavLink to={`/posts/${title}`}>
                <article className='article-card'>
                    <h4 className='title-card'>{title}</h4>
                    <p className='paragraph p-card'>{excerpt}</p>
                    <p className="article-button">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-book"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
                        Leer más...
                    </p>
                </article>
            </NavLink>
        </div>
    )
}

export default Card