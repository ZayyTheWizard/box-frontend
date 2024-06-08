import Style from "./SearchResult.module.css"

export default function SearchResult({result}: any) {
    return <div className={Style.SearchResults} onClick={(e) => alert(`You click ${result.name}`)}>{result.name}</div>
}