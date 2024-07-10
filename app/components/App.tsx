"use client";

import VideoBg from "./VideoBG/VideoBg"
import Styles from "./App.module.css"
import SearchBar from "./Searchbar/SearchBar"
import {useState} from "react"
import SearchResultList from "./SearchResultsList/SearchResultList";
import MyThree from "./DjVisualizer/Threejs";
import CardAndVoice from "./cardAndVoice/cardAndVoice";

export default function App() {
    const [results, setResults] = useState([]);
    const [showAI, setShowAI] = useState(true);

    return (
        <main>
            <VideoBg />
            <div className={Styles.content}>
                <SearchBar setResults={setResults}/>
                <SearchResultList results={results}/>
            </div>
            <div>
                <CardAndVoice showAI={showAI} setShowAI={setShowAI}/>
            </div>
        </main>
    )
}