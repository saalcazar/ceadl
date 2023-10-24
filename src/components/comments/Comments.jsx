import { useState, useEffect } from 'react'
import './Comments.css'

const Comments = ({id}) => {
  
  const API_URL = import.meta.env.VITE_API_URL

  const [comment, setComment] = useState({
    name: '',
    email: '',
    content: '',
    idPost: 0
  })

  useEffect(() => {
    setComment((prevComment) => ({
      ...prevComment,
      idPost: id
    }))
  }, [id])

  const [lastComments, setLastComments] = useState([])

  useEffect(() => {
    fetch (`${API_URL}comment/getAll?id=${id}`)
    .then(res => res.json())
    .then(
      data => {
        console.log(data.data)
        setLastComments(data.data)
      }
    )
  }, [id])

  const itemChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setComment({
      ...comment,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${API_URL}comment/create`, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      console.log('Success: ', res)
      setComment({
        name: '',
        email: '',
        content: '',
        idPost: 0
      });
    })
    .catch(error => console.log('Error: ', error))
    
  }

  return (
    <>
      <h3 className="title-light">
        Déjanos tu comentario
      </h3>
      <form className="comments-form center" onSubmit={handleSubmit}>
        <label className="label-form">
          Nombre
          <input className='input-form' type="text" name="name" onChange={itemChange} />
        </label>
        <label className="label-form">
          Correo
          <input className='input-form' type="email" name="email" onChange={itemChange} />
        </label>
        <label className="label-form">
          Comentario
          <textarea className='text-form' name="content" onChange={itemChange} ></textarea>
        </label>
        <button className='button-form' type="submit">Enviar</button>
      </form>
      <section className='last-comments'>
        <h3 className='title-light'>Comentarios recientes</h3>
        {
          lastComments.map((lastComment, index) => 
            <article key={index} className='article-comment'>
              <div className='initial-comment'>{lastComment.name.charAt(0)}</div>
              <div className='content-comment'>
                <p className='name-comment'>{lastComment.name}</p>
                <p className='comment'>{lastComment.content}</p>
              </div>
            </article>
          )
        }
      </section>
    </>
  )
}

export default Comments