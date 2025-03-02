import { useNavigate } from "react-router-dom";
import React from "react";

export default function NotScored(){
    const backNavigate = useNavigate();

    function Backpage() {
        backNavigate('/');
    }
    return <>
        <div className='insidecontainer'>
            <h1>Ooops!! You are not Scored in the Game</h1>
            <div className='btncont'>
                <button onClick={Backpage} className='Quitbtn'>Back</button>
            </div>

        </div>
    </>
}