import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

export default function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: ""
  });

  const [menu, setMenu] = useState([]);
  const [message, setMessage] = useState("");

  // Load menu from localStorage when component loads
  useEffect(() => {
    const savedMenu = JSON.parse(localStorage.getItem("menu")) || [];
    setMenu(savedMenu);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Save dish to localStorage
  const handleSave = () => {
    const updatedMenu = [...menu, formData];
    setMenu(updatedMenu);

    // Save to localStorage
    localStorage.setItem("menu", JSON.stringify(updatedMenu));

    setMessage("Dish added successfully!");

    // Clear form
    setFormData({ name: "", price: "", category: "", image: "" });
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 fixed h-screen">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6 flex flex-col gap-4 w-full">
        <h1 className="font-bold text-2xl text-yellow-600">
          ADD AN ITEM TO MENU
        </h1>

        <input
          className="border p-3 rounded-md w-[10cm]"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter the name of item"
        />

        <input
          className="border p-3 rounded-md w-[10cm]"
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter the price of item"
        />

        <input
          className="border p-3 rounded-md w-[10cm]"
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter the category of item"
        />

        <input
          className="border p-3 rounded-md w-[10cm]"
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter the url of image of item"
        />

        <button
          onClick={handleSave}
          className="mt-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-md w-fit transition"
        >
          SAVE
        </button>

        {message && (
          <p className="text-green-600 font-medium mt-2">{message}</p>
        )}

        {/* Show Menu */}
        
      </div>
    </div>
  );
}
