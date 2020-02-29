const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 1300;
const home = require("./routes");
const exphbs = require("express-handlebars");
const session = require("express-session");
const variable = require("./middlware");
app.use(variable);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
});
app.use(
    session({
      secret: "sombrero",
      resave: false,
      saveUninitialized: false
    })
  );
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.static(__dirname + "/web"));




const adminPages = require("./router/admin")
app.use(adminPages);
app.use(home);


app.listen(PORT,() => {
    console.log("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ server working*:･ﾟ✧")
});