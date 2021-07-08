import { httpRequests } from "../requests/http.js";
import $ from "jQuery";
import { getUsers, users, usersContainer } from "./showUsers.js";
import "./addUser.css";

const http = httpRequests("http://localhost:3033/users");

const addInput = $("<input/>");

const addButton = $("<button>Add</button>").on("click", () => {
  const newUserName = addInput.val();
  // getUsers();
  // users.push(newUserName);
  // usersContainer.trigger("create");
  http.post(newUserName);
});

const addContainer = $("<div></div>")
  .append(addInput, addButton)
  .addClass("add_wrapper");

export const addUser = addContainer;
