import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

const Redirect = ({target}) => {
    
    let navigate = useNavigate();
  
    const getParamValues = (url) => {
      let params = url.split('#')[1]
      return params
        .slice(0)
        .split('&')
        .reduce((prev, curr) => {
          const [title, value] = curr.split('=');
          prev[title] = value;
          return prev;
        }, {});
    };
  
    const token = getParamValues(window.location.toString())
  
    useEffect(() => {
      if (token){
          Cookies.set("spotifyAuthToken", token.access_token)
          return navigate(target);
      }
    },[token, navigate, target]);
  }

export default Redirect