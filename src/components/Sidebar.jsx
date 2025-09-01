import { NavLink } from "react-router-dom";
import "../App.css";

export default function Sidebar() {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "w-full bg-white text-yellow-600 font-bold px-4 py-2 rounded-lg shadow-md text-center"
      : "w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-center transition";

  return (
    <nav className=" w-75 p-10 flex flex-col gap-6 mt-20 border-r-2 border-gray-300">
      <NavLink to="/admin" className={linkClasses}>
        ADD MENU
      </NavLink>
      <NavLink to="/feedback" className={linkClasses}>
        FEEDBACKS
      </NavLink>
      <NavLink to="/statistics" className={linkClasses}>
        STATISTICS
      </NavLink>
      <NavLink to="/usermgt" className={linkClasses}>
        USER MANAGEMENT
      </NavLink>
    </nav>
  );
}
