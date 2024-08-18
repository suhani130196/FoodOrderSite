import { createContext, useContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hidecart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    console.log("Harshit - show cart");
    setUserProgress("openCart");
  }

  function hideCart() {
    console.log("Harshit - hide cart");
    setUserProgress("");
  }

  function showCheckout() {
    console.log("Harshit - show checkout");
    setUserProgress("checkout");
  }

  function hideCheckout() {
    setUserProgress("")
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
