import {useState, useEffect} from 'react'
import fetchData from '../services/getData'
import personPlaceholder from '././../assets/img/placeholder-image-person-jpg.jpg'

const AboutData = ({token}) => {
    
  const [data, setData] = useState('')

  useEffect(() => {
    fetchData(undefined, token)
      .then(res => {
        setData(res);
      })
  },[token])  
  
    if(data){
      return (
        <div className='_container _section _flex about'> 
          <img className='about__img' src={data.images[0].url ? data.images[0].url : personPlaceholder} alt={data.display_name} loading='lazy'/>
          <div className='about__info'>
            <h2 className='_pageSubTitle'>Hello, {data.display_name}!</h2>
            <p>You currently have {data.followers.total} followers!</p>
          </div>
        </div> 
      )
    }
  }

  export default AboutData