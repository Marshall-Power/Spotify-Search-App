import { useState, useEffect, useRef } from "react";
import Cookies from 'js-cookie'
import getData from "../services/getData";

const isDeepEqual = require('fast-deep-equal/es6');

type TrackResponse = SpotifyApi.TrackSearchResponse
type AlbumResponse = SpotifyApi.AlbumSearchResponse
type ArtistResponse = SpotifyApi.ArtistSearchResponse

type ApiResults = { tracks: TrackResponse['tracks'], albums: AlbumResponse['albums'], artists: ArtistResponse['artists'] }

const initObj = { href: '', items: [], offset: 0, limit: 0, next: '', previous: '', total: 0 }

interface SearchData {
  results?: ApiResults,
  token?: string,
  slug?: string
}

const useFetch = () => {
  const [data, setData] = useState<SearchData>({
    slug: "",
    results: {
      tracks: initObj,
      albums: initObj,
      artists: initObj
    },
    token: Cookies.get("spotifyAuthToken")
  });
  
  const prevData = useRef(data)
  
  useEffect(() => {
    if (!isDeepEqual(prevData.current, data)) {
      const timeoutId = setTimeout(() => {
          const fetch = async () => {
            try {
              const res = await getData(data.token, data.slug)
              setData({ ...data, results: res });
            } catch (err) {
              console.error(err);
            }
          };
          fetch();
          prevData.current = data;
        }, 1500);
        return () => clearTimeout(timeoutId);
      }
  }, [data]);
  

  return { data, setData };
};

export default useFetch;