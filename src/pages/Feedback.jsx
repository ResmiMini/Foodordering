
import React from 'react';
import Sidebar from '../components/Sidebar';


export default function Feedback()
{
    return(
        <>
        <div className="flex">
<Sidebar/>

  <h1 className="font-bold text-xl text-yellow-600 mt-10 text-center">
    CUSTOMER FEEDBACKS
  </h1>

<div className="ml-40 mt-20 p-6 flex flex-col gap-4 w-full ">

        <div className="flex items-center gap-3">
  <label className="font-medium text-gray-700">User Name:</label>
  <input
    type="text"
    name="name"
    className="p-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  
</div>
<div className="flex items-center gap-3">
  <label className="font-medium text-gray-700">Feed Back:</label>
  <input
    type="text"
    name="name"
    className="p-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  
</div><div className="flex items-center gap-3">
  <label className="font-medium text-gray-700">Response : </label>
  <input
    type="text"
    name="name"
    className="p-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  
</div>
</div>
    </div> 
        </>

    );
}