import './App.css';
import React from 'react';
import Signup from './Components/Signup/Signup';
import Loading from './Components/Loading/Loading';
import Home from './Components/Home/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
