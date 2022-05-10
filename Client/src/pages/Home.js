import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      HOME PAGE
      <Link to="/about">ABOUT</Link>
      <Link to="/about">PRODUCT</Link>
    </div>
  );
}

export default Home;
