import { NavLink } from "react-router-dom"

const Card = ({i, title, excerpt, img}) => {
  return (
    <article className="card-posts" key={i}>
      <div className="img-container img-card-posts">
        <img className="img-posts" src={img} alt="" />
      </div>
      <NavLink to={`/posts/${title}`}>
        <div className="content-card-posts">
          <h4 className="title-dark title-post">{title}</h4>
          <p className="paragraph p-posts">{excerpt}</p>
          <p className="a-light a-posts">Leer más</p>
        </div>
      </NavLink>
    </article>
  )
}

export default Card