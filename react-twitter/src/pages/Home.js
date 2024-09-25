import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('forYou');

  return (
    <div className='border-slate-400'>
      <div className="flex justify-center">
        <div className="w-full md:w-6/12 h-16 justify-center backdrop-blur-lg sticky top-0 bg-black p-4">
          <div className='justify-center flex'>
            <NavLink
              to="/"
            >
              <svg className='w-6 h-6 2xl:hidden fill-current text-white'>
                <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'/>
              </svg>
            </NavLink>
          </div>
          <div className="flex border-b justify-center border-gray-800">
            <NavLink
              to="/for-you"
              className={`${activeTab === 'forYou' ? 'border-b-2 border-blue-500' : ''} px-4 py-2 text-white`}
              onClick={() => setActiveTab('forYou')}
            >
              For you
            </NavLink>
            <NavLink
              to="/following"
              className={({ isActive }) =>
                `${isActive ? 'border-b-2 border-blue-500' : 'text-gray-500'} px-4 py-2 text-white`
              }
              onClick={() => setActiveTab('following')}
            >
              Following
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="h-full w-full sm:w-48 md:w-96 hidden 2xl:block bg-black text-white fixed top-0 right-0">
          <input
            type="text"
            placeholder="Search..."
            className="m-4 w-full md:w-80 rounded-full border px-3 py-2 border-zinc-700 bg-zinc-900"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
