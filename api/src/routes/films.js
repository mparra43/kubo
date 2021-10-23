/* rutas del movies  */
const {Router} = require('express');
const {check} = require('express-validator');
const {validateInput} = require('../middlewares/validateInput');
const {categoryAll, allFilms, addFilms} = require('../controllers/film');
const router = Router();


router.get('/category', categoryAll);
router.get('/all/movies', allFilms);
router.post('/addFilms',
    [// middleware de express validator
        check('id', 'El id es obligatorio').not().isEmpty(),
        check('movie', 'El titulo de la  película  es obligatorio').not().isEmpty(),
        check('rating', 'La  Clasificación es obligatoria').not().isEmpty(),
        validateInput,
    ],
    addFilms);


module.exports = router;