import usePetition from "../../../hooks/usePetition"
import "./Drugs.css"
import Card from './card/Card'

const FirstPosts = () => {

    const [cards] = usePetition(`posts/getAll?l=100&pg=1`, "DrugsPost", [])

    return(
        <section className='main-firstPost center'>
            <h2 className='title-dark'>Consumo de drogas</h2>
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

export default FirstPosts