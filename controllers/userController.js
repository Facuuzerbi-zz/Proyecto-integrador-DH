const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require ('../models/User');

const controller ={
    signin: (req,res) => {
        res.render('../views/users/signin');
    },
    processSignin: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render ('../views/users/signin', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
/*
        let userInDB = User.findByField('email', req.body.email);

        if (userInDB){
            return res.render ('../views/users/signin.ejs', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }
    
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10)
        }

        User.create(userToCreate);
        return res.send('Ok, se guardo el usuario');*/
    },
    login: (req,res) => {
        return res.render('../views/users/login.ejs');
    },
    profile: (req,res) => {
        return res.render('../views/users/userProfile.ejs');
    }
}

module.exports = controller;
