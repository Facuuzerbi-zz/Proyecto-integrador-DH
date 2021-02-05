const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));
app.use('/', require('./routes/principal.js'))
app.use('/product', require('./routes/product.js'));
app.use('/lista', require('./routes/lista.js'));
app.use('/auth', require('./routes/auth.js'));

app.set('view engine','ejs');

app.listen(process.env.PORT || 3030, () => console.log('Servidor Corriendo')); 
