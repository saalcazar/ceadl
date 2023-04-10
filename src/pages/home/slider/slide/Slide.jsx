import { NavLink } from "react-router-dom"

const Slide = (props) => {
    return(
        <>
            <div key={props.id} className={`slider ${props.class}`}>
                <div className='img-slider img-container center'>
                    <img src={props.img} alt={props.img} />
                </div>
                <article className="container article-slide center">
                    <h2 className="title-light title-slider">{props.title}</h2>
                    <div className="contrast center">
                        <p className="paragraph-light p-slider">{props.excerpt}</p>
                    </div>
                    <span className="button-dark read-more"><NavLink className="a-light a-slide" to={`/posts/${props.title}`}>Leer más...</NavLink></span>
                </article>
            </div>
        </>
    )
}

export default Slide