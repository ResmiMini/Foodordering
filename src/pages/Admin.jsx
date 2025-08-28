
export default function Admin()
{
    return( 
        <>
        
         <div className="flex flex-col justify-center items-center gap-5 bg-gray-100">
            <img 
      src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Sandwich-1-1194x1536.webp" 
      className="w-[4cm] h-[4cm]" 
      alt="Sandwich"></img>
       <div> <br/><h1 className="font-bold text-xl text-yellow-600">ADD A ITEM TO MENU</h1></div>
        <div><input className="border p-5 rounded-md w-[10cm]" type= "text" placeholder="Enter the name of item"/> </div>
       
       <div><input className="border p-5 rounded-md w-[10cm]" type=  "text"placeholder="Enter the price of item"/></div> 
         
       <div> <input className="border p-5 rounded-md w-[10cm]" type= "text" placeholder="Enter the category of item"/></div>
         
        <div><input className="border p-5 rounded-md w-[10cm]" type= "text"placeholder="Enter the url  of image of item"/></div>
<button
        
        className="mt-3 bg-yellow-500 hover:bg-yellow-100 text-black py-1 px-4 rounded-md"
      >SUBMIT</button>        </div>
</>

    );
}