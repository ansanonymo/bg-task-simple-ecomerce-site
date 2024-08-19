import HighLight from "./HighLight";
import hammerImage from "./../../assets/hammer.png";
import { FiPlusCircle } from "react-icons/fi";
import { getAllProducts } from "./../../../lib";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function ProductList() {
  const products = getAllProducts();
  return (
    <main className="container mx-auto px-2 py-2">
      <HighLight />
      <div className="grid s1040:grid-cols-6 gap-2 my-4 sm:grid-cols-2 md:grid-cols-3">
        {products?.map((product) => {
          return <Product key={product?.id} product={product} />;
        })}
      </div>
    </main>
  );
}

function Product({ product: { name, image, price } }) {
  const [heart, setHeart] = useState(true);
  return (
    <div
      className="font-semibold bg-[#fafafa] rounded-lg group shadow-sm"
      onClick={() => setHeart((h) => !h)}
    >
      <div className="p-14 s1040:p-10 group-hover:bg-primary rounded-t-lg relative">
        <img
          src={image ? image : hammerImage}
          alt="product-image"
          className="w-full h-full group-hover:scale-110 group-hover:rotate-[15deg]"
        />
        {heart ? (
          <FaRegHeart className=" absolute text-lg top-5 right-5 text-gray-700 cursor-pointer" />
        ) : (
          <FaHeart className=" absolute text-lg top-5 right-5 text-rose-600 cursor-pointer" />
        )}
      </div>

      <div className="px-3 py-3">
        <h3 className="text-gray-700 font-semibold">{name}</h3>
        <p className="flex justify-between">
          <span className="text-siteblack">${price}</span>
          <FiPlusCircle className="text-primary text-xl font-bold" />
        </p>
      </div>
    </div>
  );
}

export default ProductList;
