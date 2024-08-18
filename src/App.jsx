import Header from "./Components/Header";
import AvailableFoodCards from "./Components/FoodCard";
import FoodCardsList from "./Components/FoodCardsList";
import { CartContextProvider } from "./Store/CartContext.jsx";
import { UserProgressProvider } from "./UI/UserProgressContext.jsx";
import Cart from "./Components/Cart.jsx";
import Checkout from "./Components/Checkout.jsx";
function App() {
  return (
    // <div>
    <UserProgressProvider>
      <CartContextProvider>
        <Header />
        <FoodCardsList />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressProvider>
    // </div>
  );
}
export default App;