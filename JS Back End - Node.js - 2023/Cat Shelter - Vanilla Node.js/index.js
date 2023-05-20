const http = require('http');
const querystring = require('querystring');
const url = require('url');

let { catsArray } = require('./views/catsDatabase.js');
let { breedsArray } = require('./views/breedsDatabase.js');

const homeView = require('./views/home/home.js');
const css = require('./views/styles/site.js');
const addBreed = require('./views/addBreed.js');
const addCat = require('./views/addCat.js');
const editCat = require('./views/editCat.js');
const catShelter = require('./views/catShelter.js');

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-type': 'text/html'
    })

    if (req.url == '/') {
        res.write(homeView(catsArray))
    } else if (req.url == '/styles/site.js') {
        res.writeHead(200, {
            'Content-type': 'text/css'
        })
        res.write(css)
    } else if (req.url == '/add-breed' && req.method === 'GET') {
        res.write(addBreed)
    } else if (req.url == '/add-cat' && req.method === 'GET') {
        res.write(addCat(breedsArray));
    } else if (req.url == '/add-breed' && req.method === 'POST') {

        let body = []
        req.on('data', (data) => {

            body.push(data);

        }).on('end', () => {
            body = Buffer.concat(body).toString();

            let qs = querystring.parse(body)

            let breed = qs.breed;

            breedsArray.push(breed)

        })
        homeRedirect(res)
    } else if (req.url == '/add-cat' && req.method === 'POST') {

        let body = []
        req.on('data', (data) => {

            body.push(data);

        }).on('end', () => {

            body = Buffer.concat(body).toString();
            let qs = querystring.parse(body)

            let id = catsArray.length + 1;
            let name = qs.name
            let breed = qs.breed;
            let description = qs.description;
            let img = qs.image;

            let cat = { id, name, breed, description, img };

            catsArray.push(cat);

        })
        homeRedirect(res)
    } else if (req.url.includes('edit') && req.method === 'GET') {
        let id = req.url.split('/')[3];

        let foundCat = catsArray.find(cat => cat.id == id);

        res.write(editCat(foundCat, breedsArray));
    } else if (req.url.includes('edit') && req.method === 'POST') {
        let body = []
        req.on('data', (data) => {

            body.push(data);

        }).on('end', () => {

            body = Buffer.concat(body).toString();
            let qs = querystring.parse(body)

            let catIndex = Number(req.url.split('/')[2]) - 1;

            let name = qs.name
            let breed = qs.breed;
            let description = qs.description;
            let img = qs.image;

            catsArray[catIndex].name = name;
            catsArray[catIndex].breed = breed;
            catsArray[catIndex].description = description;
            catsArray[catIndex].img = img;
        })
        homeRedirect(res)
    } else if (req.url.includes('shelter') && req.method === 'GET') {
        let id = req.url.split('/')[3] - 1;
        let foundCat = catsArray[id];
        res.write(catShelter(foundCat));
    } else if (req.url.includes('shelter') && req.method === 'POST') {
        let id = req.url.split('/')[3] - 1;
        catsArray.splice(id, 1);
        homeRedirect(res);
    } else if (req.url.includes('search')) {
        let urlObj = url.parse(req.url);

        let search = querystring.decode(urlObj.query).search;
        
        let searchResult = [];

        for (const cat of catsArray) {
            for (const key in cat) {
                let value = cat[key];
                if (typeof value !== 'number' && value.includes(search)){
                    searchResult.push(cat)
                    break;
                }
            }
        }

        res.write(homeView(searchResult));
    }
    res.end()
})

console.log('Server is running at port 5000...')
server.listen(5000)

function homeRedirect(res) {
    res.writeHead(302, {
        location: 'http://localhost:5000/'
    })
}