import $ from "jQuery";
import { httpRequests } from "../requests/http.js";

export const users = ["one", "two", "five"];

const http = httpRequests("http://localhost:3033/users");

export const getUsers = async () => {
  const users = await http.get();
  console.log("🚀 ~ file: showUsers.js ~ line 13 ~ getUsers ~ users", users);
};
getUsers();
export const usersContainer = $("<ul></ul>")
  .append(users.map((user) => $(`<li>${user}</li>`)))
  .addClass("users_wrapper");

export const showUsers = usersContainer;
