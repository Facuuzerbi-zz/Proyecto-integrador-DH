const { body } = require('express-validator');  

const validationsCreate = [
    body('first_name').notEmpty().withMessage('Debes completar el nombre'),
    body('last_name').notEmpty().withMessage('Debes completar el apellido'),
    body('email').notEmpty().withMessage('Debes completar el email'),
    body('password').notEmpty().withMessage('Debes completar la contraseña'),
    body('accepted_terms').notEmpty().withMessage('Debes aceptar los terminos y condiciones')

]

module.exports = validationsCreate;

