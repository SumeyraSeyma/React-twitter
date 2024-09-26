import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { NavLink } from 'react-router-dom';

function Profile() {
  const [data, setData] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState('posts');

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
            <div className="bg-black p-4  mt-3 " >
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
            <div className="rounded overflow-hidden shadow-lg p-4 m-4">
              <div>
                {data && data.posts.map((post) => (
                  <div key={post.id}>
                  <div className="flex mt-4 ">
                    <div>
                    <img src={data.profile} alt="profile" className='w-8 h-8 rounded-full border-3 border-black' />
                      </div>
                      <div>
                    <div className='flex'>
              <p className='text-white font-bold ml-2'>{data.name}</p>
              <p className='text-gray-500 ml-2'>{data.username}</p>
              <p className='text-gray-500 ml-2'>· {post.date}</p>
              </div>
              <div>
                <p className='text-white mt-2 mb-2'>{post.body}</p>

              </div>
              
              </div>
              
              </div>
              
              <div className='justify-center'>
              <img src={post.image} alt="post" className='w-full h-64 rounded-md' />
              
              </div>

              <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                <button className="flex items-center">
                  <svg className='text-gray-500 mr-1'
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor">
                    <path d='M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z'/>
                  </svg>
                  <p className='text-gray-500'>{post.replies}</p>
                </button>
                <button className="flex items-center">
                <svg className='text-gray-500 mr-1'
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor">
                    <path d='M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z'/>
                  </svg>
                  <p className='text-gray-500'>{post.reposts}</p>
                </button>
                <button className="flex items-center">
                <svg className='text-gray-500 mr-1'
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor">
                    <path d='M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z'/>
                  </svg>
                  <p className='text-gray-500'>{post.likes}</p>
                </button>
                <button className="flex items-center">
                <svg className='text-gray-500 mr-1'
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor">
                    <path d='M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z'/>
                  </svg>
                  <p className='text-gray-500'>{post.likes}</p>
                </button>
                <div className='flex'>
                <button className="flex items-center">
                <svg className='text-gray-500 mr-1'
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor">
                    <path d='M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z'/>
                  </svg>
                </button>
                <button className="flex items-center">
                <svg className='text-gray-500 mr-1'
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="currentColor">
                    <path d='M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z'/>
                  </svg>
                </button>
                </div>
              </div>
              </div>
                ))}
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
