import './Contact.css'
const Contact = () => {
    const mapElAlto = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d737.4051362706696!2d-68.1755057654335!3d-16.516795856362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1699592953815!5m2!1ses-419!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    const mapSucre = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7542.880575621668!2d-65.259132!3d-19.04437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf35aca85427%3A0xfee93c44b1c3f33a!2sJunin%20407%2C%20Sucre!5e0!3m2!1ses-419!2sbo!4v1676512970300!5m2!1ses-419!2sbo" width="470" height="440" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    const mapLaPaz = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d956.390875793705!2d-68.1198057001211!3d-16.4976254693877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sbo!4v1699593376823!5m2!1ses-419!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    return(
        <>
        <div className="center bg-light title-contact">
            <h2 className="title-dark">Contáctanos</h2>
        </div>
        <section className="bg-dark">
            <div className="between container direction-container">
                <article className="direction bg-light center">
                    <h3 className="title-dark title-direction">El Alto</h3>
                    <ul>
                        <li className='d-item'>Calle José Ballivian, Av. Julio Cesar Valdez, zona Villa Bolívar C</li>
                        <li className='d-item'>(+591) 2 2829525</li>
                        <li className='d-item'>direccion@ceadl.org.bo</li>
                    </ul>
                </article>
                <div className="map" dangerouslySetInnerHTML={{ __html: mapElAlto }}></div>
            </div>
        </section>
        <section className="bg-light">
            <div className="between container direction-container">
                <div className="map" dangerouslySetInnerHTML={{ __html: mapSucre }}></div>
                <article className="direction bg-light center">
                    <h3 className="title-dark title-direction">Sucre</h3>
                    <ul>
                        <li className='d-item'>Calle Junín Nro 407 esq. Hernando Silez, zona Central</li>
                        <li className='d-item'>(+591) 4 6458270</li>
                        <li className='d-item'>direccion@ceadl.org.bo</li>
                    </ul>
                </article>
            </div>
        </section>
        <section className="bg-dark">
            <div className="between container direction-container">
                <article className="direction bg-light center">
                    <h3 className="title-dark title-direction">La Paz</h3>
                    <ul>
                        <li className='d-item'>Calle Pasoskanqui Nro 1529, Av. Brasil, zona Miraflores, Edificio Killa</li>
                        <li className='d-item'>(+591) 2 2829525</li>
                        <li className='d-item'>direccion@ceadl.org.bo</li>
                    </ul>
                </article>
                <div className="map" dangerouslySetInnerHTML={{ __html: mapLaPaz }}></div>
            </div>
        </section>
        </>
    )
}

export default Contact