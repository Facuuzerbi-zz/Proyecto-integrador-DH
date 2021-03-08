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

        let userCreated = User.create(userToCreate);
        return res.redirect('../user/login');
    },

    login: (req,res) => {
        return res.render('../views/users/login.ejs');
    },

    processLogin: (req,res) => {
        let userToLogin = User.findByField('email', req.body.email);
        
        if(userToLogin) {
            res.send(userToLogin);
            /*
            let isPassOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isPassOk) {
                return res.send('Ok puedes ingresar');
            }
            */
        }

        return res.render('../views/users/login.ejs', {
            errors: {
                email: {
                    msg: 'Este email no se encuentra registrado'
                }
            }
        })
    },

    profile: (req,res) => {
        return res.render('../views/users/userProfile.ejs');
    }
}

module.exports = controller;
