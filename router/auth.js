const { Router } = require("express");
const router = Router();
const users = [
  {
    email: "sum_vika@gmail.com",
    password: "qwerty"
  },

]



router.post("/account", (req, res) => {
  let client = users.filter(item => {
    if (item.login == req.body.login) {
      return item;
    }
  });
  //if exist
  if (client.length > 0) {
    console.log("чувак існує");
    if (client[0].pass == req.body.pass) {
      console.log("авторизовано");
      req.session.isAuth = true;
      req.session.user = {
        username: client[0].login
      };
      console.log("----------------------", req.session);
      res.redirect("/add_product");
    } else {
      console.log("не авторизовано");
      req.session.isAuth = false;
      res.redirect('/account')
    }
  } //
  //if not exist
  else {
    console.log("чувака НЕ існує");
    res.redirect("/account");
  }

  // console.log(users)
});

router.get("/add_product", (req,res)=>{
  res.session.isAuth = false;
  res.render("account");
});

module.exports = router;