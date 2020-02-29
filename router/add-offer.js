const { Router } = require("express");
const router = Router();
const fileUpload = require("express-fileupload");
const { Offer } = require("../database");
router.use(
  fileUpload({
    limits: { filesize: 50 * 1024 * 1024 }
  })
);

router.get("/add-offer", (req, res) => {
  res.render("addOffer");
});

router.post("/add-offer", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    req.session.errorMessage0 = "Photo not uploaded";
    return res.redirect("/add-offer");
  }

  let sampleFile = req.files.image;
  let imgName = req.files.image.name.trim();
  let newName = `${Date.now()}-${imgName}`;
  let path = `public/offers/${newName}`;

  sampleFile.mv(path, function(err) {
    if (err) {
      req.session.errorMessage0 = "Image not saved";
      console.log("Image not saved!!!!");
      return res.redirect("/add-offer");
    } else {
      console.log("Image saved!!!!");
      let obj = {
        image: path,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description
      };
      Offer.add(obj).then(item => {
        console.log(item);
        res.redirect("/add-offer");
      });
    }
  });
});

module.exports = router;