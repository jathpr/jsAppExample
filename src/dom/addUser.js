import { httpRequests } from "../requests/http.js";
import $ from "jQuery";
import { users, usersContainer } from "./showUsers.js";

const http = httpRequests("http://localhost:3033/users");

const addInput = $("<input/>");

const addButton = $("<button>Add</button>").on("click", () => {
  const newUserName = addInput.val();
  users.push(newUserName);
  usersContainer.trigger("create");
  http.post(newUserName);
});

const addContainer = $("<div></div>")
  .append(addInput, addButton)
  .addClass("add_wrapper");

export const addUser = addContainer;
