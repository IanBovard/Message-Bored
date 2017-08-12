function isAuthenticated (req, res, next){
  if (req.isAuthenticated()){
    return next();
  }else{
    return res.json( { success: false, message: 'You need to be logged in to do that.'});
  }
}

module.exports = { isAuthenticated: isAuthenticated };