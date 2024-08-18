import { useContext } from "react";
import currencyFormatter from "../Utility/formatting.js";
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import Input from "../UI/Inputs.jsx";
import UserProgressContext from "../UI/UserProgressContext.jsx";

function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalprice, item) => totalprice + item.quantity * item.price,
    0
  );

  function handleHideCheckout() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form>
        <h2 className="font-semibold mb-5">Checkout</h2>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="Email" type="email" id="email" />
        <div className="flex gap-3">
          <Input label="Address" type="text" id="address" />
          <Input label="City" type="text" id="city" />
        </div>
      </form>
      <p className="my-4 text-end font-bold">
        Total Amount: {currencyFormatter.format(cartTotal)}{" "}
      </p>

      <div className="flex flex-wrap gap-6 justify-end my-3">
        <button onClick={handleHideCheckout}>Close</button>
        <button className="bg-yellow-400 p-2 font-semibold rounded-md hover:bg-yellow-500">
          Place Order
        </button>
      </div>
    </Modal>
  );
}

export default Checkout;
