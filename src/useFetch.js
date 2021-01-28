import { useState, useEffect } from "react";
import paginate from "./utils";

// This is a custom Hook. Make sure to use use<NAME> in custom hook
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const updatedArray = paginate(data); // Sending data to the paginate function. Idea is to pipe our data through the paginate
    setData(updatedArray);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, data };
};
