import { NavLink } from "react-router-dom";
import "../App.css";

export default function Navbar({ cartCount }) {
  const linkClasses = ({ isActive }) =>
    isActive ? "text-black font-bold" : "hover:text-black";

  return (
    <nav className="bg-yellow-600 p-8 text-white flex items-center justify-between text-xl">
      <div className="flex-1"></div>

      
      <div className="flex-1 flex gap-6 justify-end">
        <NavLink to="/" className={linkClasses}>
          ADD MENU
        </NavLink>
        <NavLink to="/about" className={linkClasses}>
          FEEDBACKS
        </NavLink>
        <NavLink to="/login" className={linkClasses}>
          STATISTICS
        </NavLink>
        <NavLink to="/admin" className={linkClasses}>
          USER MANAGEMENT
        </NavLink>

        
      </div>
    </nav>
  );
}
