import axios from "axios";
const baseUrl = 'https://api.spotify.com/v1/search'

//Function that fetches the spotify data based on inputted query, with a limit of 4 items
const searchItems = async (q, token) => {
    let fullUrl = `${baseUrl}?q=${q}&type=artist,track,album&limit=4`
    try{
        const response = await axios.get(fullUrl, {
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

export default { searchItems }