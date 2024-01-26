import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <section className="mt-28 mb-16 mx-auto px-4 max-w-sm">
      <h1 className="mb-6 text-3xl text-center font-bold uppercase max-xx-sm:text-xl">
        Page <span className="text-blue-800">not found</span>
      </h1>
      <article className="flex justify-between max-xx-sm:flex-col max-xx-sm:gap-8 gap-5">
        <div className="basis-1/2 text-8xl text-center font-bold">404</div>
        <div className="basis-1/2 border-l-2 border-blue-800 pl-4">
          <h1 className="font-semibold mb-2 uppercase text-xl text-blue-800">
            sorry!
          </h1>
          <p className="text-slate-gray mb-3">
            The page you're looking for was not found
          </p>
          <Link to="/">
            <button className="uppercase font-bold font-montserrat py-1.5 px-6 bg-blue-800 hover:bg-blue-900 text-white rounded">
              Go Back
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
};
export default Missing;
