import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { UserContext } from "../context/UserContext";
import "../App.css";

export default function Navbar({ cartCount }) {
  const { user, logout } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    setMenuOpen(false); // close mobile menu on logout
  };

  // Function for NavLink class
  const linkClasses = ({ isActive }) =>
    isActive
      ? "w-full  text-black font-bold px-4 py-2 rounded-lg shadow-md text-center transition"
      : "w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-center transition";

  return (
    <nav className="bg-yellow-600 text-white px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <h1 className="font-bold text-xl md:text-4xl">
        🍟 Hunger 🍔 Station 🍩
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center text-l">
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClasses}>
          About
        </NavLink>

        {user ? (
          <>
            <span className="font-semibold"> {user.username}</span>
            <button
              onClick={handleLogout}
              className="bg-white text-yellow-600 px-3 py-1 rounded-md hover:bg-gray-200 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/login" className={linkClasses}>
            Login
          </NavLink>
        )}

        <NavLink to="/cart" className={linkClasses}>
          🛒 ({cartCount})
        </NavLink>
      </div>

      {/* Mobile Burger Icon */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-fit bg-yellow-600 flex flex-col gap-4 p-6 text-lg md:hidden shadow-lg z-50">
          <NavLink
            to="/"
            className={linkClasses}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={linkClasses}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          {user ? (
            <>
              <span className="font-semibold">👋 {user.username}</span>
              <button
                onClick={handleLogout}
                className="bg-white text-yellow-600 px-3 py-1 rounded-md hover:bg-gray-200 transition w-fit"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={linkClasses}
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
          )}

          <NavLink
            to="/cart"
            className={linkClasses}
            onClick={() => setMenuOpen(false)}
          >
            🛒 ({cartCount})
          </NavLink>
        </div>
      )}
    </nav>
  );
}
