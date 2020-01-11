const { Router } = require("express");
const router = Router();
const path = require("path");

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname,"../web", "index.html"));
// });

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/product", (req, res) => {
  res.render("product");
});
router.get("/account", (req, res) => {
  res.render("account");
});
router.get("/contact", (req, res) => {
  res.render("contact");
});
router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/single", (req, res) => {
  res.render("single");
});

module.exports = router;
