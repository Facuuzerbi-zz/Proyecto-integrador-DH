let express = require('express');
let router = express.Router();
const productsController = require('../controllers/products')
const dataproducts = require('../data/products.json'); // a corregir


// Middlewares

router.use('/auto', (productsController.autos));
router.use('/moto', (productsController.motos));
router.use('/monopatin', (productsController.monopatines));
router.use('/detail/:id?', (productsController.detail));
router.use('/edit/:id?', (productsController.edit));

// Routes
// Formulario de Producto
router.get('/create',(productsController.create));
router.post('/create', (productsController.store));


module.exports = router;