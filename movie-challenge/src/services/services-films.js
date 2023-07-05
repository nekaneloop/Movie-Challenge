import axios from "axios";

// peticion 

const apiKey = '35d75f4c69aa907579c2efd87ad489db';
const api = 'https://api.tmdb.org/3';

export const getFilms = () => {

    return axios.get(`${api}/discover/movie`, {
      // especificando parametro
      params: {
        api_key: apiKey,
      }
    })
}

// filtrado 
