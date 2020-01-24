/**
 * Node.js Program Lifecycle
 * server.js --> Start Script --> Parse Code, Register Variables & Functions --> Event loop (The node Appliction) --> Keep on running as long as there are event listeners registerd
 */
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
var methodOverride = require('method-override');

// setup middleware
const app = express();
const PORT = process.env.PORT || 3000;

// To use local static file
app.use(express.static(process.cwd() + '/public'));

// setup body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// setup method-override
app.use(methodOverride('_method'));

// Setup Handlebars engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
  console.log('Server listening on: http://localhost: ' + PORT);
});
