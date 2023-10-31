import log from '../../src/assets/logo-tres.svg'
import imgJoel from '../../src/assets/joel.svg'
import imgSamuel from '../../src/assets/samuel.svg'

const employs = {
  ceadl: {
    name: 'CEADL',
    proffesion: 'Centro de Estudios y Apoyo al Desarrollo Local',
    experience: 'ONG',
    img: log
  },
  Samuel: {
    name: 'Samuel Alcazar',
    proffesion: 'Ing. Sistemas',
    experience: 'Experto en Fullstack',
    img: imgSamuel
  },
  Joel: {
    name: 'Joel Ibarra',
    proffesion: 'Lic. Antropología',
    experience: 'Educador',
    img: imgJoel
  }
}

const useEmploy = (nameEmploy) => {
  const user = employs[nameEmploy]
  return user
}

export default useEmploy