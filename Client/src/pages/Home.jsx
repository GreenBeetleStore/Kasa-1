import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      HOME PAGE
      <div>
        <Link to="/about">ABOUT</Link>
      </div>
      <div>
        <Link to="/products">PRODUCTS</Link>
      </div>
    </div>
  );
}

export default Home;
