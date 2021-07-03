import { addUser } from "./addUser.js";
import { showUsers } from "./showUsers.js";

export const App = addUser.add(showUsers);
