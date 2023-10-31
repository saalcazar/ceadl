import tiktok from '../../../assets/tiktok.svg'
import facebook from '../../../assets/facebook.svg'
import youtube from '../../../assets/youtube.svg'
import x from '../../../assets/Twitter X.svg'
import './SocialNetwork.css'

const SocialNetwork = () => {
  return (
    <section className="main-social center">
      <ul className='socialList'>
        {/* <li className='socialItem'>
          <a href="" style={{ '--clr': '#ff0050' }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span><img className='socialImg' src={tiktok} alt="" /></span>
          </a>
        </li> */}
        <li className='socialItem'>
          <a href="https://www.facebook.com/ceadl" target='_blank' style={{ '--clr': '#4267b2' }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span><img className='socialImg' src={facebook} alt="" /></span>
          </a>
        </li>
        <li className='socialItem'>
          <a href="https://www.youtube.com/@canalceadl" target='_blank' style={{ '--clr': '#cd201f' }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span><img className='socialImg' src={youtube} alt="" /></span>
          </a>
        </li>
        <li className='socialItem'>
          <a href="https://twitter.com/ceadl" target='_blank' style={{ '--clr': '#1da1f2' }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span><img className='socialImg' src={x} alt="" /></span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default SocialNetwork