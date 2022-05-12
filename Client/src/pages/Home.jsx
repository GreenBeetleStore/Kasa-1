import React from "react";
import { Link } from "react-router-dom";

import image from "../design/banner.png";
import Banner from "../components/Banner";
import products from "../__mocks__/data.json";
import marketdata from "../__mocks__/aboutData";

const slogan = marketdata.slogan;

const Products = () => {
  return (
    <div className="home">
      <div className="home__banner">
        <Banner image={image} text={slogan} />
      </div>
      <section className="section">
        <h2>Home</h2>
        <div className="products">
          {products.map((product) => {
            return (
              <article key={product.id}>
                <h6>{product.title}</h6>

                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.cover}
                    alt={product.title}
                    className="nav__img"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Products;
