import Styles from "./SearchBar.module.css"
import Image from "next/image";

export default function SearchBar() {
    return (
        <main>
           <div className={Styles.container}>
                <input className={Styles.inputBox} type="text" placeholder="search"></input>
                <button className={Styles.theButton}>
                     <Image 
                        priority
                        src="./assets/searchIcon.svg"
                        height={20}
                        width={20}
                        alt="Search"
                     />
                </button>
           </div>
        </main>
    )
}