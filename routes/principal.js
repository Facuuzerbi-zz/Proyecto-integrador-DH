let express = require('express');
let router = express.Router();


router.get('/', (req,res) => {
    res.render('../views/home.ejs'); 
});

router.get('/cart', (req,res) => {
    res.render('../views/cart.ejs');
});

router.get('/construccion', (req,res) => {
    res.render('../views/construccion.ejs');
});
module.exports = router;