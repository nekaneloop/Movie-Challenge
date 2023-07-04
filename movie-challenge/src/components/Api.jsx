// import { useEffect } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

// componente principal 
function Api() {
  const apiKey = '35d75f4c69aa907579c2efd87ad489db';
  const api = 'https://api.tmdb.org/3';
  const poster = 'https://image.themoviedb.org/t/p/original'
  const urlPoster = 'https://image.themoviedb.org/t/p/original'
  // variable de estado
  const [films, setFilms] = useState(null);

  const getFilms = async () => {

      const response = await axios.get(`${api}/discover/movie`, {
        params: {
          api_key: apiKey,
        }
      })

      setFilms(response.data);
  }
  useEffect(() => {
    getFilms();
  }, []);

    return (
      <div>
          {films ? (
      films.results.map((film) => (
        <div key={film.id}>
          {film.original_title}
          <img src={film.poster} />
        </div>
      ))
    ) : null}
      </div>
      ) 
}

    export default Api;