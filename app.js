const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 1300;
const hbs = require("hbs");
const session = require("express-session");

// const variable = require('./middlware');
// app.use(variable);


app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "/views/layouts",
    defaultLayout: "layout",
    extname: "hbs"
  })
);
app.use(
  session({
    secret: "sombrero",
    resave: false,
    saveUninitialized: false
  })
);

const adminPages = require("./router/admin");
const auth = require("./router/auth");
const addOffer = require("./router/add-offer");
const main = require("./router/main");
app.use(adminPages);
app.use(main);
app.use(auth);
app.use(addOffer);


app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT,() => {
    console.log("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ server working*:･ﾟ✧")
});