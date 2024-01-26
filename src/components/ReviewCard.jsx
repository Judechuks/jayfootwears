import React from "react";
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="object-contain rounded-full w-24 h-24"
      />
      <p className="mt-4 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-2 flex justify-center items-center gap-2.5">
        <img src={star} alt="rating" className="object-cotain w-4 h-4" />
        <p className="font-montserrat text-lg text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-xl text-center font-semibold">
        {customerName}
      </h3>
    </div>
  );
};
export default ReviewCard;
