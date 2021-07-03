import { httpRequests } from "../requests/http.js";
import $ from "jQuery";

const http = httpRequests("http://localhost:3033/users");

const addInput = $("<input/>");

const addButton = $("<button>Add</button>").on("click", () =>
  http.post(addInput.val())
);

const addContainer = $("<div></div>")
  .append(addInput, addButton)
  .addClass("add_wrapper");

export const addUser = addContainer;
