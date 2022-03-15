const User = require("../models/User");

const userData = [
  {
    id: 1,
    username: "user1",
    email: "user1@gmail.com",
    password: "password",
  },
  {
    id: 2,
    username: "user2",
    email: "user2@gmail.com",
    password: "password",
  },
  {
    id: 3,
    username: "user3",
    email: "user3@gmail.com",
    password: "password",
  },
  {
    id: 4,
    username: "user4",
    email: "user4@gmail.com",
    password: "password",
  },
  {
    id: 5,
    username: "user5",
    email: "user5@gmail.com",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
