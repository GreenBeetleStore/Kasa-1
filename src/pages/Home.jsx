import React from "react";
import { Link } from "react-router-dom";

import image from "../design/banner.png";
import Banner from "../components/Banner";
import products from "../__mocks__/data.json";
import marketdata from "../__mocks__/aboutData";
import Herobanner from "../components/Herobanner";

const slogan = marketdata.slogan;

const Products = () => {
  return (
    <div className="home">
      <section className="section">
        <div className="home__banner">
          <Herobanner />
          <Banner image={image} text={slogan} />
        </div>{" "}
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
