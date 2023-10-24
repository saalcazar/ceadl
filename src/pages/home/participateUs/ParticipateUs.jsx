import { useState } from 'react';
import './ParticipateUs.css';

const ParticipateUs = () => {
  const API_URL = import.meta.env.VITE_API_URL
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${API_URL}mail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ha ocurrido un error al enviar los datos');
      }
      setSuccess(true);
      setName('');
      setEmail('');
    })
    .catch(error => {
      setError(error.message);
    });
  };

  return(
    <section className="main-participate center img-container">
      <article className='participate-article center container'>
        <h2 className='title-light title-participate'>Participa con nosotros</h2>
        <div className="contrast ">
          <p className='paragraph-light p-participate'>"Únete a nosotros en nuestras actividades por los Derechos Humanos y aprende cómo defender y promover los derechos de todas las personas."</p>
        </div>
        <form onSubmit={handleSubmit} className='between form-participate'>
          <div className="send-email">
            <span className='p-icon'>Nombre:</span>
            <input type="text" name="name" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
          </div>
          <div className="send-email">
            <span className='p-icon'>Email:</span>
            <input type="email" name="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </div>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">¡Gracias por suscribirte!</p>}
          <input className='button-dark btn-participate' type="submit" value="Suscribirse" />
        </form>
      </article>
    </section>
  );
};

export default ParticipateUs;