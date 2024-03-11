import AboutStream from './aboutStream/AboutStream'
import FirstPosts from './firstPosts/FirstPosts'
import ParticipateUs from './participateUs/ParticipateUs'
import SecondPosts from './secondPosts/SecondPosts'
import Slider from './slider/Slider'
import SocialNetwork from './socialNetwork/SocialNetwork'
import Drugs from './drugs/Drugs'
const Home = () => {
    return(
        <>
            <Slider />
            <SocialNetwork />
            <FirstPosts />
            <Drugs />
            <ParticipateUs />
            <SecondPosts />
            <AboutStream />
        </>
    )
}

export default Home