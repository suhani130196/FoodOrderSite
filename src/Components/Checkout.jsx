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

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Harshit - handle submit form ", event.target);

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      }),
    });
  }

  function showOrderConfirmed() {
    handleHideCheckout()
    userProgressCtx.orderConfirmed();
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form onSubmit={handleSubmit}>
        <h2 className="font-semibold mb-5">Checkout</h2>
        <Input label="Full Name" type="text" id="name" />
        <Input label="Email" type="email" id="email" />
        <div className="flex gap-3">
          <Input label="Address" type="text" id="address" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="my-4 text-end font-bold">
          Total Amount: {currencyFormatter.format(cartTotal)}{" "}
        </p>

        <div className="flex flex-wrap gap-6 justify-end my-3">
          <button onClick={handleHideCheckout}>Close</button>
          <button
            onClick={showOrderConfirmed}
            type="submit"
            className="bg-red-400 p-2 font-semibold rounded-md hover:bg-red-500"
          >
            Place Order
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default Checkout;
