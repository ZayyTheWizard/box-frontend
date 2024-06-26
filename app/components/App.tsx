"use client";

import VideoBg from "./VideoBG/VideoBg"
import Styles from "./App.module.css"
import SearchBar from "./Searchbar/SearchBar"
import {useState} from "react"
import SearchResultList from "./SearchResultsList/SearchResultList";
import MyThree from "./DjVisualizer/Threejs";

export default function App() {
    const [results, setResults] = useState([]);
    return (
        <main>
            <VideoBg />
            <div className={Styles.content}>
                <SearchBar setResults={setResults}/>
                <SearchResultList results={results}/>
            </div>
            <div>
                <MyThree />
            </div>
        </main>
    )
}