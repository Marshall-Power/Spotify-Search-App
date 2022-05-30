import axios from "axios";
const baseUrl = 'https://api.spotify.com/v1/me'

//Function that fetches the spotify data based on inputted query, with a limit of 4 items
const getUser = async (token) => {

    try{
        const response = await axios.get(baseUrl, {
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

const userService = { getUser }

export default userService