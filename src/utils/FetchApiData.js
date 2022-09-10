
import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'a58b578411msh1db25d385d2db1cp1381adjsn9ae4269514e6' ,
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
 export const FetchApiData = async (url) => {
    try {
        return await axios.get(`${BASE_URL}/${url}`,options)
        .then((response) => {return  response.data});
        // return response;
    } catch (error) {
        console.log(error);
    }
};
