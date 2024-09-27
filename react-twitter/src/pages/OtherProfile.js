import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function OtherProfile() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('posts');
  const [showMore, setShowMore] = useState(false);

  let navigate = useNavigate();
    
  const handleGoBack =() => {
    navigate(-1);
  }

  const suggestions = [
    { name: "Tesla", handle: "@Tesla", verified: true, id: 5, logo: "https://www.whitescreen.online/image/white-background.png" },
    { name: "Elon Musk", handle: "@elonmusk", verified: true, id: 6, logo: "https://www.whitescreen.online/image/white-background.png" },
    { name: "Apple", handle: "@Apple", verified: true, id: 7, logo: "https://www.whitescreen.online/image/white-background.png" },
    { name: "Netflix", handle: "@Netflix", verified: true, id: 8, logo: "https://www.whitescreen.online/image/white-background.png" },
  ];
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/profiles/${id}.json`); // Ensure this path correctly points to your JSON file.
        const result = await response.json();
        setData(result);
        console.log(result); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="flex justify-center">
    <div className="2xl:w-6/12 2xl:h-24 justify-center backdrop-blur-lg sticky z-50 top-0 bg-black p-4" id='pa'>
      <div className="flex ">
          <button onClick={handleGoBack} className='flex mr-7 items-center justify-start rounded-full border   px-3 py-2  border-black bg-black transition duration-300 ease-in-out'>
              <FontAwesomeIcon icon={faArrowLeftLong} className='text-white' />
          </button>
          <div className='mb-3'>
              {data ?
                  <p className='text-white font-bold' style={{fontSize:'20px'}}>{data.username}</p> 
                  : <p>Loading...</p>}
              {data ?
                  <div style={{color:'rgb(113, 118, 123)', fontSize:'12px'}} >
                      {data.posts.length > 0 && (
                      <p>{data.posts[data.posts.length - 1].id} posts</p>
                      )}
                  </div>
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
                  <p className='text-white mt-3'>{data.bio}</p>
                  <div className='flex'>
                    <div className='flex items-center mt-2 mr-2'>
                      <svg className='text-gray-500 mr-1'
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="currentColor">
                        <path d='M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z'/>
                      </svg>
                      <p className='text-gray-500'>{data.location}</p>
                    </div>
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
                  </div>
                  <div className='flex mt-3'>
                      <div className="flex items-center space-x-2 mr-2">
                        <p className="text-white font-bold">{data.following}</p>
                        <p className="text-gray-500">Following</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <p className="text-white font-bold">{data.followers}</p>
                        <p className="text-gray-500">Followers</p>
                      </div>
                  </div>
                </div> 
                  
              }</div>
              
          </div>
          <div className="bg-black p-4  mt-3 mb-11 " >
      <ul className="flex 2xl:h-14 " id='pb'>
        <li className={`${activeTab === 'posts' ? 'border-b-4 border-blue-500 text-white' : 'text-gray-500'} 2xl:px-4 py-2 text-white hover:bg-zinc-800  flex-1 text-center`}>
          <NavLink to="/profile" className={` px-4 py-2 text-white `}>Posts</NavLink>
        </li>
        <li className={`${activeTab === 'replies' ? 'border-b-4 border-blue-500 text-white' : 'text-gray-500'} 2xl:px-4 py-2 text-white hover:bg-zinc-800  flex-1 text-center`}>
          <NavLink to="/replies" className={` px-4 py-2 text-white `}>Replies</NavLink>
        </li>
        <li className={`${activeTab === 'highlights' ? 'border-b-4 border-blue-500 text-white' : 'text-gray-500'} 2xl:px-4 py-2 text-white hover:bg-zinc-800  flex-1 text-center`}>
          <NavLink to="/highlights" className={` px-4 py-2 text-white `}>Highlights</NavLink>
        </li>
        <li className={`${activeTab === 'media' ? 'border-b-4 border-blue-500 text-white' : 'text-gray-500'} 2xl:px-4 py-2 text-white hover:bg-zinc-800  flex-1 text-center`}>
          <NavLink to="/media" className={` px-4 py-2 text-white `}>Media</NavLink>
        </li>
      </ul>
          </div>
          

      </div>
    </div>

    <div className="hidden 2xl:block">
        <div className="flex h-full w-full sm:w-48 md:w-96  bg-black text-white fixed top-0 right-0">
          <div className="fixed top-0 right-0 w-96 h-full bg-black text-white p-4">
            <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full px-3 py-2 border border-lg border-zinc-700 bg-zinc-900 mb-4"/>
            <div className="bg-black text-white p-4 border mb-4 border-gray-700 rounded-lg max-w-sm">
      <h2 className="text-lg font-bold mb-4">You might like</h2>
      <ul>
        {suggestions.slice(0, showMore ? suggestions.length : 3).map(suggestion => (
                      <NavLink key={suggestion.id} to={`/profile/${suggestion.id}`} >
          <li className="flex items-center justify-between mb-4 last:mb-0">

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
          </NavLink>
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

export default OtherProfile;
