import { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router"

export default function ListPage() {

    const { id } = useParams()
    const favoriteLists = localStorage.getItem('lists') ? JSON.parse(window.localStorage.getItem('lists')) : []
    const currentList = favoriteLists.find(x => x.id == id)








    return <div className="list-page-container" >

        <div className="navigation">
            <Link to={'/'} >⬅ Home</Link>
            <h1>
                {currentList?.name}
            </h1>
            <div></div>
        </div>

        <div className="list-whole">
            {
                currentList?.movies.map((item, index) => <div className="page-movie" key={index} >
                    <div className="photo">
                        <img src={item.Poster} alt="" />
                    </div>

                    <div className="info">
                        <h2>{item.Title + " " + (item.Year)}</h2>
                        <Link to={'https://www.imdb.com/title/' + item.imdbID} >Go to film</Link>
                    </div>
                </div>)
            }
        </div>
    </div>
}