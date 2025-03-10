import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scored from './components/Score';
import Home from './components/Home';
import NotScored from './components/NotScored';
import { useState } from 'react';


function App() {

  const [Score, setScore] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home Score={Score} setScore={setScore}/>} />
          <Route path='/score' element={<Scored Score={Score} setScore={setScore} />} />
          <Route path='/notScore' element={<NotScored  />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
