import React from 'react'
import { useNavigate } from '@tanstack/react-router'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  const navigate=useNavigate();
  return (
    // min-h-screen ensures height of the div is always full screen
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>

        <UrlForm />
        <p onClick={() => navigate({to:"/auth"})} className="text-blue-500 text-center hover:text-blue-700 text-sm mt-3">Click Here to make Custom Urls</p>
      </div>
    </div>
    
  )
}

export default HomePage