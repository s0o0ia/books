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

let data = [
  {
    name: "Софія",
    email: "sofishandala13@gmail.com"
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
