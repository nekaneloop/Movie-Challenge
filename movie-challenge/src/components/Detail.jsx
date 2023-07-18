import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Detail() {
   // acceder al url 
      const { id } = useParams();
      //console.log(useParams())
      const poster = "https://image.tmdb.org/t/p/original"
      const apiDetail = `https://api.themoviedb.org/3/movie/${id}?api_key=35d75f4c69aa907579c2efd87ad489db&append_to_response=videos`;


   const [info, setInfo] = useState(null)

   useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(apiDetail);
          setInfo(response.data);
        } catch (error) {
          console.log('Error:', error);
        }
      };
  
      fetchData();
    }, [apiDetail]);
   return (
      <div>
      {info && (
         <div key={info.id}>
            <img src= {poster + info.backdrop_path} />
            <h1>{info.original_title}</h1>
         </div>
          <div>
      )}
      </div>
   )
}

export default Detail;