import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { productsList } from "../constants";
import { useGlobalContext } from "../context";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [shoeSize, setShoeSize] = useState(5);
  const { id } = useParams();
  const sizeRef = useRef();
  const { cartItems, setCartItems } = useGlobalContext();

  useEffect(() => {
    const newProduct = productsList.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(newProduct);
  }, []);

  const newCart = {
    id: cartItems.length + 1,
    img: product.imgURL,
    name: product.name,
    price: parseFloat(product.price),
    size: parseFloat(shoeSize),
    quantity: parseInt(product.quantity),
  };

  /*
  useEffect(() => {
    console.log("shoeSize = " + shoeSize);
    console.log(cartItems);
  }, [shoeSize, cartItems]);
*/
  const sendToCart = (obj) => {
    const initialCart = cartItems.filter(
      (item) => item?.name !== obj.name
      // (item) => item?.name !== obj.name && item?.size !== obj.size
    );

    const alreadyInCart = cartItems.find(
      (item) => item?.name === obj.name && item?.size === obj.size
    );

    if (alreadyInCart) {
      // console.log("already in Cart");
      setCartItems([
        ...initialCart,
        { ...alreadyInCart, quantity: alreadyInCart.quantity + 1 },
      ]);
    } else {
      // console.log("not in Cart");
      setCartItems([...cartItems, newCart]);
    }
  };

  return (
    <section className="mt-24 mb-14">
      <h1 className="text-2xl sm:text-4xl font-bold text-center">
        Product <span className="text-blue-800">Details</span>
      </h1>
      <article className="max-w-[900px] justify-center items-start mx-auto max-sm:flex-col max-sm:px-4 pt-12 flex gap-8">
        <section className="basis-1/3">
          <img
            src={product.imgURL}
            alt={product.name}
            className="w-full h-full max-sm:max-w-[400px]"
          />
        </section>
        <section className="basis-1/2">
          <h3 className="text-2xl uppercase font-bold mb-4">{product.name}</h3>
          <div className="max-w-xs flex gap-3 items-center text-lg mb-2">
            <label htmlFor="" className="font-bold basis-[130px]">
              Origin:
            </label>
            <p className="text-slate-gray">{product.info?.origin}</p>
          </div>
          <div className="max-w-xs flex gap-3 items-center text-lg mb-2">
            <label htmlFor="" className="font-bold basis-[130px]">
              Company:
            </label>
            <p className="text-slate-gray">{product.info?.company}</p>
          </div>
          <div className="max-w-xs flex gap-3 items-center text-lg mb-2">
            <label htmlFor="" className="font-bold basis-[130px]">
              Sole Material:
            </label>
            <p className="text-slate-gray">{product.info?.soleMaterial}</p>
          </div>
          <div className="max-w-xs flex gap-3 items-center text-lg mb-2">
            <label htmlFor="" className="font-bold basis-[130px]">
              Closure Type:
            </label>
            <p className="text-slate-gray">{product.info?.closureType}</p>
          </div>
          <div className="max-w-xs flex gap-3 items-center text-lg mb-2">
            <label htmlFor="" className="font-bold basis-[130px]">
              Price:
            </label>
            <p className="font-bold text-blue-800">${product.price}</p>
          </div>
          <div className="max-w-xs flex gap-3 items-center text-lg mb-2">
            <label htmlFor="" className="font-bold basis-[130px]">
              Quantity:
            </label>
            <p className="text-slate-gray">{product.quantity}</p>
          </div>
          <div className="max-w-xs flex gap-3 items-center text-lg mb-2">
            <label htmlFor="shoeSize" className="font-bold basis-[130px]">
              Shoe Size:
            </label>
            <select
              id="shoeSize"
              ref={sizeRef}
              onChange={() => setShoeSize(sizeRef.current.value)}
              className="flex-1 cursor-pointer border-2 rounded focus-within:border-blue-800">
              {product.info?.sizes?.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 flex gap-4">
            <Link
              to="/products"
              className="py-1 px-8 border border-blue-800 hover:bg-blue-900 hover:text-white text-slate-gray rounded">
              Back
            </Link>
            <button
              className="py-1 px-6 bg-blue-800 hover:bg-blue-900 text-white rounded"
              onClick={() => sendToCart(newCart)}>
              To cart
            </button>
          </div>
        </section>
      </article>
    </section>
  );
};
export default ProductDetails;
