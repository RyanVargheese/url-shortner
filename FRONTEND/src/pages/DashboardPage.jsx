import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white mt-20 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <UrlForm/>
        <UserUrl/>
      </div>
    </div>
  )
}

export default DashboardPage;