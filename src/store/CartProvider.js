import CartContext from "./cart-context";
import {useReducer} from 'react';
const defaultCartSate={
  items:[],
  totalAmount:0
}

const cartReducer=(state,action)=>{
  return
}
const CartProvider = (props) => {
  useReducer(cartReducer,defaultCartSate)
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
