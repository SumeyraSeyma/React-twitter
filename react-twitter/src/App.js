import './App.css';
import React from 'react';
import './output.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;
