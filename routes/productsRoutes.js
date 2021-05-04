let express = require('express');
let router = express.Router();
const path = require('path');
const multer = require('multer');
const productsController = require('../controllers/productsController');


// Configuracion de Multer
let storage = multer.diskStorage({
    destination: (req, file, callback) => 
    {
        let folder = path.join(__dirname, '../public/img/products');
        callback(null, folder);
    },
    filename: (req, file, callback) =>  
    {
        let imageName = Date.now() + path.extname(file.originalname);
        callback(null, imageName);
    }
})

let fileUpload = multer({storage});


// Middlewares


router.use('/auto', (productsController.autos));
router.use('/moto', (productsController.motos));
router.use('/monopatin', (productsController.monopatines));
router.use('/detail/:id?', (productsController.detail));
router.use('/edit/:id?', (productsController.edit));

// Routes
// Formulario de Producto
router.get('/create', fileUpload.single('image'), (productsController.create));
router.post('/create', fileUpload.single('image'), (productsController.store));

//router.get('/create', (productcrudController.create));
//router.post('/create', (productcrudController.store));

module.exports = router;