import usePetition from '../../../hooks/usePetition'
import './SecondPosts.css'
import Card from './card/Card'

const SecondPosts = () => {

    const [cards] = usePetition(`posts/getAll?l=100&pg=1`, "SecondPost", [])

    return(
        <section className='main-secondposts center'>
            <h2 className='title-light'>Política</h2>
            <div className='between container cards'>
            {
                cards.map(({id, img, title, excerpt}) => (
                    <Card
                        key = {id}
                        img = {img}
                        title = {title}
                        excerpt = {excerpt}
                    />
                ))
            }
            </div>
        </section>
    )
}

export default SecondPosts
