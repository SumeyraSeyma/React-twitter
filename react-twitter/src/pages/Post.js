import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

function Post() {
    const [data, setData] = useState(null);
    const [input, setInput] = useState('');
    const [isFocused, setIsFocused] = useState(false);
  
    let navigate = useNavigate();
      
    const handleGoBack =() => {
      navigate(-1);
    }

    const handleInputChange = (e) => {
        setInput(e.target.value);
      };

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
      <div className="justify-center backdrop-blur-lg sticky z-50 top-0 bg-black p-4" id='pa'>
      <div className="flex justify-between items-center">
          <button onClick={handleGoBack} className='flex items-center rounded-full border px-3 py-2 border-black bg-black transition duration-300 ease-in-out'>
            <FontAwesomeIcon icon={faArrowLeftLong} className='text-white' />
          </button>
          <button className="bg-blue-500 text-white rounded-full px-6 py-2">Post</button>
        </div>
        <div>
          <div className="flex flex-col  w-full p-4 border border-gray-800">
            <div className="flex items-start w-full">
              <div className='flex-shrink-0'>
                {data ?
                <img src={data.profile} className='w-8 h-8 rounded-full border-3 border-black' />
                : <p>Loading...</p>}
              </div>
                <textarea
                value={input}
                onChange={handleInputChange}
                placeholder="What is happening?!"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="flex-grow h-20 p-2 text-white bg-black rounded-lg ml-4 focus:outline-none resize-none"/>
            </div>
          <div>
    {isFocused && (
  <div className='flex items-center'>  
    <svg className='text-blue-500 mr-2' 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="currentColor">
      <path d='M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z'/>
    </svg>
    <button className="text-blue-500">Everyone can reply</button>
  </div>
)}
    </div>
    <div className='flex' >
    <div className="flex mt-4 2xl:space-x-2 justify-start">
        <button className="p-2 text-xl">
          <svg className='text-blue-500'
             width="24"
             height="24" 
             viewBox="0 0 24 24" 
             fill="currentColor">
             <path d='M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z'/>
          </svg>
        </button>
        <button className="p-2 text-xl">
          <svg className='text-blue-500'
             width="24"
             height="24" 
             viewBox="0 0 24 24" 
             fill="currentColor">
             <path d='M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z'/>
          </svg>
        </button>
        <button className="p-2 text-xl">
          <svg className='text-blue-500'
             width="24"
             height="24" 
             viewBox="0 0 24 24" 
             fill="currentColor">
             <path d='M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z'/>
          </svg>
        </button>
        <button className="p-2 text-xl">
          <svg className='text-blue-500'
             width="24"
             height="24" 
             viewBox="0 0 24 24" 
             fill="currentColor">
             <path d='M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z'/>
          </svg>
        </button>
        <button className="p-2 text-xl">
          <svg className='text-blue-500'
             width="24"
             height="24" 
             viewBox="0 0 24 24" 
             fill="currentColor">
             <path d='M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z'/>
          </svg>
        </button>
        <button className="p-2 text-xl">
          <svg className='text-blue-500'
             width="24"
             height="24" 
             viewBox="0 0 24 24" 
             fill="currentColor">
             <path d='M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z'/>
          </svg>
        </button>
        
      </div>
      </div>
    </div>
</div>
    </div>
    </div>
  )
}

export default Post