"use client";
import ProductDiv from "@/components/ProductDiv";
import ProductFilter from "@/components/ProductFilter";
import React, { useEffect, useState } from "react";

const HomeProduct = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data?.products);
      });
  }, []);
  return (
    <section className="mt-32">
      <div>
        <ProductFilter></ProductFilter>

        <div className="mt-12">
          <h2 className="font-bold text-xl md:text-3xl">Product For You !</h2>
          <div className="mt-8 gap-6 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 ">
            {products && products?.map(product => <ProductDiv key={product.id} product={product}></ProductDiv>) }
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProduct;
