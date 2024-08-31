import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getLSTheme = () => {
  const isTheme = localStorage.getItem("storeTheme") || "cupcake";
  document.documentElement.setAttribute("data-theme", isTheme);
  return isTheme;
};
const getLSUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user || null;
};

const initialState = {
  user: getLSUser(),
  theme: getLSTheme(),
  orders: [],
  address: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.clear();
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
    toggleTheme: (state) => {
      const newTheme = state.theme === "fantasy" ? "sunset" : "fantasy";
      state.theme = newTheme;
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("storeTheme", newTheme);
    },
    updateAddress: (state, action) => {
      state.address = action.payload;
    },
    getLSUser: () => {
      const user = JSON.parse(localStorage.getItem("user"));
      return user || null;
    },
  },
});

export const { loginUser, logoutUser, toggleTheme, updateAddress } =
  userSlice.actions;
export default userSlice.reducer;
