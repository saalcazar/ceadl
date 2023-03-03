import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/home/Home'
import About from './pages/about/About'
import 'normalize.css/normalize.css';
import './index.css'
import Actions from './pages/actions/Actions'
import Contact from './pages/contact/Contact'
import Proyects from './pages/proyects/Proyects'
import Posts from './pages/posts/Posts'
import SinglePost from './pages/post/SinglePost'
import Structure from './pages/structure/Structure'
import Stream from './pages/stream/Stream'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='quienessomos' element={<About />}/>
          <Route path='acciones' element={<Actions />}/>
          <Route path='contacto' element={<Contact />} />
          <Route path ='proyectos' element={<Proyects />}/>
          <Route path ='estructura' element={<Structure />}/>
          <Route path ='stream' element={<Stream />}/>
        </Route>
        <Route path='/posts' element={<App />}>
          <Route index element={<Posts />} />
          <Route path=':primer-post' element={<SinglePost />}/>
        </Route>
      </Routes>
    </BrowserRouter>
)
