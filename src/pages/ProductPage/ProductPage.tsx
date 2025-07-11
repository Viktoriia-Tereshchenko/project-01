import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../types";
import styles from "./ProductPage.module.css";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  async function fetchProduct(id: string | undefined) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const obj = await res.json();
    setProduct(obj);
  }

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  //   return <div>Product ID: {product?.title}</div>;

  return (
    <div className={styles.container}>
      <h2>Product Page</h2>
      <h3>{product?.title}</h3>
      <p>{product?.description}</p>
      <img src={product?.images[0]} alt="product" />
      <p>{product?.price} $</p>
    </div>
  );
}
