const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
//Http logger
app.use(morgan('combined'));
//Template engine
app.engine('handlebars', handlebars.engine({
    extname: '.hbs',
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources\\views'));

app.get('/', (req, res) => res.render('home'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));