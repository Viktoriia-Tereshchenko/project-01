import { useEffect, useState } from "react";
import type { Product } from "../../types";
import { Link } from "react-router-dom";

export const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const productsRes = await res.json();
    setProducts(productsRes);
  }

  return (
    <div className="flex flex-col items-center justify-center mt-2 gap-4">
      <h2>Products List</h2>
      <ul className="flex flex-wrap gap-3 mx-2">
        {products.map((p) => (
          <li
            key={"product" + p.id}
            className="bg-[#e8e4e4] border-none rounded-lg p-4 flex flex-col justify-start items-center text-center shadow-md w-72 h-72"
          >
            <h3 className="font-bold">{p.title}</h3>
            <img
              src={p.images[0]}
              alt="product"
              className="max-w-[150px] max-h-[150px] rounded-lg "
            />
            <span>{p.price} $</span>
            <Link to={`/products/${p.id}`} className="text-[#682e11]">
              To product
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
