const { Router } = require("express");
const router = Router();
const { eemail } = require("../email");
const multer = require("multer");

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

router.use(multer({ storage: storageConfig }).single("filedata"));

router.post("/add_product", (req, res) => {
  console.log(req.body);
  let filedata = req.file;
  console.log(filedata);

  if (!filedata) res.send("Ошибка при загрузке файла");
  else {
    res.redirect("/add_product");
  }
});

router.get("/add_product", (req, res) => {
 if( req.session.isAuth == true) {
   res.render("add_product")
   isAuth = req.session.isAuth;
 }
 else{
   res.redirect('/account')
 }
});


let data = [
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
  }
];

router.post("/contact", (req, res) => {
  data.forEach(item => {
    eemail.news({
      name: item.name,
      email: item.email,
      news: req.body.message
    });
  });

  res.redirect("/contact");
});

module.exports = router;
