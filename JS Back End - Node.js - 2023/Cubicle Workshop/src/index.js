const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig');

const PORT = 5000;

const app = express();

const routes = require('./routes')

dbConnect()
    .then(() => console.log('Db has connected successfully.'))
    .catch((err) => console.log(`Failed to connect to db - ${err}`))

expressConfig(app);
handlebarsConfig(app);

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));