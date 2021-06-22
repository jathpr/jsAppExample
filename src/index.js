async function showUsers() {
  const users = await getUsers();

  const usersNames = users.map((user) => user.name + "<br> ");
  document.getElementById("users").innerHTML = usersNames;
  console.dir(users);
}

const URL = "http://localhost:3033/users";

async function getUsers() {
  const usersResp = await fetch(URL);
  const users = await usersResp.json();
  return users;
}

const sendData = async (name) => {
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({ name }),
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

const updateData = async (id, name) => {
  const url = `${URL}/${id}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify({ name }),
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

const deleteData = async (id) => {
  const url = `${URL}/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    const json = await response.json();

    return json;
  } catch (error) {
    console.error("Ошибка:", error);
  }
};

document.getElementById("show").onclick = showUsers;
document.getElementById("add").onclick = () => sendData("X");
document.getElementById("delete").onclick = () => {
  for (let i = 8; i < 20; i++) {
    deleteData(i);
  }
};
document.getElementById("update").onclick = () => updateData(8, "NewName");
