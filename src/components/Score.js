import { useNavigate } from "react-router-dom";
import React from "react";
import {useEffect,useRef} from 'react';

export default function Scored({Score,setScore}) {
    const backNavigate = useNavigate();

        const skipResetRef = useRef(true);
        useEffect(() => {
            console.log("Component mounted");
    
            return () => {
                if (skipResetRef.current) {
                    console.log("Skipping setScore");
                    skipResetRef.current = false
                    return;
                }
    
                console.log("Running setScore(0)");
                setScore(0);
            };
        }, [setScore]);

    function Backpage() {
        setScore(0)
        backNavigate('/');
    }
    return <>
        <div className='insidecontainer'>
            <h1>Wow!! You Scored {Score}/10 in the Game </h1>
            <div className='btncont'>
                <button onClick={Backpage} className='Quitbtn'>Back</button>
            </div>

        </div>
    </>
}