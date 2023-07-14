import { useEffect, useState } from "react";
import { getFilms } from "../services/services-films";
import "./First.css";

// componente principal
function FirstData() {
  const poster = "https://image.tmdb.org/t/p/original";

  // variable de estado para la petición
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms().then((response) => {
      setFilms(response.data.results);
    });
  }, []);

  // renderizado
  return (
    <div className="infoData">
      {films.length ? (
        // fragmentacion
        <> 
          <div className="banner">
            {films[0].original_title}
            <div>
              <img
                className="posterBanner"
                src={`${poster + films[0].backdrop_path}`}
              />
            </div>
          </div>
          <h2> trending now </h2>

          {films.slice(1).map((film) => (
            <div key={film.id} className="tittle">
              {film.original_title}
              <div>
                <img
                  className="backdrop"
                  src={`${poster + film.backdrop_path}`}
                />
              </div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default FirstData;
