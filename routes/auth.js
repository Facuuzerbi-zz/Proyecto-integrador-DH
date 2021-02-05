let express = require('express');
let router = express.Router();


router.get('/login', (req,res) => {
    res.render('../views/users/login.ejs');
});

router.get('/signin', (req,res) => {
    res.render('../views/users/signin.ejs');
});

module.exports = router;