const express = require('express');

const connection = require('./database/connection');
const ongContrlloer = require('./controllers/OngController')

const incidentsControllers = require('./controllers/IncidentsControllers');

const profileControllers = require('./controllers/ProfileControllers')

const sessionControllers = require('./controllers/SessionControllers')
const routes = express.Router();

//tabelas ongs
routes.get('/ongs', ongContrlloer.index);
routes.post('/ongs', ongContrlloer.create);

//tabelas incidents
routes.post('/incidents', incidentsControllers.create);
routes.get('/incidents', incidentsControllers.index);
routes.delete('/incidents/:id', incidentsControllers.delete);

//tabelas incidents de caso especificos de uma determinada ong
routes.get('/profile', profileControllers.index)


//rotas de login na tabela ong
routes.post('/session', sessionControllers.create)
module.exports = routes;