import React from 'react'
import SearchBar from "../components/SearchBar"
import Tracks from "../components/Tracks"
import Footer from "../components/Footer"
import Login from './Login'
import ArtistCard from "../components/ArtistCard"
import AlbumCard from "../components/AlbumCard"
import StartTyping from "../components/startTyping"
import useFetch from "../hooks/useFetch"
import Nav from "../components/Nav"
import Error from '../components/error'
import Cookies from 'js-cookie'

const Home = (): JSX.Element => {
    
  const { data, setData } = useFetch();
  let token = Cookies.get("spotifyAuthToken")

  if(token === undefined){
    return <Login />
  } 

  if (data.results) {

    return (
      <div className='page'>
        <div className='main'>
          <h1 className='center _pageTitle'>Spotify Search</h1>
          <Nav/>
          <SearchBar
            placeholder="Artists, albums, or tracks"
            onChange={(e) => setData({ ...data, slug: e.target.value })}
          />
          <StartTyping data={data} />

          <Tracks tracks={data.results.tracks}/> 
          <ArtistCard artists={data.results.artists}/>
          <AlbumCard albums={data.results.albums}/>
        </div>
        <Footer/>
      </div>
  )}
  return <Error errorMsg={'Oops, something went wrong'}/>
}

export default Home