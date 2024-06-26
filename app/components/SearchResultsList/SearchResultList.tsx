import SearchResult from "../SearchResults/SearchResult";
import Styles from "./SearchResultList.module.css"

export default function SearchResultList({ results }: any) {
    return (
        <div className={Styles.resultsList}>
            {
                results.map((result: any, id: any) => {
                    return <SearchResult result={result} key={id}/>
                })
            }
        </div>
    );
}