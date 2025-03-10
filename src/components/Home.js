import Results from './results';

export default function Home({Score,setScore}) {


    return <>
        <div className="contanier">
            <div className='insidecontainer'>
                <h1>Guess the Number (1 to 10) </h1>
                <Results Score={Score} setScore={setScore}/>
            </div>
        </div>
    </>
}