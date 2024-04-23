import axios from "axios";
import { useEffect, useState } from "react";

export function DataHandler() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    //gets  10 products from fakestoreapi
    const loadProductData = async () => {
      const productInfo = await axios.get(
        "https://fakestoreapi.com/products?limit=10",
      );

      setProductData(productInfo.data);
    };

    //runs the loadProductData function so data is available on mount
    loadProductData();
  }, []);

  console.log(productData);
  return productData;
}
