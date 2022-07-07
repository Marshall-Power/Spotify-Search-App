import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

interface TokenData {
  access_token: string;
  expires_in: string;
  token_type: string;
}

const defParams: TokenData = {
  access_token: '',
  expires_in: '',
  token_type:''
}

const Redirect = (target: string) => {
    
    let navigate = useNavigate();
  
    const getParamValues = (url: string): TokenData => {
      let params = url.split('#')[1]
      
      return params
        .slice(0)
        .split('&')
        .reduce((prev, curr) => {
          const [title, value] = curr.split('=');
          prev[title as keyof typeof prev] = value;
          return prev;
        }, defParams);
    };
  
    const token = getParamValues(window.location.toString())
    
    useEffect(() => {
      if (token) {
          Cookies.set("spotifyAuthToken", token.access_token)
          return navigate(target);
      }
    },[token, navigate, target]);
  }

export default Redirect