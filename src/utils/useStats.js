import { useState, useEffect } from "react";

export default function useStats(url) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    console.log("Mounting or updating");
    async function fetchData() {
      setLoading(true);
      setError();
      console.log("Fetching Data");
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });
      if (data.error) {
        setError(data.error.message);
        setStats([]);
      } else {
        setStats(data);
      }
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return {
    stats,
    loading,
    error
  };
}
