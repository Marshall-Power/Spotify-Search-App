import SearchBar from "../components/SearchBar"
import Tracks from "../components/Tracks"
import Footer from "../components/Footer"
import Login from './Login'
import ArtistCard from "../components/ArtistCard"
import AlbumCard from "../components/AlbumCard"
import useFetch from "../hooks/useFetch"
import Nav from "../components/Nav"
import Cookies from 'js-cookie'

const Home = () => {
    const { data, setData } = useFetch();
    let token = Cookies.get("spotifyAuthToken")
    
    if(token){
      return (
      <div className='page'>
        <div className='main'>
          <h1 className='center _pageTitle'>Spotify Search</h1>
          <Nav/>
          <SearchBar
            placeholder="Artists, albums, or tracks"
            onChange={(e) => setData({ ...data, slug: e.target.value })}
          />
      
          <Tracks tracks={data.results.tracks}/> 
          <ArtistCard artists={data.results.artists}/>
          <AlbumCard albums={data.results.albums}/>
        </div>
        <Footer/>
      </div>
  )} else {
    return <Login/>
  }
}

export default Home