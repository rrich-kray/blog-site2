const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const session = require("express-session");
const path = require("path");

const sequelize = require("./config/connection");
const User = require("./models/User");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  // this code sets up an express.js session and connects the session to the database
  secret: process.env.SECRET,
  cookie: { maxAge: 600000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// console log the entire function every step of the way; what's difference between thew first amd second login attempts. Check session, wghat is being sent int the dashboard view.

app.use(session(sess));

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers"));

const PORT = process.env.PORT || 3001;

User.sync();

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
