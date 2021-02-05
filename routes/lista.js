let express = require('express');
let router = express.Router();


router.get('/auto',(req,res) => {
    res.render('../views/product/listProduct.ejs');
});

router.get('/moto',(req,res) => {
    res.render('../views/product/detalleProducto.ejs');
});

router.get('/monopatin',(req,res) => {
    res.render('../views/product/detalleProducto.ejs');
});
    

module.exports = router;