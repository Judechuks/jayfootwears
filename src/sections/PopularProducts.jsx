import React from "react";
import PopularProductsCard from "../components/PopularProductsCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12 sm:py-24 pt-20 pb-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold max-sm:text-3xl ">
          Our <span className="text-blue-800">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      <div className="mt-16 grid justify-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};
export default PopularProducts;
