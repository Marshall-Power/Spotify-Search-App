import React from 'react'

interface ArtistProps {
    artist: string
    artistCover: string
    href: string
}

const Artist = ({artist, artistCover, href}: ArtistProps): JSX.Element => {  
    return(
         <div className='artistCard'>
             <img className='artistCard__img' src={artistCover} alt={artist} loading='lazy'/>
             <a href={href} className='artistCard__name' target="_blank" rel="noreferrer noopener"><span >{artist}</span></a>
             <span className='artistCard__tag'>Artist</span>
         </div>
     )
 }

export default Artist