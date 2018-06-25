import axios from "axios";


const API_KEY="96e78390d050d92eb54a54d6e45c65b4";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;//ES6 feature ${API_KEY} in vanilla + API_KEY

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},cad`;
  const request = axios.get(url); // for ajax request

  return{
    type:FETCH_WEATHER,
    payload: request
  };
}
