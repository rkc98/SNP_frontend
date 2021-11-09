import { useState, useEffect } from "react";
import axios from "axios";

//axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

//useAxios
// const { response, loading, error } = useAxios({
//   // method: "post",
//   url: "http://localhost:8080/api/users",
//   // headers: JSON.stringify({ accept: "*/*" }),
//   // body: JSON.stringify({
//   //   userId: 1,
//   //   id: 19392,
//   //   title: "title",
//   //   body: "Sample text",
//   // }),

// });

const useAxios = ({ url, method = "get", body = null, headers = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;
