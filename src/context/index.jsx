import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ show: false, isError: false, msg: "" });
  const [cartItems, setCartItems] = useState([]);
  const [totalResult, setTotalResult] = useState({ total: 0, quantity: 0 });

  const showAlert = (show = false, isError = false, msg = "") => {
    setAlert({ show, isError, msg });
  };

  // useEffect(() => {
  //   const cartItems = localStorage.getItem("shoeCart") || [];
  // }, [cartItems]);

  useEffect(() => {
    getTotalPrice();
    console.log(cartItems);
  }, [cartItems]);

  const getTotalPrice = () => {
    // setting up reduce function for total price based on total quantity
    let { total, quantity } = cartItems.reduce(
      (cartTotal, cartItem) => {
        const { price, quantity } = cartItem;
        const itemTotal = price * quantity;
        cartTotal.total += itemTotal;
        cartTotal.quantity += quantity;
        return cartTotal;
      },
      { quantity: 0, total: 0 }
    );
    total = parseFloat(total.toFixed(2));

    setTotalResult({ total, quantity });
  };

  return (
    <AppContext.Provider
      value={{
        navigate,
        alert,
        cartItems,
        totalResult,
        showAlert,
        setTotalResult,
        setCartItems,
        getTotalPrice,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
