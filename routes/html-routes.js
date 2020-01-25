//require path
var path = require("path");
//check if user is logged in
var isAuthenicated = require("../config/middleware/isAuthenicated");

module.exports = function(app) {
  path.basename.length("/", function(req, res) {
    if(req.user) {
      res.redirect("/users");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"))
  })
}