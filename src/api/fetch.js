import axios from 'axios'

const URL= 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = '0c02553db228a00f14994a5cd9fbaa9c'


export const FetchWeather = async(query) =>{
    const { data } = await axios.get(URL,{
        params:{
            q: query,
            units: 'metric',
            APPID: apiKey
        }
    })

    return(data)
}