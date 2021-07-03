import _ from "lodash";

const address = {
  street: "lip",
  home: 7,
};

const addressCopy = address;
console.log("🚀 ~ file: test.js ~ line 7 ~ addressCopy", addressCopy);

const user = {
  name: "Jhon",
  address,
};

const user2 = user;

const user3 = { ...user };
console.log("🚀 ~ file: test.js ~ line 17 ~ user3", user3);

const session = {
  token: "uid",
  user,
};

const session2 = { ...session };
console.log("🚀 ~ file: test.js ~ line 25 ~ session2", session2);

user2.address.home = 9;

console.log("🚀 ~ file: test.js ~ line 25 ~ session2", session2);

const session4 = _.cloneDeep(session);
console.log("🚀 ~ file: test.js ~ line 34 ~ session4", session4);
user2.address.home = 11;
console.log("🚀 ~ file: test.js ~ line 34 ~ session4", session4);
