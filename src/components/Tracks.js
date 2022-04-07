//Track individual component, gets the Track name, album name, album image, duration in ms and the link to spotify's player
const Track = ({track, album, trackCover, durationMs, href}) => {
    
    //Function to convert the songs duration from ms to min:sec
    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    const duration = millisToMinutesAndSeconds(durationMs)

    return(
        <div className='track'>
            <img className='track__img' src={trackCover} alt={track} loading='lazy'/>
            <div className='track__info'>
                <a href={href} className='track__title'>{track}</a>
                <span className='track__artist'>{album.name}</span>
            </div>
            <div className='track__duration'>{duration}</div>
        </div>
    )
}

//Track parent component that renders a list of tracks
const Tracks = ({tracks}) => {
    let trackObj = {tracks} 
    if(trackObj.tracks !== undefined){
        const listItems = trackObj.tracks.items.map((track) => {
            return (
                <Track
                    key={track.id}
                    track={track.name}
                    album={track.album}
                    durationMs={track.duration_ms}
                    trackCover={track.album.images[2].url}
                    href={track.uri}
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
    return (<div className='center'>Start typing to search in the spotify catalog</div>)
    
}

export default Tracks