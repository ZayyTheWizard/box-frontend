'use client';

import React from 'react';

import {useState} from 'react';

export default function MyCard() {
    const [cardArt, setCardArt] = useState("");
    const [song, setSong] = useState("");

    return (
        <main>
            <div>
                Card art;
            </div>
            <button>play button</button>
        </main>
    );
}