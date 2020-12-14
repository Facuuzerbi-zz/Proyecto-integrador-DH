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

app.get('/login', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/Login.html');
    res.sendFile(htmlPath);
});

app.get('/sigin', (req,res) => {
    let htmlPath = path.resolve(__dirname,'./views/Sigin.html');
    res.sendFile(htmlPath);
});

