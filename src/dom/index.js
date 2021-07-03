import { httpRequests } from "../requests/http";
import * as $ from "jQuery";

export const connectToDom = () => {
  const http = httpRequests("http://localhost:3033/users");
  $("#add").on("click", () =>
    http.post(document.getElementById("input").value)
  );
};
