import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [activeTab, setActiveTab] = useState('forYou');

  return (
    <div className='border-slate-400'>
    <div className="flex justify-center">
      <div className="w-6/12 h-16 justify-center backdrop-blur-lg sticky top-0 bg-black  p-4">
        <div className="flex border-b justify-center border-gray-800">
          <NavLink
            to="/for-you"
            className={activeTab === 'forYou' ? 'px-4 py-2 border-b-2 border-blue-500' : 
              'px-4 py-2 '}
            
            onClick={() => setActiveTab('forYou')}
          >
            <p className='bold text-white'>For you</p>
          </NavLink>
          <NavLink
            to="/following"
            className={({ isActive }) =>
              `px-4 py-2 ${isActive ? 'border-b-2 border-blue-500' : 'text-gray-500'}`
            }
            onClick={() => setActiveTab('following')}
          >
              <p className='bold text-white'>Following</p>
          </NavLink>
        </div>
      </div>
    </div>
    <div>
    <div className="h-full w-96 right-0 top-0 bg-black text-white fixed">
    <div>
          <input
            type="text"
            placeholder="Search..."
            className="mr-4 flex w-80  rounded-full border justify-center px-3 py-2 border-zinc-700 bg-zinc-900"
          />
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Home;
