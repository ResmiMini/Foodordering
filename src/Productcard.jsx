
import React from "react";

export default function ProductCard({ product }) {
  const handleAddToCart = () => {
    alert(`${product.name}   Added to cart: `);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-2 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-45 h-45 object-cover rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      {/* <p className="text-gray-500">{product.category}</p> */}
      <p className="font-bold text-yellow-600">₹{product.price}</p>
      <p className="text-yellow-500">⭐ {product.rating}</p>
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-yellow-500 hover:bg-yellow-100 text-black py-1 px-4 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
}
