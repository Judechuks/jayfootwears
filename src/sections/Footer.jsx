import React from "react";
import { copyrightSign } from "../assets/icons";
import Logo from "../components/Logo";
import SocialMedia from "../components/SocialMedia";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        {/* FIRST ROW */}
        <div className="flex flex-col items-start">
          <a href="/">
            <Logo />
          </a>
          <p className="mt-4 text-base leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at our nearest store. Find your
            perfect size in store. Get Rewards.
          </p>
          <SocialMedia />
        </div>
        {/* SECOND ROW */}
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title} className="">
              <h4 className="font-montserrat font-semibold text-xl leading-normal mb-3">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="hover:text-slate-gray">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 max-sm:flex-col max-sm:items-center max-sm:gap-2">
        <div className="flex-1 flex justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <a href="/" className="font-montserrat hover:text-slate-gray">
          Terms and conditions
        </a>
      </div>
    </footer>
  );
};
export default Footer;
