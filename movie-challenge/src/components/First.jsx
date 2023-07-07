import { useEffect, useState } from "react";
import { getFilms } from "../services/services-films";
import "./First.css";


// componente principal 
function FirstData() {

  const poster = 'https://image.tmdb.org/t/p/original'

// variable de estado para la petición
  const [films, setFilms] = useState(null);

  useEffect(() => {
    getFilms()
    .then((response) => {
      setFilms(response.data);
    })
  }, []);

// renderizado
    return (
      <div className="infoData">
          {films ? (
      films.results.map((film) => (
        <div key={film.id}>
          {film.original_title}
          <div>
          <img className="backdrop" src={`${poster + film.backdrop_path}`} />
          </div>
        </div>
      ))
    ) : null}
      </div>
      ) 
}

    export default FirstData;