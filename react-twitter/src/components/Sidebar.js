import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-full w-96 bg-gray-800 text-white fixed">
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => isActive ? 'bg-blue-500 p-4 block' : 'p-4 block'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={({ isActive }) => isActive ? 'bg-blue-500 p-4 block' : 'p-4 block'}
          >
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/notifications"
            className={({ isActive }) => isActive ? 'bg-blue-500 p-4 block' : 'p-4 block'}
          >
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={({ isActive }) => isActive ? 'bg-blue-500 p-4 block' : 'p-4 block'}
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => isActive ? 'bg-blue-500 p-4 block' : 'p-4 block'}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
