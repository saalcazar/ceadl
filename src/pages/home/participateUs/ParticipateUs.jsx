import './ParticipateUs.css'
const ParticipateUs = () => {
    return(
        <section className="main-participate center img-container">
            <article className='participate-article center container'>
                <h2 className='title-light title-participate'>Participa con nosotros</h2>
                <div className="contrast ">
                    <p className='paragraph-light p-participate'>"Únete a nosotros en nuestras actividades por los Derechos Humanos y aprende cómo defender y promover los derechos de todas las personas."</p>
                </div>
                <form action="" className='center form-participate'>
                    <div className="send-email">
                        <span className='p-icon'>@</span>
                        <input type="email" name="" id="" />
                    </div>
                    <input className='button-dark btn-participate' type="submit" value="Suscribete" />
                </form>
            </article>
        </section>
    )
}

export default ParticipateUs