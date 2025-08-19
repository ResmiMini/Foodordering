

export default function Login() {
  return (
    <>
    <div className="flex justify-center items-center  bg-gray-100">
  <div className="w-[13cm] h-[13cm] border rounded-xl shadow-lg flex flex-col justify-center items-center gap-4  bg-white">
    <img 
      src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Sandwich-1-1194x1536.webp" 
      className="w-[4cm] h-[4cm]" 
      alt="Sandwich"></img>
    <h1 className="text-3xl font-bold ">Login</h1>

    <input  
      className="border p-2 rounded-md w-3/4"
      type="text" 
      placeholder="Username"
    />

    <input  
      className="border p-2 rounded-md w-3/4"
      type="password" 
      placeholder="Password"
    />

    <button className="mt-4 bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700">
      Login
    </button>
    <p>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
  </div>
</div>
    </>
  );
}
