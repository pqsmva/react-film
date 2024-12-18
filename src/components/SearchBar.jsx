import { useState } from "react"
import { getByName } from "../config"
export function SearchBar ({setList}) {
    const [searchValue, setSearchValue] = useState('')
    return <>
    <div className="search-bar" >
        <input value={searchValue} onChange={e=> setSearchValue(e.target.value)} placeholder="Search a movie..." type="text" />
        <button onClick={()=> {
            getByName(searchValue).then(res => {
                setList(res)
            })

            setSearchValue('')
        }} >Search</button>
    </div>
    </>
}