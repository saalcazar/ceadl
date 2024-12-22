import facebook from '../../components/footer/img/facebook.svg'
import twitter from '../../components/footer/img/twitter.svg'
import instagram from '../../components/footer/img/instagram.svg'
import './SinglePost.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Comments from '../../components/comments/Comments'
import useEmploy from '../../hooks/useEmploy'

const SinglePost = () => {

    const params = useParams()

    const API_URL = import.meta.env.VITE_API_URL
    const [post, setPost] = useState({})
    const [employ, setEmploy] = useState('ceadl')
    const [paragraphs, setParagraphs] = useState([])

    useEffect(() => {
        fetch(`${API_URL}posts/getByTitle?title=${params.post}`)
        .then((resp) => resp.json())
        .then((data) => {
            setPost(data.data)
            setEmploy(data.data.author)
            setParagraphs(data.data.content.split('\n\n'))
        })
        .catch(() => {
            console.log("La petición fallo")
        }) 
    }, [])

    const user = useEmploy(employ)

    return(
        <>
        <div className="container">
            <div className="img-container img-post">
                <img src={post.img} alt="" />
            </div>
            <article className='article-post'>
                <h1 className='title-dark title-post'>{params.post}</h1>
                <div className='meta-post between'>
                    <div className='social-post center'>
                        <a href=""><img src={facebook} alt="" className='icon-post' /></a>
                        <a href=""><img src={twitter} alt="" className='icon-post' /></a>
                        <a href=""><img src={instagram} alt="" className='icon-post' /></a>
                    </div>
                    <p className='paragraph'>Publicado el: <span className='title-mid'>{Date(post.date)}</span></p>
                </div>
                <div className="content-post">
                    {
                        paragraphs.map((paragraph, index) => (
                            <p className="p-article" key={index}>{paragraph}</p>
                        ))
                    }
                </div>
            </article>
        </div>
        <div className="author container">
            <div className="img-container img-author center">
                <img src={user.img} alt="" />
            </div>
            <div className='description-author'>
                <h3 className='author-title paragraph-mid'>Autor</h3>
                <p className='title-mid p-author'>{user.name}</p>
                <p className='paragraph-mid p-author'>{user.proffesion}</p>
                <p className='paragraph-mid p-author'>{user.experience}</p>
            </div>
        </div>
        <div className='comments container center'>
            <Comments
                id = {post.id}
            />
        </div>
        </>
    )
}

export default SinglePost