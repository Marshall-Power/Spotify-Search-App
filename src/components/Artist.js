const Artist = ({artist, artistCover, href}) => {
    
    return(
         <div className='artistCard'>
             <img className='artistCard__img' src={artistCover} alt={artist} loading='lazy'/>
             <a href={href} className='artistCard__name'><span >{artist}</span></a>
             <span className='artistCard__tag'>Artist</span>
         </div>
     )
 }

export default Artist