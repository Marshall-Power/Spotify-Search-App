//Album individual component, gets the album release date, name and image as props
export const Album = ({album, albumCover, albumDate}) => {
    let albumYear = albumDate.slice(0, 4)

    return(
         <div className='albumCard'>
             <img className='albumCard__img' src={albumCover} alt={album} loading='lazy'/>
             <span className='albumCard__name'>{albumYear} · {album}</span>
         </div>
     )
 }

 export default Album