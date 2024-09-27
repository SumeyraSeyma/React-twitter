import './App.css';
import React from 'react';
import './output.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Post from './pages/Post';
import OtherProfile from './pages/OtherProfile';

function App() {
  return (
    <div>
    <Sidebar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/post' element={<Post />}/>
        <Route path="/profile/:id" element={<OtherProfile />} />
      </Routes>
    </main>
  </div>
  );
}

export default App;
