import React from "react";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center font-bold max-sm:text-2xl text-4xl">
        What Our <span className="text-blue-800">Customers </span> Say?
      </h3>
      <p className="info-text m-auto mt-3 text-center max-w-lg">
        Hear the genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-16 flex-1 flex justify-evenly items-center max-md:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
};
export default CustomerReviews;
