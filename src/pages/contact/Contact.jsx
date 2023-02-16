import './Contact.css'
const Contact = () => {
    const mapElAlto = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3825.343798212713!2d-68.16543779843414!3d-16.508732199999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6f201555a4291c87!2sCentro%20de%20Estudios%20y%20Apoyo%20al%20Desarrollo%20Local!5e0!3m2!1ses-419!2sbo!4v1676511963449!5m2!1ses-419!2sbo" width="470" height="440" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    const mapSucre = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7542.880575621668!2d-65.259132!3d-19.04437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf35aca85427%3A0xfee93c44b1c3f33a!2sJunin%20407%2C%20Sucre!5e0!3m2!1ses-419!2sbo!4v1676512970300!5m2!1ses-419!2sbo" width="470" height="440" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
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
                        <li className='d-item'>Calle 4 Nro 402 esq. Av. 6 de Marzo, zona 2 de octubre</li>
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
        </>
    )
}

export default Contact