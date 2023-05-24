const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const error404 = require('./controllers/404')

const PORT = 5000;

const app = express();

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);
app.use('/cube', cubeController);
app.use('*', error404);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));