import { useEffect, useState } from "react";

export default function NotFound() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetchCat();
  }, []);

  async function fetchCat() {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const obj = await res.json();
    setUrl(obj[0].url);
  }

  return (
    <div>
      <h2>Page not found</h2>
      <img
        // src="https://images-na.ssl-images-amazon.com/images/G/01/error/180._TTD_.jpg"
        // src="https://m.media-amazon.com/images/G/02/error/9.-TTD-c.jpgЭ
        src={url}
        alt="cat"
      />
    </div>
  );
}
