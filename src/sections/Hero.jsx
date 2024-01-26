import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex custom-xl:flex-row flex-col gap-10 justify-center min-h-screen max-container">
      {/* LEFT SIDE */}
      <div className="relative custom-xl:w-[48%] flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-blue-800">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-[5rem] max-sm:text-4xl  max-sm:leading-[82px] font-semibold">
          <span className="block custom-xl:bg-white custom-xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <span className="text-blue-800 inline-block mt-3">Quality </span>{" "}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Link to="/products">
          <Button label="Shop now" iconURL={arrowRight} />
        </Link>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-8 md:gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-monteserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="relative flex-1 flex justify-center items-center custom-xl:min-h-screen max-xl:pt-24 max-xl:pb-40  bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="custom-xl:w-full w-2/5 relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Hero;
