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

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <>
      <div className="flex justify-between items-center text-center p-10 mx-10">
        <div className="flex gap-6 items-center">
          <img
            src={Logo}
            className=" rounded-full h-[80px] border border-red-400"
          />
          <h1 className="text-red-400 font-raleway font-semibold tracking-widest text-[30px]">
            CraveCart
          </h1>
        </div>
        <div className="flex gap-6 items-center">
          <button>
            <svg
            className="fill-red-400 h-[100px]"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-suit-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
            </svg>
          </button>
          <button
            className="text-red-400 font-raleway text-[25px]"
            onClick={handleShowCart}
          >
            Cart({totalItemsInCart})
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
