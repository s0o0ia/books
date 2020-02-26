const { Router } = require("express");
const router = Router();
const path = require("path");
const { connection } = require("../config");

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

const sql = `SELECT * FROM products`;
 
connection.query(sql, function(err, results) {
    if(err) console.log(err);
    console.log(results);
    // var el='' ;
    // results.forEach(function(item){
    //  return el += `<div class="col-md-4 grid-product-in">	
    //                 <div class=" product-grid">	
    //                   <a href="/single"><img class="img-responsive " src="images/pr.png" alt=""></a>		
    //                   <div class="shoe-in">
    //                     <h6><a href="/single">${results.name_book }</a></h6>
    //                     <p>${results.description_book}</p>
    //                     <label>$${results.price_book }</label>
    //                     <a href="/single" class="store">FIND A STORE</a>
    //                   </div>
    //                   <b class="plus-on">+</b>
    //                 </div>	
    //                 </div>`
    // })
    // document.querySelector('.product-top').innerHTML = el;
});



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

router.post("/register_user", (req, res) => {
  const sql = `INSERT INTO user_book (username, lastname, email, password) VALUES ('${req.body.username}', '${req.body.lastname}','${req.body.email}','${req.body.password}')`;
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
router.get("/add_product", (req, res) => {
  res.render("add_product");
});

module.exports = router;
