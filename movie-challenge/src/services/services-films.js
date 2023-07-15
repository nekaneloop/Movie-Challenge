import axios from "axios";
// peticion 

const api = 'https://api.tmdb.org/3';
const apiKey = '35d75f4c69aa907579c2efd87ad489db';

export const getFilms = () => {

    return axios.get(`${api}/discover/movie`, {
      // especificando parametro
      params: {
        api_key: apiKey,
      }
    })
}

// lista de generos
const genderList = 'https://api.themoviedb.org/3/genre/movie/list';

export const filmsList = () => {
  return axios.get(genderList, {
    headers: {
      // especifica que tipo de contenido espera recibir
      accept: 'application/json',
      authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWQ3NWY0YzY5YWE5MDc1NzljMmVmZDg3YWQ0ODlkYiIsInN1YiI6IjY0OTI0ZTc1NzA2ZTU2MDBjNjk5ZGI1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KVU1oDihJi2Z3Qex6pLcOoHCEw_u4sLGnz5PPCgHLG8',
    }
  })
}

// solicitar por id drama 18 

const apiDrama = 'https://api.themoviedb.org/3';
const key = '35d75f4c69aa907579c2efd87ad489db';

export const dramaList = async () => {
  try {
    const response = await axios.get(`${apiDrama}/discover/movie`, {
      params: {
        api_key: key,
        with_genres: '18',
      },
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};







