const router = require('express').Router();
const getGenre = require('../controllers/getGenre')
const getGenres = require('../controllers/getGenres')
const getPlatform = require('../controllers/getPlatform')
const getPlatforms = require('../controllers/getPlatforms')
const getVideogames = require('../controllers/getVideogames')
const getVideogamesById = require('../controllers/getVideogamesById')
const getVideogamesByName = require('../controllers/getVideogamesByName')
const postVideogames = require('../controllers/postVideogames')
const getUsers = require('../controllers/getUsers')
const postUsers = require('../controllers/postUsers')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', getVideogames);
router.get('/videogames/name', getVideogamesByName)
router.get('/videogames/:id', getVideogamesById)
router.get('/genre', getGenre)
router.get('/genres', getGenres)
router.get('/users', getUsers)
router.get('/platforms', getPlatforms)
router.get('/platform', getPlatform)
router.post('/videogames', postVideogames)
router.post('/users', postUsers)

module.exports = router;