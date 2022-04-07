import albumPlaceholder from '../assets/img/album-placeholder.png'

//Album individual component, gets the album release date, name and image as props
const Album = ({album, albumCover, albumDate}) => {
    let albumYear = albumDate.slice(0, 4)

    return(
         <div className='albumCard'>
             <img className='albumCard__img' src={albumCover} alt={album} loading='lazy'/>
             <span className='albumCard__name'>{albumYear} · {album}</span>
         </div>
     )
 }
 //Album parent component, renders the list of albums, gets the full albums object from spotify and renders if it's not undefined
 const Albums = ({albums}) => {
     let albumObj = {albums} 
     
     if(albumObj.albums !== undefined){
         const listItems = albumObj.albums.items.map((album) => {
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
     return (
         null
     )
     
 }
 
 export default Albums