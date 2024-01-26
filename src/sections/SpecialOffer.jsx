import React from "react";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-custom-xl:flex-col-reverse gap-10 max-container">
      {/* LEFT COLUMN */}
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      {/* RIGHT COLUMN */}
      <div className="flex-1 flex flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize max-sm:text-2xl font-semibold lg:max-w-lg">
          <span className="text-blue-800">Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Link to="/products">
            <Button label="Shop now" iconURL={arrowRight} />
          </Link>
          <Button
            label="Learn more"
            bgColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffers;
