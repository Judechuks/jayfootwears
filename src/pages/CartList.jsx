import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useGlobalContext } from "../context";

const CartList = () => {
  const { cartItems, setCartItems, totalResult } = useGlobalContext();
  const { total } = totalResult;

  /* CART OPERATIONS */

  const clearCart = () => {
    setCartItems([]);
  };

  /* WHEN CART IS EMPTY */
  if (cartItems.length === 0) {
    return (
      <section className="max-w-[1100px] mx-auto mt-32 mb-18 w-full h-screen">
        {/* cart header */}
        <header className="text-center">
          <h2 className="text-xl font-bold sm:text-[2.5rem] uppercase">
            your <span className="text-blue-800">cart</span>
          </h2>
          <h4 className="mt-10 text-xl text-slate-gray">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto mt-28 mb-20 w-full min-h-screen max-lg:px-5">
      {/* cart header */}
      <header className="text-center">
        <h2 className="text-xl font-bold sm:text-[2.5rem] uppercase">
          your <span className="text-blue-800">cart</span>
        </h2>
      </header>
      {/* cart items */}
      <div className="mt-10">
        {cartItems?.map((item) => {
          return <CartItem key={item.id} {...item} totalResult={totalResult} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr className="h-[0.15rem] bg-slate-gray" />
        <div className="mb-4">
          <h4 className="text-xl font-bold capitalize flex justify-between">
            total <span>${total}</span>
          </h4>
        </div>
        <div className="mx-auto max-w-sm flex justify-between max-xx-sm:flex-col max-xx-sm:gap-3">
          <button
            to="/products"
            className="uppercase font-bold font-montserrat py-1.5 px-8 border border-red-500 hover:bg-red-500 hover:text-white text-red-800 rounded duration-700"
            onClick={clearCart}>
            clear cart
          </button>
          <button className="uppercase font-bold font-montserrat py-1.5 px-6 bg-blue-800 hover:bg-blue-900 text-white rounded">
            make payment
          </button>
        </div>
      </footer>
    </section>
  );
};

export default CartList;
