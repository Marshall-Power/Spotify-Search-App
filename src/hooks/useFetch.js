import { useState, useEffect } from "react";
import Cookies from 'js-cookie'
import artistsService from '../services/getSpotifyData'

const useFetch = () => {
  const [data, setData] = useState({
    slug: "",
    results: [],
    token: Cookies.get("spotifyAuthToken")
  });
  
  useEffect(() => {
    if (data.slug !== "") {
        const timeoutId = setTimeout(() => {
            const fetch = async () => {
              try {
                const res = await artistsService.searchItems(data.slug, data.token)
                setData({ ...data, results: res });
              } catch (err) {
                console.error(err);
              }
            };
            fetch();
          }, 1000);
          return () => clearTimeout(timeoutId);
        }
  }, [data.slug]);
  

  return { data, setData };
};

export default useFetch;