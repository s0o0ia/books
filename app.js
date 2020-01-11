const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 1300;
const home = require("./routes");
const exphbs = require("express-handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.static(__dirname + "/web"));


app.use(home);


app.listen(PORT,() => {
    console.log("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ server working*:･ﾟ✧")
});