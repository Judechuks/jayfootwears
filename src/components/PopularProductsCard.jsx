import React from "react";
import { star } from "../assets/icons";
import { generateRating } from "../constants";

const PopularProductsCard = ({ name, imgURL, price, rating }) => {
  const starArray = generateRating(rating);

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        {starArray.map((img) => (
          <img key={img} src={star} alt="rating" width={20} height={20} />
        ))}

        <p className="font-monteserrat text-xl leading-normal text-slate-gray">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 font-semibold font-palanquin text-2xl leading normal">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-2xl leading normal text-blue-800">
        {price}
      </p>
    </div>
  );
};
export default PopularProductsCard;
