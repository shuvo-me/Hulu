import React, { useEffect, useState } from "react";

const useFetch = (url, method) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  console.log({ check: process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN });

  const options = {
    method: method ?? "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
  };

  const fetchApi = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, options);
      const resJson = await res.json();
      setData(resJson.results);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [url]);
  return { loading, data, error };
};

export default useFetch;
