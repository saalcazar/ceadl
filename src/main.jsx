import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from './pages/home/Home'
import About from './pages/about/About'
import 'normalize.css/normalize.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='quienessomos' element={<About />}/>
        </Route>
      </Routes>
    </BrowserRouter>
)
