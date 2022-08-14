import { CART_DATA_STORAGE_KEY } from "../constants/constants";

export const setCartItemsToLocalStorage = (state) => {
  localStorage.setItem(CART_DATA_STORAGE_KEY, JSON.stringify(state));
};

export const getCartItemsFromStorage = () => {
  return JSON.parse(localStorage.getItem(CART_DATA_STORAGE_KEY)) || [];
};
