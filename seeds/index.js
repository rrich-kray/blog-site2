const sequelize = require("../config/connection");
const seedUsers = require("./user-seeds");
const seedPosts = require("./post-seeds");
const seedComments = require("./comment-seeds");

const seedAll = () => {
  sequelize.sync({ force: true });
  console.log(`----------DATABASE SYNCED----------`);
  seedUsers();
  console.log(`----------USERS SEEDED----------`);
  seedPosts();
  console.log(`----------POSTS SEEDED----------`);
  seedComments();
  console.log(`----------COMMENTS SEEDED----------`);

  process.exit(0);
};

seedAll();
