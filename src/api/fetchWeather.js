import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'd1e5941a1be402710dc231dbfa937277';

export const fetchWeather = async (query) =>{
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            APPID:API_KEY,
            units:'metric'
        }
    });

    console.log(data);
    return data;
}

/*
import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}
*/

