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
    const cats = JSON.parse(await fs.readFile('./database/cats.json', 'utf-8'));
    res.render('home', { cats })
});

// ADD BREED
app.get('/cats/add-breed', (req, res) => {
    res.render('addBreed')
});

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
});

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

    let catsDatabase = JSON.parse(await fs.readFile('./database/cats.json', 'utf-8'));

    cat.id = catsDatabase.length + 1;

    if (catsDatabase.length == 0) {
        //add data to json file - if the database is not created (empty) - create it.
        await fs.writeFile('./database/cats.json', JSON.stringify([cat], null, 2))
    } else {
        //add new cat to the database
        catsDatabase.push(cat);
        await fs.writeFile('./database/cats.json', JSON.stringify(catsDatabase, null, 2))
    }

    res.redirect('/');
})

// CAT DETAILS
app.get('/edit/cat/:id', async (req, res) => {
    const id = req.params.id;
    let cats = JSON.parse(await fs.readFile('./database/cats.json', 'utf-8'));
    const breeds = JSON.parse(await fs.readFile('./database/breeds.json', 'utf-8'));

    const cat = cats[id - 1];
    res.render('editCat', { cat, breeds })
});

app.post('/edit/cat/:id', async (req, res) => {
    const id = req.params.id - 1;

    let catsDatabase = JSON.parse(await fs.readFile('./database/cats.json', 'utf-8'));

    catsDatabase[id].name = req.body.name;
    catsDatabase[id].description = req.body.description;
    catsDatabase[id].image = req.body.image;
    catsDatabase[id].breed = req.body.breed;

    await fs.writeFile('./database/cats.json', JSON.stringify(catsDatabase, null, 2));

    res.redirect('/');

})

// SHELTER CAT
app.get('/shelter/cat/:id', async (req, res) => {
    const id = req.params.id - 1;

    const catsDatabase = JSON.parse(await fs.readFile('./database/cats.json', 'utf-8'));

    const cat = catsDatabase[id]

    res.render('catShelter', { cat })
})

app.post('/shelter/cat/:id', async (req, res) =>{
    const id = req.params.id - 1;

    const catsDatabase = JSON.parse(await fs.readFile('./database/cats.json', 'utf-8'));

    catsDatabase.splice(id, 1);

    await fs.writeFile('./database/cats.json', JSON.stringify(catsDatabase, null, 2));

    res.redirect('/');
})

app.listen(5000, () => {
    console.log('Server is running at port 5000...')
});