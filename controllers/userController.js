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
            let PassOk = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(PassOk) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect('/user/profile');
            }

            return res.render('../views/users/login.ejs', {
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            });
        }

        return res.render('../views/users/login.ejs', {
            errors: {
                email: {
                    msg: 'Este email no se encuentra registrado'
                }
            }
        });
    },

    profile: (req,res) => {
        return res.render('../views/users/userProfile.ejs',{
            user: req.session.userLogged
        });
    },
    
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }

}

module.exports = controller;
