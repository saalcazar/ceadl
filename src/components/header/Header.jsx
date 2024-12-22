import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo-tres.svg'
import './Header.css'
import { useEffect, useState } from 'react'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const navMenu = document.getElementById('active-menu')
    const toggleItem = document.getElementById('toggle')

    if (toggle) {
      navMenu.classList.add('active-menu')
      toggleItem.classList.replace('toggle-animation-dos', 'toggle-animation')
    } else {
      navMenu.classList.remove('active-menu')
      toggleItem.classList.replace('toggle-animation', 'toggle-animation-dos')
    }
  }, [toggle])


  const onToggle = () => {
    setToggle(!toggle)
  }

  return(
  <header className="menu-container bg-gradient">
    <div className="container between main-menu">
      <div className="img-container logo-menu rotate-vertical-center">
        <NavLink to="/"><img className="logo" src={logo} alt="" /></NavLink>
      </div>
      <section className='mobile-menu' id='active-menu'>
        <div className='toggle toggle-animation-dos' id='toggle' onClick={onToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-left-collapse">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M9 4v16" />
          <path d="M15 10l-2 2l2 2" />
          </svg>
        </div>
        <nav>
          <ul className="menu-toggle">
            <li className="menu-toggle-item"><NavLink to="/quienessomos">Quienes somos</NavLink></li>
            <li className="menu-toggle-item"><NavLink to="/acciones">Líneas estratégicas</NavLink></li>
            <li className="menu-toggle-item"><NavLink to="/proyectos">Proyectos</NavLink></li>
            <li className="menu-toggle-item"><NavLink to="/contacto">Contacto</NavLink></li>
            <li className="menu-toggle-item"><NavLink to="/posts">Blog</NavLink></li>
          </ul>
        </nav>
        <div className='logo-toggle-conteiner'>
          <img src={logo} alt="" className='logo-toggle'/>
        </div>
      </section>
      <nav className="nav-menu">
        <ul className="menu between">
          <li className="menu-item blur-in"><NavLink className='a-light a-hover-dark' to="/quienessomos">Quienes somos</NavLink></li>
          <li className="menu-item blur-in"><NavLink className='a-light a-hover-dark' to="/acciones">Líneas estratégicas</NavLink></li>
          <li className="menu-item blur-in"><NavLink className='a-light a-hover-dark' to="/proyectos">Proyectos</NavLink></li>
          <li className="menu-item blur-in"><NavLink className='a-light a-hover-dark' to="/contacto">Contacto</NavLink></li>
          <li className="menu-item blur-in"><NavLink className='a-light a-hover-dark' to="/posts">Blog</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header