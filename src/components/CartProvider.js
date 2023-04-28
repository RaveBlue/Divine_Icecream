import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartState = {
  items:[],
  totalAmount:0
};

const CartReducer = (state, action ) => {
  if(action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items:updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
 return defaultCartState;
};

const CartProvider = (props) => {

  const [CartState, dispatchCartAction] = useReducer(CartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type:'ADD', item:item});
  };

  const removeItemFromCartHandler = (id) => {;
    dispatchCartAction({type:'REMOVE', id: id});
};
  const CartContext = {
    items:CartState.items,
    totalAmount:CartState.totalAmount,
    addItem:addItemToCartHandler ,
    removeItem:removeItemFromCartHandler
  };

return (
<CartContext.Provider value={CartContext}>
  {props.children}
</CartContext.Provider>
 );
};

export default CartProvider;