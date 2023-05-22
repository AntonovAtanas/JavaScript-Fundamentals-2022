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

// HOME
app.get('/', async (req, res) => {
    const cats = JSON.parse(await fs.readFile('./database/cats.json'));
    res.render('home', { cats })
})

// ADD BREED
app.get('/cats/add-breed', (req, res) => {
    res.render('addBreed')
})

app.post('/cats/add-breed', async (req, res) => {
    const breed = {
        breed: req.body.breed
    }

    let breedsDatabase = await fs.readFile('./database/breeds.json');

    if (breedsDatabase.length == 0) {
        await fs.writeFile('./database/breeds.json', JSON.stringify([breed], null, 2))
    } else {
        const json = JSON.parse(breedsDatabase);

        json.push(breed);

        await fs.writeFile('./database/breeds.json', JSON.stringify(json, null, 2));
    }

    res.redirect('/');
})

// ADD CAT
app.get('/cats/add-cat', async (req, res) => {
    const breeds = JSON.parse(await fs.readFile('./database/breeds.json', 'utf-8'));
    res.render('addCat', { breeds });
})

app.post('/cats/add-cat', async (req, res) => {
    const cat = {
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        breed: req.body.breed
    }

    let catsDatabase = await fs.readFile('./database/cats.json');

    if (catsDatabase.length == 0) {
        //add data to json file - if the database is not created (empty) - create it.
        await fs.writeFile('./database/cats.json', JSON.stringify([cat], null, 2))
    } else {
        //append data to json file
        const json = JSON.parse(catsDatabase)
        //add new cat to json object
        json.push(cat);
        await fs.writeFile('./database/cats.json', JSON.stringify(json, null, 2))
    }

    res.redirect('/');
})


app.listen(5000, () => {
    console.log('Server is running at port 5000...')
});