import { Link } from "react-router";

export function Movie({ movie, setCurrent, included }) {
    return <div className="movie" >
        <div className="photo">
            <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="info" >
        <div className="title">
            <span>{movie.Title} ({movie.Year})</span>
        </div>

        <button disabled={included} onClick={()=> setCurrent(prev => ({...prev, 'movies': [...prev.movies, movie]}))} >Add to favorites</button>
        <button>
            <Link to={`https://www.imdb.com/title/${movie.imdbID}`} >   
            Go to details
            </Link>
            </button>
        </div>
    </div>
}