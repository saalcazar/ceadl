import tdh from '../../../assets/partners/tdh-Suisse.jpg'
import educo from '../../../assets/partners/logo_educarcura.svg'
import freedom from '../../../assets/partners/freedom.png'
import maria from '../../../assets/partners/img_logo.png'
import saih from '../../../assets/partners/saih-logo.png'
import mondo from '../../../assets/partners/progettomondo.jpg'

import './Partners.css'

const Partners = () => {

  const logosPartners = [tdh, educo, freedom, maria, saih, mondo]

  return (
    <section className="main-partners center">
      <h2 className="title-light">Socios estratégicos</h2>
      <div className='logos container'>
        {
          logosPartners.map((logo, index) => (
            <div className='logo-c-partner' key={index}>
              <img className='logo-partner' src={logo} alt="" />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Partners