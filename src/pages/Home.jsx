import { useEffect, useState } from "react"
import { getByName } from "../config"
import { Header } from "../components/Header"
import { MovieList } from "../components/MovieList"
import { ListManager } from "../components/ListManager"
import { useLocation } from "react-router"

export default function Home() {
    const location = useLocation();
    
    const [movieList, setMovieList] = useState({
        Response: "False",
        Search: []
    })

    useEffect(() => {
        const handleBeforeUnload = (event) => {
          event.preventDefault();
          if (location.pathname == '/') {
            localStorage.setItem('lists', JSON.stringify([]))
          } 
        };
    
        window.addEventListener("beforeunload", handleBeforeUnload);
    
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
        };
      }, []);


    const [notFound, setNotFound] = useState('')
    const [favoriteLists, setFavoriteLists] = useState(window.localStorage.getItem('lists') ? JSON.parse(window.localStorage.getItem('lists')) : [])
    const [currentList, setCurrentList] = useState({
        id: favoriteLists.length + 1,
        name: "",
        movies: []
    })

    useEffect(() => {
        getByName('car').then(res => {
 
                setMovieList(res)
 

        })
    }, [])

    useEffect(() => {
        window.localStorage.setItem('current', JSON.stringify(currentList))
    }, [currentList])
    useEffect(() => {
        window.localStorage.setItem('lists', JSON.stringify(favoriteLists))
    }, [favoriteLists])


    return <>
        <Header setList={setMovieList} />
        <main className="home-wrapper container" >
            { movieList?.Response == "True" ? <MovieList current={currentList} setCurrent={setCurrentList} list={movieList.Search} /> : 'No film was found!' }
            <ListManager lists={favoriteLists} setLists={setFavoriteLists} current={currentList} setCurrent={setCurrentList} />
        </main>
    </>
}