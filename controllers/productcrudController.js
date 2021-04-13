const fs = require('fs');
const db = require('../database/models');
const Product = db.Product;

let productcrudController = {
    create:(req,res)=>{
        const create = db.Product.create({
            name:req.body.name,
            description:req.body.description,
            producsttypeid:req.body.producsttypeid,
            price:req.body.price,
            potency:req.body.potency,
            autonomy:req.body.autonomy,
            security:req.body.security,
            active:1,

        })
       
        //res.redirect("/create");
        res.redirect('../user/login');


}, 

store: function (req,res){
    //req.body;
    return res.render('../views/products/productcreate.ejs');
},
    

}
module.exports = productcrudController;