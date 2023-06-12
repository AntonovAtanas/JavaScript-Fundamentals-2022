const express = require('express');

const routes = require('./routes');

const handlebarsConfig = require('./config/handlebarsConfig');
const expressConfig = require('./config/expressConfig');

const app = express();

const PORT = 3000;

expressConfig(app);
handlebarsConfig(app);

app.use(routes);

app.listen(PORT, () => console.log('App is running on port 3000...'))