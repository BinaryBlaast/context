// CartItem.js
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p>${item.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          min="1"
          max={item.stock}
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 border border-gray-300 rounded px-2 py-1 mr-2"
        />
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-500 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;