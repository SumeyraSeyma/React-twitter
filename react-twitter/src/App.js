import './App.css';
import React from 'react';
import './output.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
    <Sidebar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  </div>
  );
}

export default App;
