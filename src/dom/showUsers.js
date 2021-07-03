import $ from "jQuery";

export const users = ["one", "two", "five"];

export const usersContainer = $("<ul></ul>")
  .append(users.map((user) => $(`<li>${user}</li>`)))
  .addClass("users_wrapper");

export const showUsers = usersContainer;
