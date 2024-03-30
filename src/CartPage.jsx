// CartPage.js
import  { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';

const CartPage = () => {
  const { cart, products } = useContext(CartContext);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-8 border-t border-gray-300 pt-4">
        <p className="font-semibold">
          Total Quantity: <span className="ml-2">{totalQuantity}</span>
        </p>
        <p className="font-semibold">
          Total Amount: <span className="ml-2">${totalAmount.toFixed(2)}</span>
        </p>
      </div>
      {/* Render a list of products here */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Products</h2>
        {products.map((product) => (
          <div key={product.id} className="mb-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-32 h-32"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p>${product.price}</p>
            {/* Add a button to add the product to the cart */}
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;