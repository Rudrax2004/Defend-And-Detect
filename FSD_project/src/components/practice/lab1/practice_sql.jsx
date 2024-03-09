/*eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './style.css'
import { labButton } from '../../Buttons/Button';
import { useNavigate } from 'react-router-dom';
export const SqlInjection = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const Navigate = useNavigate();
  const openWebPage = () => {
    const url = 'https://demo.testfire.net/login.jsp';
    window.open(url, '_blank');
  };
  useEffect(() => {
    if (document.location.hash === '#unauthorized') {
      setErrorMessage('Invalid Username or Password');
    } else if (document.location.hash === '#error') {
      setErrorMessage('An error has occurred');
    }
  }, []);

  return (
    <div className="relative mt-8  h-screen overflow-hidden">
      <video autoPlay muted loop className="w-full h-full object-cover  z-[-1]">
        <source src="/photos/background.mp4" type="video/mp4" />
      </video>

      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form action="http://localhost:5001/login" method="post" className="border-3 border-f1f1f1 max-w-sm mx-auto p-16">
          <div className="bg-opacity-75 bg-gray-800 p-8">
            <label className="block text-gray-400 text-lg font-bold mb-2">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              required
              className="w-full px-4 py-2 border rounded appearance-none leading-tight focus:outline-none focus:shadow-outline"
            />

            <label className="block text-gray-400 text-lg font-bold mb-2 mt-4">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded appearance-none leading-tight focus:outline-none focus:shadow-outline"
            />

             <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4 z-50"
            >
              Login
            </button>
          </div>
         <div className='mt-2'>
         <AwesomeButton
            onPress={()=>{Navigate('/')}} // Add onClick event
            type="primary"
            className='aws-btn1'
            >
            <FaHome />
              Home
          </AwesomeButton>
                {/* Divider */}
          <AwesomeButton
            onPress={()=>{Navigate('/learn')}} // Add onClick event
            type="primary"
            className='aws-btn1'
            >
              <AiOutlineSearch className="mr-2" />   
              Labs
          </AwesomeButton>
          <AwesomeButton
            onPress={openWebPage}
            type="primary"
            className='aws-btn1'
            >
              <AiOutlineSearch className="mr-2" />   
             Sql
          </AwesomeButton>
          </div> 
        </form>

        {errorMessage && (
          <div className={`text-orange-700 text-2xl font-bold p-4`}>
            {errorMessage}
          </div>
        )}
      </div>

     </div>
  );
};

export default SqlInjection;
