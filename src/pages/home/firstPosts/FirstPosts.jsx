import usePetition from "../../../hooks/usePetition"
import "./FirstPosts.css"
import Card from './card/Card'

const FirstPosts = () => {

    const [cards] = usePetition(`getAll?l=100&pg=1`, "SecondPost", [])

    return(
        <section className='main-firstPost center'>
            <h2 className='title-dark'>Derechos humanos</h2>
            <div className='between container cards'>
            {
                cards.map(({img, title, excerpt}) => (
                    <Card
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