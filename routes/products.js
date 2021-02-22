let express = require('express');
let router = express.Router();
const productsController = require('../controllers/products')
const dataproducts = require('../data/products.json'); // a corregir


// Middlewares

//router.use('/',(productsController.all)); A CORREGIR
router.use('/autos', (productsController.autos));
router.use('/motos', (productsController.motos));
router.use('/monopatines', (productsController.monopatines));
router.use('/detail/:id?', (productsController.detail));


//Routes

router.get('/create',(req,res) => {
    res.render('../views/products/create');
});

router.get('/autos/:id/edit',(req,res) => {
    res.render('../views/products/listProduct.ejs');
});
router.get('/motos/:id',(req,res) => {
    res.render('../views/products/detalleProducto.ejs');
});
router.get('/motos/:id/edit',(req,res) => {
    res.render('../views/products/detalleProducto.ejs');
});
router.get('/monopatines/:id',(req,res) => {
    res.render('../views/products/detalleProducto.ejs');
});
router.get('/monopatines/:id/edit',(req,res) => {
    res.render('../views/products/detalleProducto.ejs');
});


module.exports = router;