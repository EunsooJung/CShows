var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.join(req.user);
    });

    app.get("api/user_data", function(req, res){
        if( !req.user) {
            res.json({});
        } else {
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });
};