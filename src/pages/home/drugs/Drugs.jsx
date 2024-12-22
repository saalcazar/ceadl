import usePetition from "../../../hooks/usePetition"
import "./Drugs.css"
import Card from './card/Card'

const Drugs = () => {

    const [cards] = usePetition(`posts/getAll?l=100&pg=1`, "DrugsPost", [])

    return(
        <section className='main-drugsPost center'>
            <h2 className='title-light'>Consumo de drogas</h2>
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

export default Drugs