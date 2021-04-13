const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const User = db.User;

const userController ={
    signin: (req,res) => {
        return res.render('../views/users/signin');
    },
    processSignin:(req,res)=>{
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render ('../views/users/signin', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        
        let userInDB =  db.users.findAll({attributes: ['email'], where: {email:req.body.email} });

        if (userInDB =!"<pending>"){
            return res.render ('../views/users/signin.ejs', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }
            db.users.create({
                firstname:req.body.first_name,
                lastname:req.body.last_name,
                email:req.body.email,
                password:req.body.password,
            });
            let userToCreate = {
                ...req.body,
                password: bcryptjs.hashSync(req.body.password, 10)
            }
             res.redirect('../user/login');
        },
       
    login: (req,res) => {
        return res.render('../views/users/login.ejs');
    },

    processLogin: (req,res) => {
        let userToLogin =  db.users.findAll({attributes: ['email',"password"], where: {email:req.body.email} });

        console.log(userToLogin)
        if(userToLogin!="<pending>") {
            //let PassOk = (userToLogin.password);//falta validacion de password,
            let PassOk = bcryptjs.compareSync(req.body.password, userToLogin);
            if(PassOk) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.remember_user){
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 });
                }

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
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },
 

}

module.exports = userController;
