import { NavLink } from "react-router-dom"

const Card = ({i, title, excerpt, img}) => {
  return (
    <article className="card-posts" key={i}>
      <div className="img-container img-card-posts">
        <img className="img-posts" src={img} alt="" />
      </div>
      <div className="content-card-posts">
        <h4 className="title-light title-post">{title}</h4>
        <p className="paragraph-light p-posts">{excerpt}</p>
        <NavLink className="a-dark a-posts" to={`/posts/${title}`}>Leer más</NavLink>
      </div>
    </article>
  )
}

export default Card