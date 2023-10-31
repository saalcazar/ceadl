import { useEffect, useState } from "react"
import Card from "./card/Card"
import './Posts.css'

const Posts = ()=> {
  const API_URL = import.meta.env.VITE_API_URL
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch(`${API_URL}posts/getAll?l=100&pg=1`)
    .then((resp) => resp.json())
    .then((data) => {
    setCards(data.data)
    console.log(data.data)
    })
    .catch(() => {
    console.log("La petición fallo")
    }) 
  }, [])
  return (
    <>
      <div className="center">
        <h2 className="title-dark title-posts">POSTS</h2>
      </div>
      <section className="container main-posts">
        {
          cards.map((card, index) =>
            <Card
              key={index}
              i={index}
              title={card.title}
              excerpt={card.excerpt}
              img={card.img}
            />
          )
        }
      </section>
    </>
  )
}

export default Posts