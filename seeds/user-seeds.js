const User = require("../models/User");

const userData = [
  {
    username: "user1",
    email: "user1@gmail.com",
    password: "password",
    bio: "Exercitation sunt sit ipsum fugiat elit sit. Adipisicing ut exercitation reprehenderit Lorem incididunt cupidatat ipsum. Minim nisi eu velit cillum amet quis aliquip deserunt voluptate deserunt ut. Deserunt ex aute pariatur cillum occaecat pariatur commodo laborum fugiat ut eiusmod exercitation esse consectetur. Non minim Lorem elit enim et aliqua culpa cupidatat exercitation cillum quis Lorem. Do velit quis nisi voluptate sunt voluptate consectetur.",
  },
  {
    username: "user2",
    email: "user2@gmail.com",
    password: "password",
    bio: "Laboris amet commodo est dolore dolor officia ad eiusmod reprehenderit veniam aute minim ut. Ullamco officia reprehenderit est eu qui. Voluptate anim culpa velit adipisicing enim ipsum qui enim ea duis. Est esse minim quis incididunt dolor quis voluptate nisi culpa excepteur aliquip. Minim laborum irure proident id nulla proident ullamco excepteur dolor nostrud. Irure adipisicing dolor consectetur deserunt.",
  },
  {
    username: "user3",
    email: "user3@gmail.com",
    password: "password",
    bio: "Commodo pariatur officia et magna aliqua ut tempor consequat. Tempor elit deserunt ea pariatur. Duis cupidatat in non labore amet tempor reprehenderit et nulla laboris cupidatat pariatur mollit ad. Quis consectetur ad nisi labore quis culpa deserunt consequat tempor excepteur aliqua anim. Magna et commodo ipsum enim sunt consequat. Cupidatat ipsum quis eu dolore cillum officia et sint exercitation mollit sint non non.",
  },
  {
    username: "user4",
    email: "user4@gmail.com",
    password: "password",
    bio: "Ut dolor pariatur aliqua consequat in culpa anim pariatur voluptate adipisicing pariatur laborum cupidatat. Do do eiusmod ea voluptate reprehenderit officia. Id ipsum esse ipsum non elit ut labore ipsum magna in. Do aliqua duis sit dolor est reprehenderit sunt adipisicing labore laborum ipsum qui velit. Nisi aliqua reprehenderit aliquip ut velit consequat exercitation sint id labore irure laborum. Mollit proident incididunt ad in dolore sunt officia dolore mollit esse anim mollit magna.",
  },
  {
    username: "user5",
    email: "user5@gmail.com",
    password: "password",
    bio: "Laborum ut ad labore eu nisi cupidatat fugiat sunt duis. Sint proident nisi minim duis labore voluptate nisi amet ullamco. Ullamco qui fugiat laborum excepteur incididunt minim magna. Est duis dolor cupidatat occaecat consectetur laboris commodo eiusmod mollit Lorem voluptate irure. Deserunt ad commodo tempor non sunt exercitation.",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
