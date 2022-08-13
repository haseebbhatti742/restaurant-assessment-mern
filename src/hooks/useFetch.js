import React, { useEffect, useState } from "react";
import useSWR from "swr";

function useFetch(url) {
  const [loading, setLoading] = useState(true);

  const { data, error } = useSWR(url, (...args) =>
    fetch(...args).then((res) => res.json())
  );

  useEffect(() => {
    if (!!data) setLoading(false);
  }, [data]);

  return { data, error, loading };
}

export default useFetch;
