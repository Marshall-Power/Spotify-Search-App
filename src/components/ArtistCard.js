import personPlaceholder from '../assets/img/placeholder-image-person-jpg.jpg'
//Artist individual component, gets the artist name and artist image as props
const Artist = ({artist, artistCover, href}) => {
    
   return(
        <div className='artistCard'>
            <img className='artistCard__img' src={artistCover} alt={artist} loading='lazy'/>
            <a href={href} className='artistCard__name'><span >{artist}</span></a>
            <span className='artistCard__tag'>Artist</span>
        </div>
    )
}
//Artist parent component, renders the list of artists, gets the full artists object from spotify and renders if it's not undefined
const Artists = ({artists}) => {
    let artistObj = {artists} 
    
    if(artistObj.artists !== undefined){
        const listItems = artistObj.artists.items.map((artist) => {
            return (
                <Artist
                    key={artist.id}
                    artist={artist.name}
                    artistCover={artist.images[1] ? artist.images[1].url : personPlaceholder}
                    href={artist.uri}
                />
            )
        })
       
        return(
            <div className=' _section _section--grey'>
                <div className='_container'> 
                    <h2 className='_pageSubTitle'>Artists</h2>
                    <div className='_grid _grid--fourCol'>
                        {listItems}
                    </div>
                </div>
            </div>
        )
    }
    return null
    
}

export default Artists