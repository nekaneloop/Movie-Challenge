import { selectorGenre } from '../services/services-films';
import { useEffect, useState } from "react";

function Selector() {

  const [options, SetOptions] = useState(null);

  useEffect(() => {
    selectorGenre()
    .then((response) => {
      SetOptions(response.data);
    })
  }, []);

  return (
    <div className='selection'>
      {options ? (
    options.results.map((option) => {
      <div key={option.id}>
      <select> {option.genre} </select>
      </div>
      })
      ) : null }
    </div>  
)}

export default Selector;