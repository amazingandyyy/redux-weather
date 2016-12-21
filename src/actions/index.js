import axios from 'axios';

import API_KEY from '../../key';
import { FETCH_WEATHER } from './types';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
  // action must return an object with type and payload
}
