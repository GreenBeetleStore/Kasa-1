import React from "react";

import products from "../data/data.json";
import { Link } from "react-router-dom";


const Products = () => {
  return (
    <section className="section">
      <h2>products</h2>
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.title}</h5>
              <img src={product.cover} alt={product.title} />
              <p>{product.description}</p>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
