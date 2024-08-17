import Header from "./Components/Header";
import AvailableFoodCards from "./Components/FoodCard";
import FoodCardsList from "./Components/FoodCardsList";
import { CartContextProvider } from "./Store/CartContext.jsx";
import { UserProgressProvider } from "./UI/UserProgressContext.jsx";
import Cart from "./Components/Cart.jsx";
function App() {
  return (
    // <div>
    <UserProgressProvider>
      <CartContextProvider>
        <Header />
        <FoodCardsList />
        <Cart />
      </CartContextProvider>
    </UserProgressProvider>
    // </div>
  );
}
export default App;
