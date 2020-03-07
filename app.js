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



app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "layouts",
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
app.use(express.static(__dirname + "/web"));

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
app.get("/account", (req, res) => {
  res.render("account");
});
app.get("/single", (req, res) => {
  res.render("single");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/product", (req, res) => {
  res.render("product");
});
app.get("/edit-offer", (req, res) => {
  res.render("editOffer");
});
app.get("/articles", (req, res) => {
  res.render("articles");
});
app.get("/add-offer", (req, res) => {
  res.render("addOffer");
});
app.get("/admin", (req, res) => {
  res.render("admin");
});
app.get("/logout", (req, res) => {
  res.render("logout");
});


app.listen(PORT,() => {
    console.log("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ server working*:･ﾟ✧")
});