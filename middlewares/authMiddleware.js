function authMiddleware (req, res, next){
    if (!req.session.userLogged){
        return res.redirect('/user/signin');
    }
    next();
}

module.exports = authMiddleware;