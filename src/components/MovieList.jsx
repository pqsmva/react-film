import { Movie } from "./Movie";

export function MovieList ({list, setCurrent, current}) {

    return <div className="movie-list">
        {
            list.length > 0 && list.map((movie, index) => <Movie included={current.movies.find(k => k == movie)?true:false} setCurrent={setCurrent} key={index} movie={movie} /> )
        }
    </div>
}