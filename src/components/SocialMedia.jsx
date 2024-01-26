import React from "react";
import { socialMedia } from "../constants";

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-5 mt-6">
      {socialMedia.map((icon) => (
        <a href={icon.link} key={icon.alt}>
          <div className="flex justify-center items-center w-9 h-9 bg-blue-400 rounded-full transition-transform hover:-translate-y-1 duration-500">
            <img
              src={icon.src}
              alt={icon.alt}
              width={24}
              height={24}
              className=""
            />
          </div>
        </a>
      ))}
    </div>
  );
};
export default SocialMedia;
