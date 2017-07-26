const express = require('express');
const ip = require('ip');
const BodyParser = require('body-parser');
const path = require('path');

const app = express();
const Router = express.Router();
const staticPath = '/src/static';
const app_config = require('./config');

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());
app.use('/static', express.static(path.join(__dirname, staticPath)));

app.get('/', (req, res, next) => {
    res.send('Hello world');
});

app.listen(app_config.port, () => {
    console.log(`\n\nServer at ${ip.address()} listening to port: ${app_config.port}`);
});

module.exports = Router;
