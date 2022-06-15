import React from 'react'
import { useState, useEffect } from 'react'
import fetchData from '../services/getData'
import personPlaceholder from '././../assets/img/placeholder-image-person-jpg.jpg'

type UserData = SpotifyApi.CurrentUsersProfileResponse;

const AboutData = ({ token }: { token: string}): JSX.Element | null => {
    
  const [data, setData] = useState<UserData | undefined>(undefined)

  useEffect(() => {
    fetchData(undefined, token)
      .then((res: UserData): void => {
        setData(res);
      })
  },[token])  
  
    if(data) {
      
      let personImg: string;
      if (data.images !== undefined && data.images !== null) {
        personImg = data.images[0].url;
      } else {
        personImg = personPlaceholder;
      }

      return (
        <div className='_container _section _flex about'> 
          <img className='about__img' src={personImg} alt={data.display_name} loading='lazy'/>
          <div className='about__info'>
            <h2 className='_pageSubTitle'>Hello, {data.display_name}!</h2>
            <p>You currently have {data?.followers?.total} followers!</p>
          </div>
        </div> 
      )
    }

    return null
  }

  export default AboutData