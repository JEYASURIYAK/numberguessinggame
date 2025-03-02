import { useState } from 'react';
import React from 'react';

// creating an random values 

var randomNumber = Math.floor(Math.random() * 10) + 1;

function Results() {    

    // useStates for wrong options 
    const [count, setcount] = useState(10);
    const [userip, setUserip] = useState();
    const [Score, setScore] = useState(0);
    const [result,setResult] = useState("");


    // Getting input values 
    const handleChange = (e) => {
        setUserip(parseInt(e.target.value));
    }


    // function for checking 

    function Checking(){
        
        if (userip && count>0) {
            if (userip === randomNumber) {
                setResult('Congrats!! You Won!');
                setScore(Score+1);
                setcount(count - 1);
                randomNumber = Math.floor(Math.random() * 10) + 1;
            }

            else if (userip > randomNumber) {
                setResult(`oops! Wrong It's Higher`);
                setcount(count - 1);
            }
            else if (userip < randomNumber) {
                setResult(`oops! Wrong It's Lower`)
                setcount(count - 1);
            }

            else {
                setResult(`Please enter valid inputs`);
            }
        }
        
    }

    return (
        <>
            <div className='inputcont'><input name='userip' onChange={handleChange}></input></div>
            <div className='btncont'>
                <button className='Checkbtn' onClick={Checking}>Check</button>
                {/* <button className='Quitbtn'>Quit</button> */}
            </div>
            <div className='resultcont'>
            <h5>Attempts remaining-{count} {randomNumber}</h5>
            <h5>Score : {Score}/10</h5>
            </div>

            <h5>you Guessed : {result}</h5>
            
        </>
    );

}

export default Results;