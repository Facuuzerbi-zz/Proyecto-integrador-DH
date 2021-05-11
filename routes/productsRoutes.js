let express = require('express');
let router = express.Router();
const path = require('path');
//const multer = require('multer');
//const uploadController = require('../controllers/upload');
const upload = require('../middlewares/uploadMiddleware');
const productsController = require('../controllers/productsController');

router.use('/auto', (productsController.autos));
router.use('/moto', (productsController.motos));
router.use('/monopatin', (productsController.monopatines));
router.use('/detail/:id?', (productsController.detail));
router.use('/edit/:id?', (productsController.edit));

// Routes
// Formulario de Producto
router.get('/create',  (productsController.create));
router.post('/create', upload.single("file"), (productsController.store));

//router.get('/create', (productcrudController.create));
//router.post('/create', (productcrudController.store));

module.exports = router;