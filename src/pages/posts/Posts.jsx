import { NavLink } from "react-router-dom"

const Posts = ()=> {
    return (
        <>
        <h1>Listado de posts</h1>
        <NavLink to="/posts/primer-post">Primer Post</NavLink>
        </>
    )
}

export default Posts