import { useState, useEffect } from "react";

export default function useFetch({ url, options }) {
  const [loading, setLoading]= useState(true);
  const [result, setResult] = useState(undefined);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        console.log(url);
        setResult(await res.json());
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [url, options]);
  return { loading, result, error };
}
