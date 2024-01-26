import React from "react";

const Button = ({
  label,
  iconURL,
  bgColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-3 font-montserrat text-[0.9rem] leading-none border hover:bg-blue-900 transition duration-500 rounded-full ${
        bgColor ? bgColor + " hover:text-white" : "bg-blue-800"
      } ${textColor ? textColor : "text-white"} ${
        borderColor ? borderColor : "border-blue-800"
      } ${fullWidth && "w-full"}`}>
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};
export default Button;
