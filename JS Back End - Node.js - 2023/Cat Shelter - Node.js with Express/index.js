const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

// Configure handlebars
app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// Load all public files - css
app.use(express.static('public'));

// Main router
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats/add-breed', (req, res) => {
    res.render('addBreed')
})

app.get('/cats/add-cat', (req, res) => {
    res.render('addCat')
})

app.listen(5000, () => {
    console.log('Server is running at port 5000...')
});