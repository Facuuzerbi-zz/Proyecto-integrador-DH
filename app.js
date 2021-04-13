const express = require('express');
const session = require ('express-session');
const cookies = require ('cookie-parser');

const app = express();
const path = require('path');
const methodOverride = require('method-override');

const publicPath = path.resolve(__dirname, './public');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


// Middlewares
app.use(express.static(publicPath));
app.use(methodOverride ('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: 'Shh, secret',
    resave: false,
    saveUninitialized: false,
}));

app.use(cookies());
app.use(userLoggedMiddleware);

// Routes
app.use('/', require('./routes/principal.js'))
app.use('/products', require('./routes/productsRoutes.js'));
app.use('/user', require('./routes/userRoutes.js'));

app.set('view engine','ejs');

app.listen(process.env.PORT || 3030, () => console.log('Servidor Corriendo')); 