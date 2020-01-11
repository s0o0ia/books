const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 1300;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const routes = require("./routes");

app.use(routes);


app.listen(PORT,() => {
    console.log("server working")
});