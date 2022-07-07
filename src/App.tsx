import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-spotify-auth/dist/index.css'
import './assets/styles/styles.scss'

import Home from './pages/Home'
import Login from './pages/Login'
import Redirect from './components/Redirect';
import About from './pages/About'


const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route
            path="/callback"
            element={<Redirect target='/home'/>}
          />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App