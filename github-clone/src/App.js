import React from 'react';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;