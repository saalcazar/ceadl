import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const Posts = ()=> {
    const API_URL = import.meta.env.VITE_API_URL
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch(`${API_URL}getAll?l=100&pg=1`)
        .then((resp) => resp.json())
        .then((data) => {
            setCards(data.data.filter(post => post.tags.includes("SecondPost")).slice(-3))
        })
        .catch(() => {
            console.log("La petición fallo")
        }) 
    }, [])
    return (
        <>
        <h1>Listado de posts</h1>
        <NavLink to="/posts/primer-post">Primer Post</NavLink>
        </>
    )
}

export default Posts