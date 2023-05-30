const express = require('express');
const mongoose = require('mongoose');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const PORT = 5000;

const app = express();

const routes = require('./routes')

expressConfig(app);
handlebarsConfig(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));