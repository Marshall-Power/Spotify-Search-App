import React from 'react'

interface trackProps {
    track: string
    album: {
        name: string
    }
    trackCover: string
    durationMs: number
    href: string
}

//Track individual component, gets the Track name, album name, album image, duration in ms and the link to spotify's player
const Track = ({track, album, trackCover, durationMs, href}: trackProps): JSX.Element => {
    
    //Function to convert the songs duration from ms to min:sec
    function millisToMinutesAndSeconds(millis: number): string {
        
        let minutes = Math.floor(millis / 60000);
        let seconds = Math.round(((millis % 60000) / 1000));
        
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    const duration = millisToMinutesAndSeconds(durationMs)

    return(
        <div className='track'>
            <img className='track__img' src={trackCover} alt={track} loading='lazy'/>
            <div className='track__info'>
                <a href={href} className='track__title' target="_blank" rel="noreferrer noopener">{track}</a>
                <span className='track__artist'>{album.name}</span>
            </div>
            <div className='track__duration'>{duration}</div>
        </div>
    )
}

export default Track