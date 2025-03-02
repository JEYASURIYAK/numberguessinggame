import { useNavigate } from "react-router-dom";
import React from "react";

export default function Scored() {
    const backNavigate = useNavigate();

    function Backpage() {
        backNavigate('/');
    }
    return <>
        <div className='insidecontainer'>
            <h1>Wow!! You Scored in the Game </h1>
            <div className='btncont'>
                <button onClick={Backpage} className='Quitbtn'>Back</button>
            </div>

        </div>
    </>
}