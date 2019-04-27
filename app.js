const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost/newsdb', { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
