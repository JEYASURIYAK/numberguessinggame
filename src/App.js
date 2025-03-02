import './App.css';
import React from 'react';
import Results from './components/results';


function App() {

  return (
    <div className="App">
      <div className="contanier">
        <div className='insidecontainer'>
          <h1>Guess the Number (1 to 10) </h1>
          <Results />
        </div>
      </div>
    </div>
  );
}

export default App;
