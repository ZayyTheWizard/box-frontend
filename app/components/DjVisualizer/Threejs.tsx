import * as THREE from 'three';

import { useEffect, useRef } from "react";

import Style from "./Threejs.module.css"
import { initThreeJs } from './scripts/audioVis';
import React from 'react';

// 0x00ff00 lime green hex code
export default function MyThree() {
  const refContainer = useRef(null);
  useEffect(() => {
    let cleanup: any;
   if (refContainer.current) {
    cleanup = initThreeJs(refContainer.current)
   }
   return () => {
    if (cleanup) cleanup();
   }
  }, []);
  return (
    <React.StrictMode>
        <div className={Style.main} ref={refContainer}></div>
    </React.StrictMode>
  );
}