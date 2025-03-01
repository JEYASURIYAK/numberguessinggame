import { useState } from 'react';



function Results(randomNumber) {

    let result;

    // useStates for wrong options 
    const [count, setcount] = useState('10');
    const [userip,setUserip] = useState("");


    // Getting input values 
    const handleChange = (e) => {
        setUserip(e.target.value);
    }


    // function for checking 

    function Checking(){

        
        if (userip){
            if(userip < randomNumber){
                result=`oops! Wrong It's Higher`;
                setcount(count-1);
            }
            else if(userip > randomNumber){
                result=`oops! Wrong It's Lower`;
                setcount(count-1);
            }
            else if(userip ===randomNumber){
                result=`Congrats!! You Won! `;
            }
            else{
                result='Please enter valid inputs';
            }
        }
    }

    return (
        <>
            <div className='inputcont'><input onChange={handleChange}></input></div>
            <div className='btncont'>
                <button className='Checkbtn' onClick={Checking}>Check</button>
                <button className='Quitbtn'>Quit</button>
            </div>
            <h5>Attempts remaining-{count}</h5>
            <h5>{result}</h5>
        </>
    );

}

export default Results;