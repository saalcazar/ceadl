import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import './Proyects.css'

const Proyects = () => {
  const proyects = [
    {
      title: 'Lucha contra todo tipo de violencia',
      description: 'Reducir todas las formas de violencia contra jóvenes, adolescentes, niñas, niños y mujeres en los municipios de El Alto y Sucre. Garantizar la prevención de las violencias en contra de niñas, niños y jóvenes en espacios educativos, familiares, comunitarios y virtuales desde el enfoque de los derechos humanos, los derechos de la niñez y el desarrollo sostenible. Niños, niñas y jóvenes se forman en cultura de paz, desde el enfoque de derechos y desarrollo sostenible, y promueven y fortalecen sus organizaciones.',
      img: p1
    },
    {
      title: 'Culturas de prevención frente al consumo y tráfico de drogas en adolescentes y jóvenes, desde un enfoque de derechos humanos',
      description: 'Esta es una propuesta educativo-preventiva frente al consumo y tráfico de drogas y estupefacientes que afecta al país y principalmente a adolescentes y jóvenes. Parte de la constatación de que las políticas nacionales de lucha contra las drogas, que se viene implementando en el país, ha fracasado. Este problema conlleva altos índices de violencia intrafamiliar y juvenil, particularmente de la mujer y los niños/as, embarazos no planificados de adolescentes, violencia entre pares, organización de pandillas juveniles, delincuencia y criminalidad. La propuesta busca impulsar alternativas educativas, recreativas y organizativas para enfrentar el consumo y tráfico de drogas desde la construcción de tejidos sociales resilientes y propositivos, donde los/as beneficiarios/as y la sociedad civil sean los actores principales para enfrentar y realizar acciones de prevención, observancia y control social sobre políticas públicas preventivas de consumo de drogas.',
      img: p2
    }
  ]
  return (
    <>
      <div className="center bg-light title-proyect">
        <h2 className="title-dark">Proyectos</h2>
      </div>
      <section className="project bg-dark container">
        <article className='article-project'>
          <div className='project-description'>
            <h3 className='title-project-description title-light'>{proyects[0].title}</h3>
            <p className='paragraph-light'>{proyects[0].description}</p>
          </div>
          <div className='img-project-container'>
            <img className='img-project' src={proyects[0].img} alt="" />
          </div>
        </article>
      </section>
      <section className="project bg-light container">
        <article className='article-project'>
          <div className='img-project-container'>
            <img className='img-project' src={proyects[1].img} alt="" />
          </div>
          <div className='project-description'>
            <h3 className='title-project-description title-dark'>{proyects[1].title}</h3>
            <p className='paragraph'>{proyects[1].description}</p>
          </div>
        </article>
      </section>
    </>
  )
  }

export default Proyects