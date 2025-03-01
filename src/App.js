import './App.css';
import Results from './components/results';


// creating an random values 

const randomNumber=Math.floor(Math.random()*10)+1;

function App() {

  return (
    <div className="App">
      <div className="contanier">
        <div className='insidecontainer'>
          <h1>Guess the Number (1 to 10)</h1>
          <Results randomNumber={randomNumber} />
        </div>
      </div>
    </div>
  );
}

export default App;
