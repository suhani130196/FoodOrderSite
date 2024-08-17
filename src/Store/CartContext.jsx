import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "Add_Items") {
    // existingCartItemIndex variable is checking for the index of item if that item exist in the cart or Items array
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // updatedItems will create a new array and therefore also a new array object in memory copying the old array.
    const updatedItems = [...state.items];

    // if that index is greater than minus one, we know that the item already exists in this item's array. Else incoming item will be added to items array.
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
      // add a quantity property and set it to one, initially so that new cart items start with quantity of one then we update it later
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === "Remove_Items") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem.quantity === 1) {
      const updatedItems = [...state.items];
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem - 1,
      };
    }
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatch({ type: "Add_Items", item });
  }

  function removeItem(id) {
    dispatch({ type: "Remove_Items", id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
