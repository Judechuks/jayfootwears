import React from "react";
import Layout from "./Layout";
import PageSections from "./PageSections";
import AppProvider from "./context";
import Contact from "./pages/Contact";
import ProductList from "./pages/ProductList";
import CartList from "./pages/CartList";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Missing from "./pages/Missing";

const App = () => (
  <main className="relative">
    <AppProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageSections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="details/:id" element={<ProductDetails />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </AppProvider>
  </main>
);

export default App;
