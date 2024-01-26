import React, { useState, useEffect } from "react";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import Logo from "./Logo";
import { CartIcon } from "../assets/icons/icons";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [height, setHeight] = useState(window.scrollY);
  const { navigate, totalResult } = useGlobalContext();

  const checkHeight = () => {
    setHeight(window.scrollY);
  };

  //constantly checking the window's height as the height changes
  useEffect(() => {
    window.addEventListener("scroll", checkHeight);
    return () => {
      window.removeEventListener("scroll", checkHeight);
    };
  }, []);

  return (
    <header className="padding-x absolute z-20 w-full items-center max-container">
      <nav
        className={`padding-x flex justify-between items-center fixed top-0 left-0 right-0 h-16 max-lg:bg-white ${
          height > 45 && "lg:bg-white shadow-md"
        }`}>
        <Link to="/">
          <Logo />
        </Link>
        <ul
          className={`flex-1 flex justify-center items-center gap-16 max-lg:fixed max-lg:top-16  max-lg:left-0 max-lg:right-0 max-lg:flex-col max-lg:bg-blue-900 max-lg:py-10 transition-transform duration-700 ${
            isOpen && "max-lg:-translate-y-[125%]"
          }`}>
          {navLinks.map((link) => (
            <li
              key={link.label}
              onClick={() => {
                navigate(link.href);
                setIsOpen(!isOpen);
              }}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray">
                {link.label}
              </a>
            </li>
          ))}
          <li onClick={() => setIsOpen(!isOpen)}>
            <Link
              to="/contact"
              className="font-montserrat leading-normal text-lg text-slate-gray">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex gap-7">
          <Link to="/cart" className="justify-self-end relative">
            <CartIcon />
            <div className="absolute -top-3 -right-3 font-montserrat font-semibold bg-red-600 text-white w-6 h-6 rounded-full grid place-items-center">
              {totalResult.quantity}
            </div>
          </Link>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}>
            <img src={hamburger} alt="hamburger" width={25} height={25} />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
