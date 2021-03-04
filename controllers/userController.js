const { profile } = require('console');
const { validationResult } = require('express-validator')

const User = require ('../models/User')

const controller ={
    signin: (req,res) => {
        res.render('../views/users/signin.ejs');
    },
    processSignin: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.lenght > 0){
            return res.render ('../views/users/signin.ejs',{
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
    
        User.create(req.body);
        return res.send('Ok, se guardo el usuario');
    },
    login: (req,res) => {
        return res.render('../views/users/login.ejs');
    },
    profile: (req,res) => {
        return res.render('../views/users/userProfile.ejs');
    }
}

module.exports = controller;
