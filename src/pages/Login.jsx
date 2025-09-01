import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext"; // Make sure you have this

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { login } = useContext(UserContext); // 🔥 get login function from context

  const handleLogin = (e) => {
    e.preventDefault();

    // Get users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Find user with matching username & password
    const user = storedUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      login(user); // ✅ update context + localStorage

      if (user.username === "admin") {
        navigate("/admin"); // Redirect admin
      } else {
        navigate("/"); // Redirect normal user
      }
    } else {
      setMessage("❌ Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-[15cm] bg-gray-100">
      <div className="bg-white p-5 rounded-2xl shadow-md w-[550px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Login 🍰</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white p-2 rounded-md hover:bg-yellow-700"
          >
            Login
          </button>

          <p>
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>

          <p>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
        </form>

        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
}
