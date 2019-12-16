const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/user', UserController.show);
routes.post('/user', UserController.store);
routes.post('/login', UserController.login);

module.exports = routes;
