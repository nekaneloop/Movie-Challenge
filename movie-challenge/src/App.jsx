import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'


function App() {
// se declaran el http y el key
  const apiKey = '35d75f4c69aa907579c2efd87ad489db';
  const api = `https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`;
  // variable de estado
  const [movie, setMovie] = useState(0);
  
  useEffect(() => {
    getMovie();
  })

  const getMovie = async () => {
    const response = await axios.get(api)
    setMovie(response.data);
  }
    return (
      <div>
        { movie  ? (<h2> {movie.title} </h2>) : (<h3>loading</h3>)}
      </div>
      ) 
}

export default App;