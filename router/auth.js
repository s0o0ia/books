const { Router } = require("express");
const router = Router();
const users = [
  {
    login: "s0o0ia",
    pass: "1111"
  },
  {
    login: "oritek",
    pass: "6666"
  }
];




router.get("/account", (req, res) => {
  console.log("_____", req.session);
  res.render("account");
});

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
      res.redirect("/admin");
    } else {
      console.log("не авторизовано");
      req.session.isAuth = false;
      res.redirect("/account");
    }
  } //
  //if not exist
  else {
    console.log("чувака НЕ існує");
    res.redirect("/account");
  }

  // console.log(users)
});

router.get("/admin", (req, res) => {
  if (req.session.isAuth == true) {
    console.log("--------admin page------------", req.session);
    res.render("admin", {
      isAuth: req.session.isAuth,
      username: req.session.user.username
    });
  } else {
    res.redirect("/account");
  }
});

router.get("/logout", (req, res) => {
  req.session.isAuth = false;
  res.redirect("/account");
});

module.exports = router;
