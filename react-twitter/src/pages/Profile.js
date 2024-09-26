import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Profile() {
  const [data, setData] = useState(null);
  const [showMore, setShowMore] = useState(false);

  let navigate = useNavigate();
    
  const handleGoBack =() => {
    navigate(-1);
  }

  const suggestions = [
    { name: "Marvel Studios", handle: "@MarvelStudios", verified: true, logo: "https://www.whitescreen.online/image/white-background.png" },
    { name: "Bill Gates", handle: "@BillGates", verified: true, logo: "https://www.whitescreen.online/image/white-background.png" },
    { name: "Google", handle: "@Google", verified: true, logo: "https://www.whitescreen.online/image/white-background.png" },
    { name: "Amazon", handle: "@Amazon", verified: true, logo: "https://www.whitescreen.online/image/white-background.png" },
  ];



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
        <div className="flex ">
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
        <div className="profile-header">

      <div>
        {
          data &&(
            <img src={data.cover} alt="Cover" className="cover-pic"/>
          )
        }
      </div>

      <div className="profile-info">
      {
          data &&(
            <img src={data.profile} alt="Profile" className="profile-pic"/>
          )
        }
        
      </div>
        <div className='flex justify-end'>
            <button className="font-bold rounded-full bg-black border border-white text-white mt-4 h-10 w-28 mr-2">Edit Profile</button>
        </div>
    </div>

        <div className='border-r border-l border-gray-700'>
            <div className="flex mt-20 ml-6 justify-between">
                <div>{data &&
                    <div>
                    <p className='text-white font-bold' style={{fontSize:'20px'}}>{data.name}</p>
                    <p className='text-gray-500'>{data.username}</p>
                    <div className='flex items-center mt-2'>
                      <svg className='text-gray-500 mr-1'
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="currentColor">
                        <path d='M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z'/>
                      </svg>
                      <p className='text-gray-500'>Joined {data.date}</p>
                    </div>
                    <div>
                      
                    </div>
                  </div> 
                }
              
              </div>
                    

            </div>
        </div>

        

      </div>
      <div className="flex">
        <div className="h-full w-full sm:w-48 md:w-96 hidden 2xl:block bg-black text-white fixed top-0 right-0">
          <div className="fixed top-0 right-0 w-96 h-full bg-black text-white p-4">
            <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full px-3 py-2 border border-lg border-zinc-700 bg-zinc-900 mb-4"/>
            <div className="bg-black text-white p-4 border mb-4 border-gray-700 rounded-lg max-w-sm">
      <h2 className="text-lg font-bold mb-4">You might like</h2>
      <ul>
        {suggestions.slice(0, showMore ? suggestions.length : 3).map(suggestion => (
          <li key={suggestion.id} className="flex items-center justify-between mb-4 last:mb-0">
            <div className="flex items-center space-x-3">
              <img src={suggestion.logo} alt="" className="w-8 h-8 rounded-full" />
              <div>
                <div className="font-bold">{suggestion.name}</div>
                <div className="text-sm text-gray-400">{suggestion.handle}</div>
              </div>
            </div>
            <button className="bg-white text-black font-bold py-1 px-4 rounded-full">
              Follow
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => setShowMore(!showMore)} className="text-blue-500 hover:underline">
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </div>
            <div className="border border-zinc-700  rounded p-4">
                <h2 className="text-lg font-bold mb-4">Trends for you</h2>
                <ul>
                  { data &&
                    data.trends.map((trend, index) => (
                        <li key={index} className="py-2  last:border-b-0">
                            <div className="text-xs text-gray-500">{trend.location}</div>
                            <div className="font-bold">{trend.tag}</div>
                            <div className="text-xs text-gray-500">{trend.posts} posts</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
