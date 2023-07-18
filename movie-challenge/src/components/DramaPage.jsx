
import { useState, useEffect } from "react";
import { dramaList } from '../services/services-films';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './DramaPage.css'

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
            <h1 id="genreDrama"> drama </h1>
            {drama.length > 0 ? (
        drama.map((dramaFilm) => (
        <div key={dramaFilm.id}>
            <div>
            <img className="backdrop" src={`${poster + dramaFilm.backdrop_path}`} />
            <h2> {dramaFilm.original_title} </h2>
            <Link to={`/movie/${dramaFilm.id}`} className="click-seeMore"> see more <FaChevronRight /> 
            </Link>
            </div>

        </div>
        ))
    ) : null}
        </div>
        )
} 

export default DramaPage; 