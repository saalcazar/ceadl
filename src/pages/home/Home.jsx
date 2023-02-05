import FirstPosts from './firstPosts/FirstPosts'
import Slider from './slider/Slider'
const Home = () => {
    return(
        <section className="main-container">
            <Slider />
            <FirstPosts />
        </section>
    )
}

export default Home