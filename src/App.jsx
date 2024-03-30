
import CartPage from './CartPage';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <CartPage />
    </CartProvider>
  );
};

export default App;