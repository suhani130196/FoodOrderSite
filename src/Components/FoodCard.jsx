import currencyFormatting from "../Utility/formatting";
import { useContext } from "react";
import CartContext from "../Store/CartContext";

function AvailableFoodCards({ meal }) {
  const CartCxt = useContext(CartContext);

  function handleAddMealToCart() {
    CartCxt.addItem(meal);
  }
  return (
    <>
      {/* <div className="m-[80px]"> */}
      <div className="w-[300px] border-none rounded-xl">
        <div className="">
          <img
            src={`http://localhost:3000/${meal.image}`}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6 text-center bg-black space-y-3">
          <h1 className="font-bold text-[25px]">{meal.name}</h1>
          <p className="text-yellow-400 bg-brown w-[60px] mx-24">
            {currencyFormatting.format(meal.price)}
          </p>
          <p className="text-[15px]">{meal.description}</p>
          <button
            className="mt-4 bg-yellow-400 text-black p-2 rounded-md font-semibold"
            onClick={handleAddMealToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
export default AvailableFoodCards;
