import usePetition from "../../../hooks/usePetition"
import "./FirstPosts.css"
import Card from './card/Card'

const FirstPosts = () => {

    const [cards] = usePetition(`posts/getAll?l=100&pg=1`, "FirstPost", [])

    return(
        <section className='main-firstPost center'>
            <h2 className='title-dark'>Derechos humanos</h2>
            <div className='cards'>
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

export default FirstPosts