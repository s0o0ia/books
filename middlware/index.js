module.exports = function(req, res, next) {
  res.locals.isAuth = req.session.isAuth;
  res.locals.errorMessage = req.session.errorMessage0;
  next();
};