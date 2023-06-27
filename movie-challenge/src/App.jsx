import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

// componente principal 
function App() {
// se declaran el http y el key
  const apiKey = '35d75f4c69aa907579c2efd87ad489db';
  const api = 'https://api.themoviedb.org/3';
  // variable de estado
  const [films, setFilms] = useState(null);

  const getFilms = async () => {
    try {
      const response = await axios.get(`${api}/discover/movie`, {
        params: {
          api_key: apiKey,
        }
      })

      setFilms(response.data);
    }
    catch(error) {
    console.error('Fail')
    }
  }
  useEffect(() => {
    getFilms();
  }, []);


  console.log(films)
    return (
      <div>
        { films ? films.results[0].original_title : null }
      </div>
      ) 
}

export default App;