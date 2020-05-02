const express = require('express');
const UsersController = require('./controllers/UsersController');
const LibraryController = require('./controllers/LibraryController');
const ProfileUserController = require('./controllers/ProfileUserController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

routes.post('/sessions', SessionController.create);

routes.get('/library', LibraryController.index);
routes.post('/library', LibraryController.create);
routes.delete('/library/:id', LibraryController.delete);

routes.get('/profileUser', ProfileUserController.index);

module.exports = routes;