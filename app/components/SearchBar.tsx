"use client";

import Styles from "./SearchBar.module.css"
import Image from "next/image";
import { useState } from "react"

export default function SearchBar({setResults}: any) {
    const [input, setInput] = useState("");

    const fetchData = (value: any) => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((json) => {
            const results = json.filter((user: any) => {
              return (
                value &&
                user &&
                value.toLowerCase() &&
                user.name &&
                user.name.toLowerCase().includes(value)
              );
            });
            setResults(results);
          });
      };

    const handleChange = (value: any) => {
        setInput(value)
        fetchData(value)
    };

    return (
        <main>
           <div className={Styles.container}>
                <input className={Styles.inputBox} type="text" placeholder="search" value={input} onChange={(e) => handleChange(e.target.value)}></input>
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