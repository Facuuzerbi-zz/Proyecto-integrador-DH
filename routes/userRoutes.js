let express = require('express');
let router = express.Router();

// Controller
const usersController = require ('../controllers/userController');


// Middlewares
const validations = require ('../middlewares/validateRegisterMiddleware');

// Form de Registro
router.get('/signin', usersController.signin);
router.post('signin',validations, usersController.processSignin);

// Form de Log in 
router.get('/login', usersController.login);

// Perfil de usuario
router.get('/profile/:userId', usersController.profile);


module.exports = router;