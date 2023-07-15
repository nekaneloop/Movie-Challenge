
import { useState, useEffect } from "react";
import { dramaList } from '../services/services-films';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

function DramaPage() {

    const poster = 'https://image.tmdb.org/t/p/original/'

    const [drama, setDrama] = useState([]);

    useEffect(() => {
        dramaList()
        .then((resolve) => {
            console.log(resolve)
            setDrama(resolve)
        })
    }, [])
    
    return (
        <div className="dataDrama">
            {drama.length > 0 ? (
        drama.map((dramaFilm) => (
        <div key={dramaFilm.id}>
            {dramaFilm.original_title}
            <div>
            <img className="backdrop" src={`${poster + dramaFilm.backdrop_path}`} />
            <Link to={`/movie/${dramaFilm.id}`} className="click-seeMore"> see more <FaChevronRight /> </Link>
            </div>
        </div>
        ))
    ) : null}
        </div>
        )
} 

export default DramaPage; 