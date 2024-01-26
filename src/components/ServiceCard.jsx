import React from "react";

const ServiceCard = ({ label, imgURL, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full min-w-[240px] rounded-[20px] shadow-3xl px-8 py-16">
      <div className="w-11 h-11 rounded-full bg-blue-800 flex justify-center items-center">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="font-bold mt-5 font-palanquin text-xl leading-normal">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};
export default ServiceCard;
