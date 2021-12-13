const useFetch = (fetchConfig, applyData) => {
  const sendRequest = async () => {
    try {
      const response = await fetch(fetchConfig.url, {
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
  };
  return {
    sendRequest,
  };
};

export default useFetch;
