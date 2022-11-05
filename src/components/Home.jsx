import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Home = () => {
  const { data: products } = useLoaderData();

  console.log(products);

  return (
    <div className="grid lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Home;
