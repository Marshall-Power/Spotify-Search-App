import React from 'react'
import albumPlaceholder from '../assets/img/album-placeholder.png'
//Album individual component, gets the album release date, name and image as props
import Album from './Album'

type AlbumsProps = SpotifyApi.AlbumSearchResponse

//Album parent component, renders the list of albums, gets the full albums object from spotify and renders if it's not undefined
 const Albums = (albumsList: AlbumsProps): JSX.Element | null => {

    if(albumsList.albums === undefined || albumsList.albums.items.length === 0){
        return null
    } 

    const listItems = albumsList.albums.items.map((album) => {
        return (
            <Album
                key={album.id}
                album={album.name}
                albumCover={album.images ? album.images[1].url : albumPlaceholder}
                albumDate={album.release_date}
            />
        )
    })
    
    return(
        <div className=' _section'>
            <div className='_container'> 
                <h2 className='_pageSubTitle'>Albums</h2>
                <div className='_grid _grid--fourCol'>
                    {listItems}
                </div>
            </div>
        </div>
    )
 }
 
 export default Albums