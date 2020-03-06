const { Router } = require("express");
const { Email } = require("../email");
const router = Router();
let data = [
  {
    name: "I am",
    email: "nazargalaiko@gmail.com"
  },
  {
    name: "Настя",
    email: "an.marianchuk@gmail.com"
  },
  {
    name: "Софія",
    email: "sofishandala13@gmail.com"
  },
  {
    name: "Роман",
    email: "eljfenium@gmail.com"
  },
  {
    name: "Кирил",
    email: "ruppo.k@gmail.com"
  },
  {
    name: "Наркоману",
    email: "sasha.0965671176@gmail.com"
  },
  {
    name: "Шлангу",
    email: "swimmervik@gmail.com"
  }
];

router.post("/contact", (req, res) => {
  data.forEach(item => {
    Email.news({
      name: item.name,
      email: item.email,
      news: req.body.message
    });
  });

  res.redirect("/contact");
});



module.exports = router;
