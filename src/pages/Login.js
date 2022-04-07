import React from 'react'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'

const Login = () => {
  //If the token to request spotify's data isn't set the login page will appear, otherwise the search page will be shown
  return (
    <div id='app'>
        <div className='loginContainer'>
          <h2>Login to start searching</h2>
        
          <SpotifyAuth
            redirectUri='http://localhost:3000/callback'
            clientID='0d78c774b6eb44a8bc04de3f77f8e46c'
            scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
          />
        </div>
    </div>
  )
}

export default Login