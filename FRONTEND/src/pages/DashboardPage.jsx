import React from 'react'
import UrlForm from '../components/UrlForm'

const DashboardPage = () => {
  return (
    <div className="min-h-screen -mt-30 bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <UrlForm/>
      </div>
    </div>
  )
}

export default DashboardPage;