const express = require('express');
const router = express.Router();


// Controller
const userController = require ('../controllers/userController');

// Middlewares
const validationsCreate = require ('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require ('../middlewares/guestMiddleware');
const authMiddleware = require ('../middlewares/authMiddleware');

// Form de Registro
router.get('/signin', guestMiddleware, userController.signin);
router.post('/signin',validationsCreate, userController.processSignin);

// Form de Edit
router.get('/edit/:id', guestMiddleware, userController.edit);
router.post('/edit/:id',validationsCreate, userController.saveEdit);

// Form de Log in 
router.get('/login',  guestMiddleware, userController.login);
router.post('/login', userController.processLogin);

// Log out
router.get('/logout', userController.logout);

// Perfil de usuario
router.get('/profile', authMiddleware, userController.profile);


module.exports = router;