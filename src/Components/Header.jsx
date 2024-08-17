import Logo from "../assets/logo.jpg";
import { useState, useContext } from "react";
import CartContext from "../Store/CartContext";
import userProgressContext from "../UI/UserProgressContext";

function Header() {
  const CartCxt = useContext(CartContext);
  const userProgressCtx = useContext(userProgressContext);

  const totalItemsInCart = CartCxt.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart(){
    userProgressCtx.showCart();
  }

  return (
    <>
      <div className="flex justify-between items-center text-center p-10 mx-10">
        <div className="flex gap-6 items-center">
          <img
            src={Logo}
            className=" rounded-full h-[80px] border border-yellow-200"
          />
          <h1 className="text-yellow-400 font-raleway font-semibold tracking-widest text-[30px]">
            REACTFOOD
          </h1>
        </div>
        <div>
          <button className="text-yellow-400 font-raleway text-[25px]" onClick={handleShowCart}>
            Cart({totalItemsInCart})
          </button>
        </div>
      </div>
      
    </>
  );
}

export default Header;
