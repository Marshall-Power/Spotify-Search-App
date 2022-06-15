import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'


//Possible solution
// const params = ['access_token', 'expires_in', 'token_type'] as const;

// type TokenData = {
//     [key in typeof params[number]]: string;
// }

// const getParamValues = (url: string): TokenData => {
//     const urlObj = new URL(url);
//     return params.reduce((prev, curr) => {
//         // your choice for how to handle a missing parameter
//         prev[curr] = urlObj.searchParams.get('curr') ?? 'NOT_PROVIDED';
//         return prev;
//     }, {} as TokenData);
// };

// interface Url {
//     target: string
// }

// interface TokenData {
//   access_token: string;
//   expires_in: string;
//   token_type: string;
// }

const Redirect = ({ target }) => {
    
    let navigate = useNavigate();
  
    const getParamValues = (url) => {
      console.log(url)
      let params = url.split('#')[1]
      
      return params
        .slice(0)
        .split('&')
        .reduce((prev, curr) => {
          const [title, value] = curr.split('=');
          prev[title] = value;
          console.log(prev)
          return prev;
        }, {});
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