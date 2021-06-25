export const httpRequests = (baseUrl) => {
  const baseRequest = async ({ id, bodyObj, method }) => {
    const url = id ? `${baseUrl}/${id}` : baseUrl;
    const body = bodyObj ? JSON.stringify(bodyObj) : undefined;
    try {
      const response = await fetch(url, {
        method,
        body,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      return json;
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return {
    get: () => baseRequest({ method: "GET" }),
    post: (name) => baseRequest({ method: "POST", bodyObj: { name } }),
  };
};
