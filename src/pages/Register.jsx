
import { useState } from "react";


export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    username: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleRegister = (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !formData.name ||
      !formData.address ||
      !formData.phone ||
      !formData.email ||
      !formData.username ||
      !formData.password
    ) {
      setMessage("⚠ Please fill all fields!");
      return;
    }

    // Store in localStorage (you can store multiple users as an array)
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("✅ Registration successful! please login ");
    setFormData({
      name: "",
      address: "",
      phone: "",
      email: "",
      username: "",
      password: ""
      
    });
  };

  return (
    <div className="flex items-center justify-center  gap-8 min-h-screen bg-gray-100">
         {/* <img
  src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Sandwich-1-1194x1536.webp"
  className="w-[7cm] h-[7cm] animate-bounce"
  alt="Sandwich"
/> */}
      <div className="bg-white p-8 rounded-2xl shadow-md w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Register 🍻</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white p-2 rounded-md hover:bg-yellow-800"
          >
            Register 
          </button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
       <img
  src="https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png"
  className="w-[6cm] h-[6cm] animate-bounce"
  alt="Sandwich"
/>
    </div>
  );
}
