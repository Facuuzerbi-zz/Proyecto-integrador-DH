let express = require('express');
let router = express.Router();
const dataproducts = require('../data/products.json'); // a corregir


// Sprint 4
router.get('/',(req,res) => {
    res.json(dataproducts);
});

router.get('/create',(req,res) => {
    res.render('../views/products/create.ejs');
});

router.get('/:id',(req,res) => {
    
});


//

//localhost:3030/products/auto
router.get('/auto',(req,res) => {
    res.render(controller.auto);
});

router.get('/moto',(req,res) => {
    res.render('../views/products/detalleProducto.ejs');
});

router.get('/monopatin',(req,res) => {
    res.render('../views/products/detalleProducto.ejs');
});
    

module.exports = router;