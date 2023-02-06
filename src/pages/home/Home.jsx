import FirstPosts from './firstPosts/FirstPosts'
import ParticipateUs from './participateUs/ParticipateUs'
import Slider from './slider/Slider'
const Home = () => {
    return(
        <section className="main-container">
            <Slider />
            <FirstPosts />
            <ParticipateUs />
        </section>
    )
}

export default Home