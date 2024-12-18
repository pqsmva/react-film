import { SearchBar } from "./SearchBar";

export function Header ({setList}) {
    return <header>
        <div className="container">

            <div className="logo">Films.</div>

            <SearchBar setList={setList} />

        </div>
    </header>
}