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
    // mejorar que se coloca en []
  }, []);


  // renderizado
  return (
    <div className="infoData">
      {films.length ? (
        // fragmentacion
        <> 
          <div className="tittleBanner">
            <div>
              <img
                className="posterBanner"
                src={`${poster + films[0].backdrop_path}`}
              />
              <h2 className="banner-title"> {films[0].original_title}</h2>
            </div>
          </div>
          <h3> trending now </h3>

          {films.slice(1).map((film) => (
            <div key={film.id} className="tittle">
              <div className="filmsGrid">
                <img
                  className="backdrop"
                  //colocar atributo alt 
                  src={`${poster + film.backdrop_path}`}
                />
                <h2> {film.original_title} </h2>
              </div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default FirstData; 