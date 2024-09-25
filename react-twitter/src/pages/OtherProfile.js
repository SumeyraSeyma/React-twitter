import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './profile.css';

function OtherProfile() {
  const [data, setData] = useState(null);

  let navigate = useNavigate();
    
  const handleGoBack =() => {
    navigate(-1);
  }



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data.json');
        const result = await response.json();
        setData(result);
        console.log(result); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []); 

  return (
    <div className="flex justify-center">
      <div className="w-6/12 h-24 justify-center backdrop-blur-lg sticky top-0 bg-black p-4">
        <div className="flex border-b border-gray-800">
            <button onClick={handleGoBack} className='flex mr-7 items-center justify-start rounded-full border   px-3 py-2  border-black bg-black transition duration-300 ease-in-out'>
                <FontAwesomeIcon icon={faArrowLeftLong} className='text-white' />
            </button>
            <div>
                {data ?
                    <p className='text-white font-bold' style={{fontSize:'20px'}}>{data.username}</p> 
                    : <p>Loading...</p>}
                {data ?
                    <p style={{color:'rgb(113, 118, 123)', fontSize:'12px'}} >
                        {data.posts.length > 0 && (
                        <p>{data.posts[data.posts.length - 1].id} posts</p>
                        )}
                    </p>
                    : <p>Loading...</p>}
            </div>
        </div>
        //dikdörtgen resim üzerine yuvarlak resim
        <div className="profile-header">

      <div>
        <img src="https://www.whitescreen.online/image/white-background.png" alt="Cover" className="cover-pic"/>
      </div>

      <div className="profile-info">
        <img src="https://www.whitescreen.online/image/white-background.png" alt="Profile" className="profile-pic"/>
        
      </div>
        <div className='flex justify-end'>
            <button className="font-bold rounded-full bg-white text-black mt-4 h-10 w-20 mr-2">Follow</button>
        </div>
    </div>

      </div>
    </div>
  );
}

export default OtherProfile;
