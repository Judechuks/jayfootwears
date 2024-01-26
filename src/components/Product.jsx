import React from "react";
import { star } from "../assets/icons";
import { Link } from "react-router-dom";

const Product = ({ id, name, imgURL, price, rating }) => {
  return (
    <div className="flex-1 flex flex-col max-w-[240px] mx-auto">
      <Link to={`/details/${id}`}>
        <div className="bg-card bg-no-repeat bg-cover w-full h-[200px] rounded-md overflow-hidden">
          <img src={imgURL} alt={name} className="block w-[300px]" />
        </div>
      </Link>
      <h3 className="font-semibold font-palanquin text-xl mt-2 leading normal">
        {name}
      </h3>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img src={star} alt="rating" width={15} height={15} />
          <p className="font-monteserrat text-lg leading-normal text-slate-gray">
            ({rating})
          </p>
        </div>
        <p className="font-semibold font-montserrat text-lg leading normal text-blue-800">
          ${price}
        </p>
      </div>
      <div className="mt-2 flex justify-beteen gap-2">
        <Link
          to={`/details/${id}`}
          className="py-1 px-8 border border-blue-800 hover:bg-blue-900 hover:text-white text-slate-gray rounded">
          Info
        </Link>
      </div>
    </div>
  );
};
export default Product;
