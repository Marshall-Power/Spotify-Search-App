import React from 'react'
import Nav from '../components/Nav'
import Cookies from 'js-cookie'
import Login from './Login'
import Footer from '../components/Footer'
import AboutData from '../components/aboutData'

const About = (): JSX.Element => {
  
  let token: string | undefined = Cookies.get("spotifyAuthToken")
  
  if(token === undefined) {
    return <Login/>
  }
  
  return (
    <div className='page'>
      <div className='main'>
        <h1 className='center _pageTitle'>About</h1>
        <Nav/>
        <AboutData token={token}/>
      </div>
      <Footer/>
     
    </div>
  )
}

export default About