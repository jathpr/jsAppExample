import $ from "jQuery";

const users = ["one", "two", "five"];

const usersContainer = $("<ul></ul>")
  .append(users.map((user) => $(`<li>${user}</li>`)))
  .addClass("users_wrapper");

export const showUsers = usersContainer;
