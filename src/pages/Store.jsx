import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/data";

const Store = () => {
  return (
    <div className='font-mons m-2 mt-10 flex flex-wrap gap-7 justify-center mb-12'>
      {products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            item={item.item}
            price={item.price}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default Store;
