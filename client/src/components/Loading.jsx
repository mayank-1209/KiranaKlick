import React from 'react'
import { useAppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Loading = () => {

    const { navigate } = useAppContext();
    let { search } = useLocation();
    const query = new URLSearchParams(search);
    const nextUrl = query.get("next");

    useEffect(() => {
        if (nextUrl) {
            setTimeout(() => {
                navigate(`/${nextUrl}`);
            }, 4000)
        }
    }, [nextUrl])

  return (
    <div className= 'flex justify-center items-center h-screen'> 
        <div className='animate-spin rounded-full h-32 w-32 border-4
         border-gray-300 border-t-green-400'></div>
    </div>
  )
}

export default Loading