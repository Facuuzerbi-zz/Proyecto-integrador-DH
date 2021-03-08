const express = require('express');
const router = express.Router();


// Controller
const usersController = require ('../controllers/userController');

// Middlewares
const validationsCreate = require ('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require ('../middlewares/guestMiddleware');

// Form de Registro
router.get('/signin', guestMiddleware, usersController.signin);
router.post('/signin',validationsCreate, usersController.processSignin);

// Form de Log in 
router.get('/login',  guestMiddleware, usersController.login);
router.post('/login', usersController.processLogin);

// Perfil de usuario
router.get('/profile', usersController.profile);


module.exports = router;