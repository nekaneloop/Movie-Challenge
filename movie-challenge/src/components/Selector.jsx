import { useEffect, useState } from 'react';
import { filmsList } from '../services/services-films';

const Selector = () => {
    
 const [lists, setLists] = useState([])
 
 useEffect(() => {
    filmsList()
    .then((result) => {
        setLists(result.data)
    })
    }, [])


    return (

    <div key={lists.id}>
        { lists ? (
                <select key={lists.id}>
                <option value="list" key={lists.name}>
                </option>
                </select>
        ) : [] }
    </div>
    )
}

export default Selector;