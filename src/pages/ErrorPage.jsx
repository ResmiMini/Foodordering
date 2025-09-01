// src/pages/ErrorPage.jsx
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-yellow-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Oops! Page not found 😢</h2>
      <p className="text-gray-600 mt-2">
        The page you’re looking for doesn’t exist or was moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}
