import Track from "./Track"

//Track parent component that renders a list of tracks
const Tracks = (trackList) => {
    if(trackList.tracks !== undefined){
        const listItems = trackList.tracks.items.map((track) => {
            return (
                <Track
                    key={track.id}
                    track={track.name}
                    album={track.album}
                    durationMs={track.duration_ms}
                    trackCover={track.album.images[2].url}
                    href={track.external_urls['spotify']}
                />
            )
        })
       
        return(
            <div className='_container _section'> 
                <h2 className='_pageSubTitle'>Songs</h2>
                {listItems}
            </div>
        )
    }    
}

export default Tracks