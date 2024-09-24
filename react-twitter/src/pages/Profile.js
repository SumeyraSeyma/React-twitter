import React, { useEffect } from 'react'
import {useState} from 'react'

function Profile() {
  const[data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    }
  
    fetchData();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-6/12 h-16 justify-center backdrop-blur-lg sticky top-0 bg-black  p-4">
        <div className="flex border-b justify-center border-gray-800">
          <p>{data.username}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile