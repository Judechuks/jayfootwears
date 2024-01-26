import React from "react";
import Nav from "./components/Nav";
import { Footer } from "./sections";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <section className="bg-black padding-x padding-t pb-8 text-white">
        <Footer />
      </section>
    </>
  );
};
export default Layout;
