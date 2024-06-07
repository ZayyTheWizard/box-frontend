import VideoBg from "./VideoBg"
import Styles from "./App.module.css"
import SearchBar from "./SearchBar"

export default function App() {
    return (
        <main>
            <VideoBg />
            <div className={Styles.content}>
                <SearchBar></SearchBar>
            </div>
        </main>
    )
}