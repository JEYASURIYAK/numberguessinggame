import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scored from './components/Score';
import Home from './components/Home';
import NotScored from './components/NotScored';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/score' element={<Scored  />} />
          <Route path='/notScore' element={<NotScored  />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
