

import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-black font-bold"
      : "hover:text-black";

  return (
<nav className="bg-yellow-600 p-8 text-white flex items-center justify-between text-xl">
  {/* Left empty (or logo later) */}
  <div className="flex-1"></div>

  {/* Center */}
<h1 className="flex-1 text-center font-extrabold text-4xl">
  🍟 Hunger  🍔 Station 🍩
</h1>

  {/* Right */}
  <div className="flex-1 flex gap-6 justify-end">
    <NavLink to="/" className={linkClasses}>Home</NavLink>
    <NavLink to="/about" className={linkClasses}>About</NavLink>
    <NavLink to="/login" className={linkClasses}>Login</NavLink>
    <NavLink to="/admin" className={linkClasses}>Admin</NavLink>

  </div>
</nav>
  );
}
