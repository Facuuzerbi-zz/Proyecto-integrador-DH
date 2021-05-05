const fs = require('fs');
const data = require('../data/products.json');
const db = require('../database/models');
const Product = db.Product;
const Producttype = db.Producttype;

module.exports = {
    autos: function (req,res){
        let productosAMostrar = data.filter(x => x.category == "auto");
        res.render('../views/products/products.ejs', {productosAMostrar});
    },
    motos: function (req,res){
        let productosAMostrar = data.filter(x => x.category == "moto");
        res.render('../views/products/products.ejs', {productosAMostrar});
    },
    monopatines: function (req,res){
        let productosAMostrar = data.filter(x => x.category == "monopatin");
        res.render('../views/products/products.ejs', {productosAMostrar});
    },
    detail: function (req,res){
        let id = req.params.id;
        let productsDetail = data.filter(x => x.id == id);
        
        res.render('../views/products/productsDetail.ejs',{productsDetail});
    },
    //FORMULARIO DE PRODUCTO
    edit: function (req,res){
        let productoAEditar = data.find(product => product.id == req.params.id);
        res.render('../views/products/edit.ejs', {productoAEditar});
        let newArray = {
                id : req.params.id,
                name : req.body.name,
                description : req.body.description,
                price : req.body.price,
                image : req.body.image,
                potency : req.body.potency,
                autonomy : req.body.autonomy,
                security : req.body.security,
                ch1Desc : req.body.ch1Desc,
                ch1img : req.body.ch1img,
                ch2Desc : req.body.ch2Desc,
                ch2img : req.body.ch2img,
                ch3Desc : req.body.ch3Desc,
                ch3img : req.body.ch3img,
            }
        let esto = JSON.stringify(newArray);
        fs.writeFileSync("esto.json",esto);
        res.redirect('/');
    },
    create:(req,res)=>{
        //peticion db. a los tipos de productos de la bd
        Producttype.findAll().then(function(types){
            return res.render('../views/products/create.ejs',{types});
        })




}, 

store: function (req,res){
    const create = Product.create({
        name:req.body.name,
        description:req.body.description,
        productstypeid:req.body.category,
        price:req.body.price,
        potency:req.body.potency,
        autonomy:req.body.autonomy,
        security:req.body.security,
        performancedesc:req.body.performancedesc,
        exteriordesc:req.body.exteriordesc,
        confortdesc:req.body.confortdesc,
        active:1,
    })

    const result = Producttype.findAll({
        attributes: [
        "category"
        ],
        where: { id: req.body.category }
        })
        
        .then(function(result){
            console.log(result)
            return res.redirect('/products/' + result[0].category);
        })


    //return agregarlo dentro del then agregar catch --> o que sea asincrono , se usan async await (try y catch)
    
    //return res.render('Hola');

}, 
}