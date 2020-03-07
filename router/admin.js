const { Router } = require("express");
const { Email } = require("../email");
const router = Router();
let data = [
  {
    name: "I am",
    email: "sofishandala13@gmail.com"
  }
];

router.post("/admin", (req, res) => {
  data.forEach(item => {
    Email.news({
      name: item.name,
      email: item.email,
      news: req.body.news
    });
  });

  res.redirect("/admin");
});



module.exports = router;
