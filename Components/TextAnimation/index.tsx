"use client";

import React, { useState, useEffect } from 'react';
import styles from "./index.module.css"

console.log("%c Welcome Inspector 🕵️‍♂️", "font-size: 24px; color: #977A31FF; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);");
console.log("%c-----------------------------------------", "color: #999;");

console.log("%c Feel free to inspect and read my websites' code: https://github.com/Akiftsc", "font-size: 16px; color: #666;");
console.log("%c-----------------------------------------", "color: #999;");


const AnimatedText = () => {

    const [isIconShow, setIsIconShow] = useState(true);

    useEffect(() => {
        setInterval(() => {

        }, 2000)
    }, [])

    return (
        <div className="inline relative group">
            <span className={`${styles.interests} group-hover: block`}>
                Node.js
            </span>
            <span className={`${styles.ball} group-hover:bg-primary`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

            </span>
        </div>

    )
}

export default AnimatedText;