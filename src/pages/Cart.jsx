export default function Cart({ cart, addToCart, decreaseQty }) {
  // ✅ Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-[3cm]">
      <h2 className="text-2xl font-bold mt-5 mb-4 text-yellow-600 text-center">FOOD ON YOUR PLATE </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2 bg-gray-200 "
            >
              {/* Product Info */}
              <div>
                <img src={item.image} className="w-[4cm] h-[4cm]"/> 
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price} </p>
              </div>

              {/* Quantity Controls */}
              <div>
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="font-semibold">{item.qty}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Subtotal */}
              <p className="font-bold">₹{item.price * item.qty}</p>
            </div>
          ))}

          {/* ✅ Cart Total */}
          <div className="mt-6 flex justify-end gap-5 border-t pt-4">
            <h3 className="text-xl font-semibold">Total</h3>
            <p className="text-xl font-bold">₹{total}</p>
          </div>
        </div>
      )}
      <div className="mt-6 flex justify-end gap-5 border-t pt-4">
  <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200">
    CHECK OUT
  </button>
</div>

    </div>
    
  );
}
