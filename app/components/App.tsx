"use client";

import VideoBg from "./VideoBg"
import Styles from "./App.module.css"
import SearchBar from "./SearchBar"
import {useState} from "react"
import SearchResultList from "./SearchResultList";

export default function App() {
    const [results, setResults] = useState([]);
    return (
        <main>
            <VideoBg />
            <div className={Styles.content}>
                <SearchBar setResults={setResults}/>
                <SearchResultList results={results}/>
            </div>
        </main>
    )
}