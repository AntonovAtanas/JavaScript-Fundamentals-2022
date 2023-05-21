const express = require('express');
const handlebars = require('express-handlebars');
const fs = require('fs/promises');

const app = express();

// Configure handlebars
app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// Load all public files - css, favicon etc.
app.use(express.static('public'));

// Body parser middleware
const bodyParser = express.urlencoded({ extended: false });
app.use(bodyParser);

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

app.post('/cats/add-cat', async (req, res) => {
    const cat = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        breed: req.body.breed
    }

    let data = await fs.readFile('./database/cats.json');

    if (data.length == 0) {
        //add data to json file
        await fs.writeFile('./database/cats.json', JSON.stringify([cat], null, 2))
    } else {
        //append data to json file
        const json = JSON.parse(data)
        //add json element to json object
        json.push(cat);
        await fs.writeFile('./database/cats.json', JSON.stringify(json, null, 2))
    }

    res.redirect('/');
})


app.listen(5000, () => {
    console.log('Server is running at port 5000...')
});