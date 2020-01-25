const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
var methodOverride = require("method-override")

var passport = ("./config/passport");

// setup middleware
const app = express();
const PORT = process.env.PORT || 3000;

// To use local static file
app.use(express.static("public"));

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//passport
app.use(session({ secret: "secret", resave:true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
// setup method-override
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//routes
var routes = require("./controllers/mainController");
app.use(routes)


// Setup Handlebars engine

app.listen(PORT, function() {
  console.log('Server listening on: http://localhost: ' + PORT);
});
