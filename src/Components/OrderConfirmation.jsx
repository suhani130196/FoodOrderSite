import Modal from "../UI/Modal";
import { useContext, useEffect } from "react";
import UserProgressContext from "../UI/UserProgressContext";

function OrderConfirmation() {
  const userProgressCtx = useContext(UserProgressContext);

  useEffect(() => {
    if (userProgressCtx.progress === "orderConfirmed") {
      const timerID = setTimeout(() => {
        userProgressCtx.hideCart();
      }, 3000);

      return () => clearTimeout(timerID);
    }
  }, [userProgressCtx.progress === "orderConfirmed"]);

  return (
    <Modal open={userProgressCtx.progress === "orderConfirmed"}>
      <h1 className="m-5 text-center font-semibold text-xl">
        Order Placed Successfully!
      </h1>
    </Modal>
  );
}

export default OrderConfirmation;
