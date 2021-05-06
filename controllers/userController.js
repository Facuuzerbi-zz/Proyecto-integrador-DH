const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const User = db.User;

const userController = {
    signin: (req,res) => {
        return res.render('../views/users/signin');
    },
     processSignin: async (req,res)=>{
        try {
            const password =req.body.password;
            const hash = await bcryptjs.hash(password,10);
            await db.users.create({
                firstname:req.body.first_name,
                lastname:req.body.last_name,
                email:req.body.email,
                password:hash,
            });
            console.log('todo ok');
            res.redirect('../user/login');


        } catch(e){
            console.log(e);
            console.log('algo anda mal');
        }
        
     
    },
    login: (req,res) => {

        return res.render('../views/users/login.ejs');
    
},
    processLogin: async (req,res) => {
        try {                
            let password = req.body.password
            const user = await db.users.findOne({
                attributes: [
                    "email", "password"],
            where: {email: req.body.email}
    
        });
            if(user){
                const validPass = await bcryptjs.compare(password, user.hash);
                if(validPass){
                    console.log('pass correcta');
                    delete user.password;
                    req.session.userLogged = user;
                    
                    if(req.body.remember_user){
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 });
                }

                    return res.redirect('/user/profile');
                } else {
                    console.log('pass incorrecta');
                }
            } else {
                console.log('user no encontrado');
                return res.render('../views/users/login.ejs', {
                    errors: {
                        email: {
                            msg: 'Este email no se encuentra registrado'
                        }
                    }
                });
            }
        } catch (e){
            console.log(e);
            console.log('algo se rompio')
            return res.render('../views/users/login.ejs', {
                errors: {
                    email: {
                        msg: 'Problema en Credenciales'
                    }
                }
            });
        }         
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
