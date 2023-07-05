import { useEffect, useState } from "react";
import axios from "axios";
import './Api.css'

// componente principal 
function Api() {
  const apiKey = '35d75f4c69aa907579c2efd87ad489db';
  const api = 'https://api.tmdb.org/3';
  const poster = 'https://image.tmdb.org/t/p/original'

// variable de estado para la petición
  const [films, setFilms] = useState(null);

  const getFilms = async () => {

      const response = await axios.get(`${api}/discover/movie`, {
        // especificando parametro
        params: {
          api_key: apiKey,
        }
      })

      setFilms(response.data);
  }
  useEffect(() => {
    getFilms();
  }, []);

// renderizado
    return (
      <div className="InfoData">
          {films ? (
      films.results.map((film) => (
        <div key={film.id}>
          {film.original_title}
          <div className="PosterFilm">
          <img src={`${poster + film.poster_path}`} />
          </div>
        </div>
      ))
    ) : null}
      </div>
      ) 
}

    export default Api;