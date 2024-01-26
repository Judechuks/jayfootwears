import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { products, productsList } from "../constants";
import paginate from "../utils";

const ProductList = () => {
  const [page, setPage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState([]);

  const paginatedList = paginate(productsList);

  useEffect(() => setProductsPerPage(paginatedList[page]), [page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > paginatedList.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = paginatedList.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <section className="padding max-container max-sm:mt-12 sm:py-24 pt-20 pb-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold max-sm:text-3xl text-center">
          Our <span className="text-blue-800">Products</span>
        </h2>
        <p className="lg:max-w-lg mt-2 mx-auto font-montserrat text-slate-gray text-center">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>
      {/* <div className="mt-16 flex justify-center gap-6 flex-wrap"> */}
      <div className="mt-16 grid justify-center items-center lg:grid-cols-4 md:grid-cols-3 x-sm:grid-cols-2 grid-cols-1 x-sm:gap-6 gap-14">
        {productsPerPage.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
      {/* button container  */}
      <div className="mt-14 btn-container">
        <button className="prev-btn" onClick={prevPage}>
          prev
        </button>
        {paginatedList.map((item, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${index === page ? "active-btn" : null}`}
              onClick={() => handlePage(index)}>
              {index + 1}
            </button>
          );
        })}
        <button className="next-btn" onClick={nextPage}>
          next
        </button>
      </div>
    </section>
  );
};
export default ProductList;
