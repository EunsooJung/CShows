const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');


// setup middleware
const app = express();
const PORT = process.env.PORT || 3000;

// To use local static file
app.use(express.static(process.cwd() + '/public'));

// setup body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// setup method-override
app.use(methodOverride('_method'));

// Setup Handlebars engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
  console.log('Burger Server listening on: http://localhost: ' + PORT);
});
