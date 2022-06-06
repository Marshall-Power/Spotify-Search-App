import axios from "axios";
const baseUrl = 'https://api.spotify.com/v1/search',
      userUrl = 'https://api.spotify.com/v1/me'

//Function that fetches the spotify data based on inputted query, with a limit of 4 items
const fetchData = async (q, token) => {
    let queryUrl;

    if (q !== undefined) {
        queryUrl = `${baseUrl}?q=${q}&type=artist,track,album&limit=4`
    } else {
        queryUrl = userUrl
    }

    try{
        const response = await axios.get(queryUrl, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        return response.data;
      }
    catch(error){
        console.log(error);
        return error
    }  
}

export default fetchData