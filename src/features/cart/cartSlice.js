import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getLsCart = () => {
  const theCart = JSON.parse(localStorage.getItem("cart"));
  return theCart || initialState;
};
const cartSlice = createSlice({
  name: "cart",
  initialState: getLsCart(),
  reducers: {
    addItem: (state, action) => {
      const theProduct = action.payload;
      const isExist = state.cartItems.find(
        (e) => e.cartID === theProduct.cartID
      );
      if (isExist) {
        isExist.amount += theProduct.amount;
      } else {
        state.cartItems = [...state.cartItems, theProduct];
      }
      state.cartTotal += theProduct.amount * theProduct.price;
      state.numItemsInCart += theProduct.amount;
      cartSlice.caseReducers.calcTotals(state);

      toast.success(`${theProduct.title}  added to cart`);
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(initialState));
      return initialState;
    },
    removeItem: (state, action) => {
      const { cartID, price, amount } = action.payload;
      state.cartItems = state.cartItems.filter((e) => e.cartID !== cartID);
      state.cartTotal -= amount * price;
      state.numItemsInCart -= amount;

      cartSlice.caseReducers.calcTotals(state);
      toast.error("Item removed from cart");
    },
    editItem: (state, action) => {
      const { cartID, newAmount } = action.payload;
      const theProduct = state.cartItems.find((e) => e.cartID === cartID);
      const theChange = newAmount - theProduct.amount;
      theProduct.amount = newAmount;
      state.cartTotal += theChange * theProduct.price;
      state.numItemsInCart += theChange;
      cartSlice.caseReducers.calcTotals(state);
      toast.success("Cart updated");
    },
    calcTotals: (state) => {
      state.tax = 0.14 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
