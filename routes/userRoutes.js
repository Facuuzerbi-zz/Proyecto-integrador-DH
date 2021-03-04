const express = require('express');
const router = express.Router();

// Controller
const usersController = require ('../controllers/userController');

// Middlewares
const { body } = require('express-validator');  

const validations = [
    body('first_name').notEmpty(),
    body('last_name').notEmpty(),
    body('email').notEmpty(),
    body('password').notEmpty(),
    body('accepted_terms').notEmpty(),
]

// Form de Registro
router.get('/signin', usersController.signin);
router.post('/signin',validations, usersController.processSignin);

// Form de Log in 
router.get('/login', usersController.login);
//router.get('/login', );

// Perfil de usuario
router.get('/profile/:userId', usersController.profile);


module.exports = router;