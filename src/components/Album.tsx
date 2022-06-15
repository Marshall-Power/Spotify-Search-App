import React from 'react'

interface AlbumProps {
    album: string;
    albumCover: string;
    albumDate: string;
}

//Album individual component, gets the album release date, name and image as props
const Album = ({album, albumCover, albumDate}: AlbumProps): JSX.Element => {
    
    let albumYear = albumDate.slice(0, 4)

    return(
         <div className='albumCard'>
             <img className='albumCard__img' src={albumCover} alt={album} loading='lazy'/>
             <span className='albumCard__name'>{albumYear} · {album}</span>
         </div>
     )
 }

 export default Album