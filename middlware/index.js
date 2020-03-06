module.exports = function(req, res, next) {
  res.locals.isAuth = req.session.isAuth0;
  res.locals.errorMessage = req.session.errorMessage0;
  next();
};
