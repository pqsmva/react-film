import { useEffect, useState } from "react"
import { Link } from "react-router"

export function ListManager({ current, setCurrent, setLists, lists }) {
    const [error, setError] = useState(false)

    const [disabled, setDisabled] = useState(false)

    const handleSave = (e) => {
        e.preventDefault()
        if (current.name.length >= 3 && current.movies.length >= 1) {
            setLists(prev => ([...prev, current]))
            setDisabled(true)
        } else {
            setError(true)
        }
    }



    useEffect(() => {
        if (current.name.length > 0) {
            setError(false)
        }
    }, [current.name])

    useEffect(() => {
        if (current.movies.length > 0) {
            setError(false)
        }
    }, [current.movies])
    return <div className="fav-list">

        <CreateList setDisabled={setDisabled} disabled={disabled} handleSave={handleSave} current={current} setCurrent={setCurrent} />

        {error && <p className="error" >
            {current.name.length == 0 ? 'You should define a name for list' : current.movies.length == 0 ? 'List cannot be empty' : ''}
        </p>}

        <div className="all-lists" >
            {
                lists.map((list, index) => <Link to={`/list/${list.id}`} key={index} className="per-list" >
                    {list.name}
                </Link>)
            }
        </div>

    </div>
}


const CreateList = ({ current, setCurrent, handleSave, disabled, setDisabled }) => {
    const { movies, name } = current
    const deleteFromList = (e, item) => {
        e.preventDefault()
        setCurrent(prev => ({ ...prev, 'movies': prev.movies.filter(i => i != item) }))
    }

    const handleReset = (e) => {

            e.preventDefault()
            setDisabled(false)
            setCurrent({
                name: "",
                movies: []
            })

    }


    return <>
        <form className="create" action="">
            <input disabled={disabled} value={current.name} placeholder="Enter the name for list" onChange={e => setCurrent({ ...current, "name": e.target.value })} type="text" />
            <div className="current-list-movies">

                {
                    movies.length === 0 ? <p className="empty" >List is empty</p> : movies.map(item => <>
                        <div className="fav-movie" >
                            <span>{item.Title}</span>

                            <button onClick={(e) => {
                                if (disabled) {
                                    e.preventDefault()
                                    return
                                } else {
                                    deleteFromList(e, item)
                                }

                            }} >✖</button>
                        </div>
                    </>)
                }
            </div>

            <button onClick={e => handleSave(e)} >Save the list</button>
            <button onClick={e => handleReset(e)} >Create a new list</button>

        



        </form>


    </>
}