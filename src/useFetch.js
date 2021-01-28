import { useState, useEffect } from "react";
import paginate from "./utils";

// This is a custom Hook. Make sure to use use<NAME> in custom hook
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};
