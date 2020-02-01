const { Router } = require("express");
const router = Router();
const path = require("path");
const { connection } = require("../config")

// router.get("/", (req, res) => {
//   // const sql = `SELECT * FROM users`;
//   // connection
//   //     .query(sql)
//   //     .then(result => {
//   //         console.log(result[0]);
//   //     })
//   //     .catch(err => {
//   //         console.log(err);
//   //     });

//    const sql = `INSERT INTO users (username, lastname, email) VALUES ('Саша', 'Борщевська','bsasha945@.com')`;
//       connection
//           .query(sql)
//           .then(result => {
//               console.log(result[0]);
//           })
//           .catch(err => {
//               console.log(err);
//           });  
//   });       

router.post("/qwerty", (req, res) => {
   const sql = `INSERT INTO users (username, lastname, email) VALUES ('${req.body.username}', '${req.body.lastname}','${req.body.email}')`;
      connection
          .query(sql)
          .then(result => {
              console.log(result);
              res.redirect("/");
          })
          .catch(err => {
              console.log(err);
          });  
  });  

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
