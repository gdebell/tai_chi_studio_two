function checkSignIn (req, res, next) {
  console.log('You are in the checkSignIn function!!!!');
  if (!req.session.user) {
    console.log('you just hit the check sign in function!');
    req.body.err = true;
  }
  next();
}

module.exports = {
  checkSignIn
};
