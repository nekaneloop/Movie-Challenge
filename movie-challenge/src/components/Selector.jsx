import { useEffect, useState } from 'react';
import { filmsList } from '../services/services-films';
import { useNavigate } from 'react-router'


const Selector = () => {
    
const [lists, setLists] = useState([]);
const navigate = useNavigate("");

useEffect(() => {
    filmsList()
    .then((result) => {
        const choosing = result.data.genres.filter((genre) => {
            return genre.name === 'Drama'|| genre.name === 'Horror';
        });

        setLists(choosing)
    })
    }, [])

    const handleClick = (e) => {
        const selectedGenre = e.target.value;
        console.log(selectedGenre, 'verifica')
        if (selectedGenre === '18') {
            navigate('/Drama')
        } else if (selectedGenre === '27') {
            navigate('/Horror')
        }
    }

    return (

    <div>
    <select onChange={(e) => handleClick(e)}>
        <option>genres</option>
        {lists.map((genre) => (
        <option key={genre.id} value={genre.id}>
            {genre.name}
        </option>
        ))}
    </select>
    </div>
    )
}

export default Selector;