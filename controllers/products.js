const data = require('../data/products.json');

const toThousand = n => n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

module.exports = {
    /*all: function(req,res){
        productosAMostrar = data;
        res.render('../views/products/products.ejs', {productosAMostrar});
    },*/
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
        res.render('../views/products/productsDetail.ejs', {productsDetail});
    }
}