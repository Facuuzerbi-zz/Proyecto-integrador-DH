const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//app.use(express.static(‘public’));

app.listen(3030, ()=> console.log('Servidor Corriendo')); 

app.get('/', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/Home.html');
    res.sendFile(htmlPath);
});

app.get('/Home2', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/Home2.html');
    res.sendFile(htmlPath);
});

app.get('/login', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/Login.html');
    res.sendFile(htmlPath);
});

app.get('/sigin', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/Sigin.html');
    res.sendFile(htmlPath);
});

app.get('/auto', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/detalleProducto.html');
    res.sendFile(htmlPath);
});

app.get('/moto', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/Producto-moto.html');
    res.sendFile(htmlPath);
});

app.get('/monopatin', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/Producto-monopatin.html');
    res.sendFile(htmlPath);
});

app.get('/cart', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/Cart.html');
    res.sendFile(htmlPath);
});

app.get('/crear', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/createProduct.html');
    res.sendFile(htmlPath);
});

app.get('/header', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/header.html');
    res.sendFile(htmlPath);
});