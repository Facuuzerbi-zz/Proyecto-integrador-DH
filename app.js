const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));
app.use('/product', require('./routes/product.js'));

app.set('view engine','ejs');

app.listen(process.env.PORT || 3030, () => console.log('Servidor Corriendo')); 

app.get('/', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/Home.ejs');
    res.render(htmlPath);
});

app.get('/login', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/users/Login.ejs');
    res.render(htmlPath);
});

app.get('/sigin', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/users/Sigin.ejs');
    res.render(htmlPath);
});

app.get('/cart', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/Cart.ejs');
    res.render(htmlPath);
});

app.get('/crear', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/product/createProduct.ejs');
    res.render(htmlPath);
});

app.get('/header', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/partials/header.ejs');
    res.render(htmlPath);
});