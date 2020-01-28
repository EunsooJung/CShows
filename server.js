/**
 * Node.js Program Lifecycle
 * server.js --> Start Script --> Parse Code, Register Variables & Functions --> Event loop (The node Appliction) --> Keep on running as long as there are event listeners registerd
 */
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const ehbs = require('express-handlebars');

const app = express();

// Requiring our models for syncing
var db = require('./models');

// Register Handlebars Engine
app.engine(
  'hbs',
  ehbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);
app.set('view engine', 'hbs');
app.set('views', 'views');
// add purchase ticket
const adminData = require('./routes/ticket');
// import shop routes
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
// express static
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', adminData.routes);
app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

var PORT = process.env.PORT || 8080;

// Starts the server to begin listening
// =============================================================

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
