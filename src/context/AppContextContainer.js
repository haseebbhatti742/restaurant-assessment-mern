import React, { useContext, useEffect, useState } from "react";
import { URL_CATEGORIES, URL_CONTACT } from "../constants/constants";
import {
  getCartItemsFromStorage,
  setCartItemsToLocalStorage,
} from "../helpers/localStorage";
import useFetch from "../hooks/useFetch";
import { AppContext, AppContextProvider } from "./AppContext";

function AppContextContainer({ children }) {
  const [contacts, setContacts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("pizza");
  const [categoriesData, setCategoriesData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const {
    data: contacts_xhr,
    error: contact_xhr_error,
    loading: contact_xhr_loading,
  } = useFetch(URL_CONTACT);

  const {
    data: categories_xhr,
    error: categories_xhr_error,
    loading: categories_xhr_loading,
  } = useFetch(URL_CATEGORIES);

  useEffect(() => {
    setContacts(contacts_xhr?.data);
  }, [contacts_xhr]);

  useEffect(() => {
    setCategories(categories_xhr?.data);
    setSelectedCategory(categories_xhr?.data[0]?.slug);
  }, [categories_xhr]);

  const {
    data: categories_data_xhr,
    error: categories_error_xhr,
    loading: categories_loading_xhr,
  } = useFetch(`${URL_CATEGORIES}/${selectedCategory}`);

  useEffect(() => {
    setCategoriesData(categories_data_xhr?.data);
  }, [categories_data_xhr, categories_xhr]);

  useEffect(() => {
    setCartItems(getCartItemsFromStorage());
  }, []);

  const addToCart = (state) => {
    setCartItems((prev) => {
      let newSate = [...prev];

      const found = newSate.findIndex((item) => item?.id === state.id);
      let finalState = { ...state };

      if (found !== -1) {
        finalState = { ...newSate[found] };
        finalState = {
          ...finalState,
          quantity: finalState.quantity ? +finalState?.quantity + 1 : 1,
        };
        newSate[found] = finalState;
      } else {
        newSate.push({ ...finalState, quantity: 1 });
      }

      setCartItemsToLocalStorage(newSate);

      return newSate;
    });
  };

  const handleIncrementQuantity = (state) => {
    setCartItems((prev) => {
      let newState = [...prev];
      const found = newState.findIndex((item) => item?.id === state?.id);
      if (found !== -1) newState[found].quantity = newState[found].quantity + 1;
      return newState;
    });
  };

  const handleDecrementQuantity = (state) => {
    setCartItems((prev) => {
      let newState = [...prev];
      const found = newState.findIndex((item) => item?.id === state?.id);
      if (found !== -1 && newState[found].quantity > 1)
        newState[found].quantity = newState[found].quantity - 1;
      return newState;
    });
  };

  const removeFromCart = (state) => {
    setCartItems((prev) => {
      const newSate = [...prev];
      const filter = newSate.filter((item) => item?.id !== state?.id);
      setCartItemsToLocalStorage(filter);
      return filter;
    });
  };

  const contextValue = {
    contacts,
    categories,
    contactsError: contact_xhr_error,
    contactsLoading: contact_xhr_loading,
    categoriesLoading: categories_xhr_loading,
    categoriesError: categories_xhr_error,
    selectedCategory,
    setSelectedCategory,
    categoriesData,
    categoriesDataError: categories_error_xhr,
    categoriesDataLoading: categories_loading_xhr,
    addToCart,
    cartItems,
    handleIncrementQuantity,
    handleDecrementQuantity,
    removeFromCart,
  };

  return (
    <AppContextProvider value={contextValue}>{children}</AppContextProvider>
  );
}

export default AppContextContainer;

export const useAppContext = () => useContext(AppContext);
