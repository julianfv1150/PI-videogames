const router = require('express').Router();
const getGenre = require('../controllers/getGenre')
const getLanding = require('../controllers/getLanding')
const getVideogames = require('../controllers/getVideogames')
const getVideogamesById = require('../controllers/getVideogamesById')
const getVideogamesByName = require('../controllers/getVideogamesByName')
const postVideogames = require('../controllers/postVideogames')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', getLanding);
router.get('/videogames', getVideogames);
router.get('/videogames/name', getVideogamesByName)
router.get('/videogames/:id', getVideogamesById)
router.get('/genres', getGenre)
router.post('/videogames', postVideogames)

module.exports = router;