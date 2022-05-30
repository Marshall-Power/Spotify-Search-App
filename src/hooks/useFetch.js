import { useState, useEffect, useRef } from "react";
import Cookies from 'js-cookie'
import searchItems from '../services/getSpotifyData'

const isDeepEqual = require('fast-deep-equal/es6');

const useFetch = () => {
  const [data, setData] = useState({
    slug: "",
    results: [],
    token: Cookies.get("spotifyAuthToken")
  });
  
  const prevData = useRef(data)
  
  useEffect(() => {
    if (!isDeepEqual(prevData.current, data)) {
        const timeoutId = setTimeout(() => {
            const fetch = async () => {
              try {
                const res = await searchItems(data.slug, data.token)
                setData({ ...data, results: res });
              } catch (err) {
                console.error(err);
              }
            };
            fetch();
            prevData.current = data;
          }, 1000);
          return () => clearTimeout(timeoutId);
        }
  }, [data]);
  

  return { data, setData };
};

export default useFetch;