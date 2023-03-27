import facebook from '../../components/footer/img/facebook.svg'
import twitter from '../../components/footer/img/twitter.svg'
import instagram from '../../components/footer/img/instagram.svg'
import author from '../home/aboutStream/img/streamer.webp'
import './SinglePost.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const SinglePost = () => {

    const params = useParams()

    const API_URL = import.meta.env.VITE_API_URL
    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`${API_URL}getByTitle?title=${params.post}`)
        .then((resp) => resp.json())
        .then((data) => {
            setPost(data.data)
        })
        .catch(() => {
            console.log("La petición fallo")
        }) 
    }, [])

    return(
        <>
        <div className="img-container img-post center">
            <img src={post.img} alt="" />
        </div>
        <div className="container center">
            <article className='article-post'>
                <h1 className='title-dark title-post'>{params.post}</h1>
                <div className='meta-post between'>
                    <div className='social-post center'>
                        <img src={facebook} alt="" className='icon-post' />
                        <img src={twitter} alt="" className='icon-post' />
                        <img src={instagram} alt="" className='icon-post' />
                    </div>
                    <p className='paragraph'>Publicado el: <span className='title-mid'>30 de enero de 2022</span></p>
                </div>
                <div className="content-post" dangerouslySetInnerHTML={{__html: post.content}}>
                    
                </div>
            </article>
        </div>
        <div className="author container">
            <div className="img-container img-author center">
                <img src={author} alt="" />
            </div>
            <div className='description-author'>
                <h3 className='author-title paragraph-mid'>Autor</h3>
                <p className='title-mid p-author'>María de los ángeles</p>
                <p className='paragraph-mid p-author'>Lic. sociología</p>
                <p className='paragraph-mid p-author'>Experta en temas de género</p>
            </div>
        </div>
        <div className='comments container center'>
            <h3 className='title-light'>Deja tu comentario</h3>
        </div>
        </>
    )
}

export default SinglePost