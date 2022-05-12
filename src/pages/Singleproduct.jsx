import { Link, useParams } from "react-router-dom";
import products from "../__mocks__/data.json";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { title, cover } = product;

  return (
    <section className="section product">
      <h5>{title}</h5>
      <img src={cover} alt={title} />

      <Link to="/">back to Home</Link>
    </section>
  );
};

export default SingleProduct;
