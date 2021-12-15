import { useCallback } from "react";

const useFetch = () => {
  const sendRequest = useCallback(async (url, fetchConfig, applyData) => {
    try {
      const response = await fetch(url, {
        method: fetchConfig.method ? fetchConfig.method : "GET",
        headers: fetchConfig.headers ? fetchConfig.headers : {},
        body: fetchConfig.body
          ? JSON.stringify(
              fetchConfig.body,
              (fetchConfig.body["token"] = fetchConfig.headers.Authorization)
            )
          : null,
      });

      const data = await response.json();
      applyData(data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return {
    sendRequest,
  };
};

export default useFetch;
