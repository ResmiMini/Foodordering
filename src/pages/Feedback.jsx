
import React from 'react';
import Sidebar from '../components/Sidebar';


export default function Feedback()
{
    return(
        <>
        <div className="flex">
<Sidebar/>

  <div className="min-h-screen flex flex-col items-center justify-center ">
  {/* Heading */}
  <h1 className="font-bold text-3xl text-yellow-600 mb-10 text-center">
    CUSTOMER FEEDBACKS
  </h1>

  {/* Form */}
  <div className="bg-white shadow-lg rounded-2xl p-8 w-[450px]">
    <div className="flex flex-col gap-6">
      
      {/* User Name */}
      <div className="flex items-center gap-10">
        <label className="w-32 font-medium text-gray-700 ">
          User Name:
        </label>
        <input
          type="text"
          name="name"
          className="p-2 border rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Feedback */}
      <div className="flex items-center gap-4">
        <label className="w-32 font-medium text-gray-700 dark:text-gray-300">
          Feedback:
        </label>
        <input
          type="text"
          name="feedback"
          className="p-2 border rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Response */}
      <div className="flex items-center gap-4">
        <label className="w-32 font-medium text-gray-700 dark:text-gray-300">
          Response:
        </label>
        <input
          type="text"
          name="response"
          className="p-2 border rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-lg transition">
          Submit
        </button>
      </div>
    </div>
  </div>
</div>

    </div> 
        </>

    );
}