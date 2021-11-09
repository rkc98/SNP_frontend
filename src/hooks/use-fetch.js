import { useState, useEffect, useCallback } from "react";

// const { isLoading, error, response } = useFetch({
//   url: "http://localhost:8080/api/users",
// });

const useFetch = (requestConfig) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState();
  console.log(requestConfig);

  const apicall = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      setResponse(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    apicall();
  }, [apicall]);
  return {
    isLoading,
    error,
    response,
  };
};

export default useFetch;
