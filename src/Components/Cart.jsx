import CartContext from "../Store/CartContext";
import Modal from "../UI/Modal";
import { useContext, useEffect } from "react";
import currencyFormatter from "../Utility/formatting.js";
import UserProgressContext from "../UI/UserProgressContext.jsx";

function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  useEffect(() => {
    console.log("Harshit - " + userProgressCtx.progress);
  }, [userProgressCtx.progress]);

  const cartTotal = cartCtx.items.reduce(
    (totalprice, item) => totalprice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout(){
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="items-center"
      open={userProgressCtx.progress === "openCart"}
    >
      <h2 className="font-semibold text-xl">Your cart</h2>
      <ul className="my-4">
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="text-right font-black items-center">
        Total: {currencyFormatter.format(cartTotal)}
      </p>
      <div className="justify-end flex flex-wrap gap-4 my-4">
        <button className="font-semibold" onClick={handleCloseCart}>
          Close
        </button>
        {cartCtx.items.length >0 ? (<button onClick={handleGoToCheckout} className="bg-red-400 hover:bg-red-500 p-2 font-semibold rounded-md">
          Go to Checkout
        </button>): null}
      </div>
    </Modal>
  );
}

export default Cart;
