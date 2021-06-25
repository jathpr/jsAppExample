import { httpRequests } from "../requests/http";

export const connectToDom = () => {
  const http = httpRequests("http://localhost:3033/users");
  document.getElementById("add").onclick = () =>
    http.post(document.getElementById("input").value);
};
