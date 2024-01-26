import React from "react";
import { useGlobalContext } from "../context";

const CartItem = ({ id, img, name, size, price, quantity }) => {
  const { cartItems, setCartItems } = useGlobalContext();

  /* CART OPERATIONS */

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(updatedItems);
  };

  const toggleQuantity = (id, type) => {
    let updatedItems = cartItems
      .map((cartItem) => {
        if (cartItem.id === id) {
          if (type === "increase") {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          if (type === "decrease") {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.quantity !== 0);
    // chaining the filter method to only return every cartItem quantity that is
    // not equal to 0 (i.e from 1 and above)
    setCartItems(updatedItems);
  };

  return (
    <article className="mb-4 flex items-start gap-3">
      <img src={img} alt={name} className="w-16" />
      <div className="basis-[100%]">
        <h4 className="text-lg font-bold font-montserrat">{name}</h4>
        <div className="flex max-[300px]:block ">
          <p className="basis-20 font-semibold text-blue-800">${price}</p>
          <p className="font-semibold text-slate-gray">Size: {size}</p>
        </div>
        {/* remove button */}
        <button
          className="block text-slate-gray hover:text-red-600"
          onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div className="grid justify-items-center gap-2">
        {/* increase quantity */}
        <button
          className="fill-blue-700 hover:fill-blue-900 cursor-pointer"
          onClick={() => toggleQuantity(id, "increase")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-7">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* quantity */}
        <p className="text-slate-gray text-xl font-semibold">{quantity}</p>
        {/* decrease quantity */}
        <button
          className="fill-blue-700 hover:fill-blue-900 cursor-pointer"
          onClick={() => toggleQuantity(id, "decrease")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-7">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
